import Foundation
import OSLog

struct NoBody: Encodable {}

enum HTTPMethod: String {
  case GET = "GET"
  case POST = "POST"
  case PUT = "PUT"
  case PATCH = "PATCH"
  case DELETE = "DELETE"
}

struct FetchParams<T: Encodable> {
  let method: HTTPMethod
  let url: String
  let baseUrl: String?
  let connection: Connection
  let body: T?
  
  init(method: HTTPMethod, url: String, connection: Connection, body: T, baseUrl: String? = nil) {
    self.method = method
    self.url = url
    self.connection = connection
    self.body = body
    self.baseUrl = baseUrl
  }
}

extension FetchParams where T == NoBody {
  init(method: HTTPMethod, url: String, connection: Connection, baseUrl: String? = nil) {
    self.method = method
    self.url = url
    self.connection = connection
    self.body = nil
    self.baseUrl = baseUrl
  }
}

enum JSONValue: Encodable {
  case string(String)
  case int(Int)
  case double(Double)
  case bool(Bool)
  case null
  
  func encode(to encoder: Encoder) throws {
    var container = encoder.singleValueContainer()
    switch self {
    case .string(let value): try container.encode(value)
    case .int(let value): try container.encode(value)
    case .double(let value): try container.encode(value)
    case .bool(let value): try container.encode(value)
    case .null: try container.encodeNil()
    }
  }
}

struct GraphQLRequestBody: Encodable {
  let query: String
  let variables: [String: JSONValue]?
  
  init(query: String, variables: [String: JSONValue]? = nil) {
    self.query = query
    self.variables = variables
  }
}

private let fetcherLogger = Logger(subsystem: "station.widget", category: "Fetcher")

private func fetch<T: Encodable>(params: FetchParams<T>, completion: @escaping (Result<Data, Error>) -> Void) {
  if (!params.url.starts(with: "/")) {
    fetcherLogger.error("InvalidUrl: URL should start with / — provided=\(params.url)")
    return completion(.failure(NSError(domain: "InvalidUrl", code: 0, userInfo: [NSLocalizedDescriptionKey: "URL should start with /"])))
  }
  
  let fullUrlString = params.baseUrl != nil ? "\(params.baseUrl ?? "")\(params.url)" : "https://backboard.railway.com\(params.url)"
  fetcherLogger.debug("Constructed full URL: \(fullUrlString)")
  
  guard let fullUrl = URL(string: fullUrlString) else {
    fetcherLogger.error("InvalidURL: Could not create URL from string: \(fullUrlString)")
    return completion(.failure(NSError(domain: "InvalidURL", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"])))
  }
  
  var request = URLRequest(url: fullUrl)
  
  request.httpMethod = params.method.rawValue
  request.addValue("application/json", forHTTPHeaderField: "Accept")
  request.addValue("Bearer \(params.connection.apiToken)", forHTTPHeaderField: "Authorization")
  
  if let body = params.body {
    request.addValue("application/json", forHTTPHeaderField: "Content-Type")
    let jsondata = try? JSONEncoder().encode(body)
    request.httpBody = jsondata
    fetcherLogger.debug("Attached HTTP body bytes=\(jsondata?.count ?? 0)")
  }
  
  let session = URLSession(configuration: .default)
  
  let task = session.dataTask(with: request) { data, response, error in
    if let error = error {
      fetcherLogger.error("Request failed with error: \(String(describing: error))")
      completion(.failure(error))
      return
    }
    
    guard let httpResponse = response as? HTTPURLResponse else {
      fetcherLogger.error("InvalidResponse: Response was not HTTPURLResponse")
      return completion(.failure(NSError(domain: "InvalidResponse", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])))
    }
    
    fetcherLogger.debug("HTTP status=\(httpResponse.statusCode)")
    if !(200...299).contains(httpResponse.statusCode) {
      let error = NSError(domain: "HTTPError", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "HTTP Error: \(httpResponse.statusCode)"])
      
      if let data = data, let errorString = String(data: data, encoding: .utf8) {
        fetcherLogger.error("HTTP error body: \(errorString)")
      }
      
      fetcherLogger.error("Request failed with HTTP status \(httpResponse.statusCode)")
      return completion(.failure(error))
    }
    
    guard let data = data else {
      fetcherLogger.error("NoData: HTTP 2xx but data was nil")
      return completion(.failure(NSError(domain: "NoData", code: 0, userInfo: [NSLocalizedDescriptionKey: "No data received"])))
    }
    
    fetcherLogger.debug("Success response bytes=\(data.count)")
    completion(.success(data))
  }
  
  fetcherLogger.debug("Starting dataTask for \(fullUrlString)")
  task.resume()
}

func httpRequest<T: Decodable, K: Encodable>(params: FetchParams<K>) async throws -> T {
  try await withCheckedThrowingContinuation { continuation in
    fetch(params: params) { result in
      switch result {
      case .success(let data):
        do {
          let decoder = JSONDecoder()
          fetcherLogger.debug("Decoding response into \(String(describing: T.self))")
          let decodedResult = try decoder.decode(T.self, from: data)
          
          fetcherLogger.debug("Decoded successfully into \(String(describing: T.self))")
          continuation.resume(returning: decodedResult)
        } catch {
          let preview = String(data: data, encoding: .utf8) ?? "<non-utf8>"
          fetcherLogger.error("Decoding failed for \(String(describing: T.self)) error=\(String(describing: error)) preview=\(preview)")
          continuation.resume(throwing: error)
        }
      case .failure(let error):
        fetcherLogger.error("fetch failed error=\(String(describing: error))")
        continuation.resume(throwing: error)
      }
    }
  }
}
