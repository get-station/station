import Foundation
import AppIntents
import OSLog

private let intentLogger = Logger(subsystem: "station.widget", category: "ServiceIntent")

struct ServiceListItem: AppEntity {
  static var defaultQuery = ServiceQuery()
  static var typeDisplayRepresentation: TypeDisplayRepresentation = "Select Service"
  
  var displayRepresentation: DisplayRepresentation {
    DisplayRepresentation(title: "\(serviceName)", subtitle: "\(projectName) • \(environmentName)")
  }
  
  let id: String
  let projectId: String
  let projectName: String
  let serviceId: String
  let serviceName: String
  let environmentId: String
  let environmentName: String
  let connection: Connection
}

struct ServiceQuery: EntityQuery {
  func getSharedOptions() async throws -> [ServiceListItem] {
    var options: [ServiceListItem] = []
    
    intentLogger.debug("getSharedOptions invoked for ServiceQuery")
    
    guard let sharedDefaults = UserDefaults(suiteName: appGroupName),
          let rawConnections = sharedDefaults.data(forKey: connectionsKey) else {
      intentLogger.error("Missing shared defaults or connections data")
      return options
    }
    
    let connections = (try? JSONDecoder().decode([Connection].self, from: rawConnections)) ?? []
    intentLogger.debug("Decoded connections count=\(connections.count)")
    
    for connection in connections {
      do {
        let projects = try await fetchWorkspacesAndProjects(connection: connection)
        intentLogger.debug("Fetched projects count=\(projects.count) for connection id=\(connection.id)")
        
        for project in projects {
          do {
            let projectDetails = try await fetchProjectDetails(connection: connection, projectId: project.id)
            
            for environment in projectDetails.environments {
              for instance in environment.serviceInstances {
                let compositeId = "\(connection.id):\(project.id):\(instance.serviceId):\(environment.id)"
                options.append(ServiceListItem(
                  id: compositeId,
                  projectId: project.id,
                  projectName: project.name,
                  serviceId: instance.serviceId,
                  serviceName: instance.serviceName,
                  environmentId: environment.id,
                  environmentName: environment.name,
                  connection: connection
                ))
              }
            }
          } catch {
            intentLogger.error("Failed to fetch project details for \(project.id): \(error.localizedDescription)")
            continue
          }
        }
      } catch {
        intentLogger.error("Error fetching projects for connection \(connection.id): \(error.localizedDescription)")
        continue
      }
    }
    
    return options
  }
  
  func entities(for identifiers: [ServiceListItem.ID]) async throws -> [ServiceListItem] {
    intentLogger.debug("entities(for:) called identifiers count=\(identifiers.count)")
    return try await getSharedOptions().filter { identifiers.contains($0.id) }
  }
  
  func suggestedEntities() async throws -> [ServiceListItem] {
    intentLogger.debug("suggestedEntities requested")
    return try await getSharedOptions()
  }
  
  func defaultResult() async -> ServiceListItem? {
    intentLogger.debug("defaultResult requested")
    return try? await suggestedEntities().first
  }
}

struct ProjectEnvironmentListItem: AppEntity {
  static var defaultQuery = ProjectEnvironmentQuery()
  static var typeDisplayRepresentation: TypeDisplayRepresentation = "Select Project & Environment"
  
  var displayRepresentation: DisplayRepresentation {
    DisplayRepresentation(title: "\(projectName)", subtitle: "\(environmentName)")
  }
  
  let id: String
  let projectId: String
  let projectName: String
  let environmentId: String
  let environmentName: String
  let connection: Connection
}

struct ProjectEnvironmentQuery: EntityQuery {
  func getSharedOptions() async throws -> [ProjectEnvironmentListItem] {
    var options: [ProjectEnvironmentListItem] = []
    
    intentLogger.debug("getSharedOptions invoked for ProjectEnvironmentQuery")
    
    guard let sharedDefaults = UserDefaults(suiteName: appGroupName),
          let rawConnections = sharedDefaults.data(forKey: connectionsKey) else {
      intentLogger.error("Missing shared defaults or connections data")
      return options
    }
    
    let connections = (try? JSONDecoder().decode([Connection].self, from: rawConnections)) ?? []
    
    for connection in connections {
      do {
        let projects = try await fetchWorkspacesAndProjects(connection: connection)
        
        for project in projects {
          do {
            let projectDetails = try await fetchProjectDetails(connection: connection, projectId: project.id)
            
            for environment in projectDetails.environments {
              let compositeId = "\(connection.id):\(project.id):\(environment.id)"
              options.append(ProjectEnvironmentListItem(
                id: compositeId,
                projectId: project.id,
                projectName: project.name,
                environmentId: environment.id,
                environmentName: environment.name,
                connection: connection
              ))
            }
          } catch {
            intentLogger.error("Failed to fetch project details for \(project.id): \(error.localizedDescription)")
            continue
          }
        }
      } catch {
        intentLogger.error("Error fetching projects for connection \(connection.id): \(error.localizedDescription)")
        continue
      }
    }
    
    return options
  }
  
  func entities(for identifiers: [ProjectEnvironmentListItem.ID]) async throws -> [ProjectEnvironmentListItem] {
    return try await getSharedOptions().filter { identifiers.contains($0.id) }
  }
  
  func suggestedEntities() async throws -> [ProjectEnvironmentListItem] {
    return try await getSharedOptions()
  }
  
  func defaultResult() async -> ProjectEnvironmentListItem? {
    return try? await suggestedEntities().first
  }
}
