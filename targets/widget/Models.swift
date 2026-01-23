import Foundation

let appGroupName: String = "group.com.station.mobile"
let connectionsKey: String = "connections"
let isSubscribedKey: String = "isSubscribed"

struct Connection: Decodable, Encodable {
  let id: String
  let apiToken: String
}

enum WidgetIntentState: Int {
  case loading = 0
  case apiFailed = 1
  case hasData = 2
  case noData = 3
}

struct Service: Decodable {
  let id: String
  let name: String
  let icon: String?
}

struct Environment: Decodable {
  let id: String
  let name: String
  let projectId: String
}

struct ServiceInstance: Decodable {
  let id: String
  let serviceId: String
  let environmentId: String
  var serviceName: String
}

struct Project: Decodable {
  let id: String
  let name: String
  let workspaceId: String
  let workspaceName: String
}

enum RangeOption: String, CaseIterable {
  case hour = "HOUR"
  case sixHours = "SIX_HOURS"
  case twelveHours = "TWELVE_HOURS"
  case day = "DAY"
  case week = "WEEK"
  
  var displayName: String {
    switch self {
    case .hour: return "1H"
    case .sixHours: return "6H"
    case .twelveHours: return "12H"
    case .day: return "24H"
    case .week: return "7D"
    }
  }
  
  var hours: Int {
    switch self {
    case .hour: return 1
    case .sixHours: return 6
    case .twelveHours: return 12
    case .day: return 24
    case .week: return 168
    }
  }
  
  var windowSeconds: Int {
    switch self {
    case .hour: return 60
    case .sixHours: return 300
    case .twelveHours: return 600
    case .day: return 1200
    case .week: return 3600
    }
  }
}

struct MetricValue: Decodable {
  let value: Double
  let unit: String
}

struct ServiceMetrics: Decodable {
  let cpu: MetricValue?
  let memory: MetricValue?
  let network: MetricValue?
}

struct ServiceWithMetrics: Decodable {
  let id: String
  let name: String
  let icon: String?
  let metrics: ServiceMetrics?
}

// GraphQL Response Models
struct GraphQLResponse<T: Decodable>: Decodable {
  let data: T?
  let errors: [GraphQLError]?
}

struct GraphQLError: Decodable {
  let message: String
}

struct MeResponse: Decodable {
  let me: MeData
}

struct MeData: Decodable {
  let workspaces: [Workspace]
}

struct Workspace: Decodable {
  let id: String
  let name: String
  let projects: ProjectsConnection
}

struct ProjectsConnection: Decodable {
  let edges: [ProjectEdge]
}

struct ProjectEdge: Decodable {
  let node: ProjectNode
}

struct ProjectNode: Decodable {
  let id: String
  let name: String
}

struct ProjectResponse: Decodable {
  let project: ProjectData
}

struct ProjectData: Decodable {
  let id: String
  let name: String
  let services: ServicesConnection
  let environments: EnvironmentsConnection
}

struct ServicesConnection: Decodable {
  let edges: [ServiceEdge]
}

struct ServiceEdge: Decodable {
  let node: ServiceNode
}

struct ServiceNode: Decodable {
  let id: String
  let name: String
  let icon: String?
}

struct EnvironmentsConnection: Decodable {
  let edges: [EnvironmentEdge]
}

struct EnvironmentEdge: Decodable {
  let node: EnvironmentNode
}

struct EnvironmentNode: Decodable {
  let id: String
  let name: String
  let projectId: String
  let serviceInstances: ServiceInstancesConnection
}

struct ServiceInstancesConnection: Decodable {
  let edges: [ServiceInstanceEdge]
}

struct ServiceInstanceEdge: Decodable {
  let node: ServiceInstanceNode
}

struct ServiceInstanceNode: Decodable {
  let id: String
  let serviceId: String
  let environmentId: String
}

struct MetricsResponse: Decodable {
  let metrics: [MetricSeries]
}

struct MetricSeries: Decodable {
  let measurement: String
  let values: [MetricSample]
}

struct MetricSample: Decodable {
  let value: Double?
}
