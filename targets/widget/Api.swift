import Foundation
import OSLog

private let apiLogger = Logger(subsystem: "station.widget", category: "Api")

func fetchWorkspacesAndProjects(connection: Connection) async throws -> [Project] {
  let query = """
    {
      me {
        workspaces {
          id
          name
          projects(first: 100) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  """
  
  let params = FetchParams(
    method: .POST,
    url: "/graphql/v2",
    connection: connection,
    body: GraphQLRequestBody(query: query)
  )
  
  let response: GraphQLResponse<MeResponse> = try await httpRequest(params: params)
  
  if let errors = response.errors, !errors.isEmpty {
    let message = errors.first?.message ?? "Unknown GraphQL Error"
    apiLogger.error("GraphQL error: \(message)")
    throw NSError(domain: "GraphQLError", code: 0, userInfo: [NSLocalizedDescriptionKey: message])
  }
  
  guard let data = response.data else {
    throw NSError(domain: "NoData", code: 0, userInfo: [NSLocalizedDescriptionKey: "No data in response"])
  }
  
  var projects: [Project] = []
  for workspace in data.me.workspaces {
    for edge in workspace.projects.edges {
      projects.append(Project(
        id: edge.node.id,
        name: edge.node.name,
        workspaceId: workspace.id,
        workspaceName: workspace.name
      ))
    }
  }
  
  return projects
}

struct ProjectDetails {
  let id: String
  let name: String
  let services: [Service]
  let environments: [EnvironmentWithInstances]
}

struct EnvironmentWithInstances {
  let id: String
  let name: String
  let projectId: String
  let serviceInstances: [ServiceInstance]
}

func fetchProjectDetails(connection: Connection, projectId: String) async throws -> ProjectDetails {
  let query = """
    query GetProjectDetails($id: String!) {
      project(id: $id) {
        id
        name
        services(first: 100) {
          edges {
            node {
              id
              name
              icon
            }
          }
        }
        environments(first: 100) {
          edges {
            node {
              id
              name
              projectId
              serviceInstances(first: 100) {
                edges {
                  node {
                    id
                    serviceId
                    environmentId
                  }
                }
              }
            }
          }
        }
      }
    }
  """
  
  let params = FetchParams(
    method: .POST,
    url: "/graphql/v2",
    connection: connection,
    body: GraphQLRequestBody(query: query, variables: ["id": .string(projectId)])
  )
  
  let response: GraphQLResponse<ProjectResponse> = try await httpRequest(params: params)
  
  if let errors = response.errors, !errors.isEmpty {
    let message = errors.first?.message ?? "Unknown GraphQL Error"
    apiLogger.error("GraphQL error for project \(projectId): \(message)")
    throw NSError(domain: "GraphQLError", code: 0, userInfo: [NSLocalizedDescriptionKey: message])
  }
  
  guard let data = response.data else {
    throw NSError(domain: "NoData", code: 0, userInfo: [NSLocalizedDescriptionKey: "Project not found"])
  }
  
  let servicesMap = Dictionary(uniqueKeysWithValues: data.project.services.edges.map { ($0.node.id, $0.node) })
  
  let services = data.project.services.edges.map { edge in
    Service(id: edge.node.id, name: edge.node.name, icon: edge.node.icon)
  }
  
  let environments = data.project.environments.edges.map { envEdge -> EnvironmentWithInstances in
    let instances = envEdge.node.serviceInstances.edges.map { instEdge -> ServiceInstance in
      let serviceName = servicesMap[instEdge.node.serviceId]?.name ?? "Unknown Service"
      return ServiceInstance(
        id: instEdge.node.id,
        serviceId: instEdge.node.serviceId,
        environmentId: instEdge.node.environmentId,
        serviceName: serviceName
      )
    }
    return EnvironmentWithInstances(
      id: envEdge.node.id,
      name: envEdge.node.name,
      projectId: envEdge.node.projectId,
      serviceInstances: instances
    )
  }
  
  return ProjectDetails(
    id: data.project.id,
    name: data.project.name,
    services: services,
    environments: environments
  )
}

func fetchServiceMetrics(
  connection: Connection,
  projectId: String,
  serviceId: String,
  environmentId: String,
  range: RangeOption
) async throws -> ServiceMetrics {
  let formatter = ISO8601DateFormatter()
  formatter.formatOptions = [.withInternetDateTime]
  let startDate = Date().addingTimeInterval(TimeInterval(-range.hours * 60 * 60))
  let startDateString = formatter.string(from: startDate)
  let window = range.windowSeconds
  
  let query = """
    query GetMetrics($projectId: String!, $serviceId: String!, $environmentId: String!, $startDate: DateTime!, $window: Int!) {
      metrics(
        projectId: $projectId,
        serviceId: $serviceId,
        environmentId: $environmentId,
        averagingWindowSeconds: $window,
        sampleRateSeconds: $window,
        startDate: $startDate,
        measurements: [CPU_USAGE, MEMORY_USAGE_GB, NETWORK_TX_GB]
      ) {
        measurement
        values {
          value
        }
      }
    }
  """
  
  let variables: [String: JSONValue] = [
    "projectId": .string(projectId),
    "serviceId": .string(serviceId),
    "environmentId": .string(environmentId),
    "startDate": .string(startDateString),
    "window": .int(window)
  ]
  
  let params = FetchParams(
    method: .POST,
    url: "/graphql/v2",
    connection: connection,
    body: GraphQLRequestBody(query: query, variables: variables)
  )
  
  let response: GraphQLResponse<MetricsResponse> = try await httpRequest(params: params)
  
  if let errors = response.errors, !errors.isEmpty {
    let message = errors.first?.message ?? "Unknown GraphQL Error"
    apiLogger.error("GraphQL error for metrics: \(message)")
    throw NSError(domain: "GraphQLError", code: 0, userInfo: [NSLocalizedDescriptionKey: message])
  }
  
  guard let data = response.data else {
    throw NSError(domain: "NoData", code: 0, userInfo: [NSLocalizedDescriptionKey: "No metrics data"])
  }
  
  var cpu: MetricValue? = nil
  var memory: MetricValue? = nil
  var network: MetricValue? = nil
  
  for series in data.metrics {
    let values = series.values.compactMap { $0.value }
    guard !values.isEmpty else { continue }
    let avg = values.reduce(0, +) / Double(values.count)
    
    switch series.measurement {
    case "CPU_USAGE":
      cpu = MetricValue(value: round(avg * 100) / 100, unit: "vCPU")
    case "MEMORY_USAGE_GB":
      let mb = avg * 1024.0
      memory = MetricValue(value: round(mb), unit: "MB")
    case "NETWORK_TX_GB":
      let bytes = avg * 1024.0 * 1024.0 * 1024.0
      network = MetricValue(value: round(bytes), unit: "B")
    default:
      break
    }
  }
  
  return ServiceMetrics(cpu: cpu, memory: memory, network: network)
}

func fetchServicesWithMetrics(
  connection: Connection,
  projectId: String,
  environmentId: String,
  range: RangeOption
) async throws -> [ServiceWithMetrics] {
  let projectDetails = try await fetchProjectDetails(connection: connection, projectId: projectId)
  
  guard let environment = projectDetails.environments.first(where: { $0.id == environmentId }) else {
    return []
  }
  
  var servicesWithMetrics: [ServiceWithMetrics] = []
  
  for instance in environment.serviceInstances {
    let metrics: ServiceMetrics?
    do {
      metrics = try await fetchServiceMetrics(
        connection: connection,
        projectId: projectId,
        serviceId: instance.serviceId,
        environmentId: environmentId,
        range: range
      )
    } catch {
      apiLogger.error("Failed to fetch metrics for service \(instance.serviceId): \(error.localizedDescription)")
      metrics = nil
    }
    
    let service = projectDetails.services.first { $0.id == instance.serviceId }
    servicesWithMetrics.append(ServiceWithMetrics(
      id: instance.serviceId,
      name: instance.serviceName,
      icon: service?.icon,
      metrics: metrics
    ))
  }
  
  return servicesWithMetrics
}
