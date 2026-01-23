import WidgetKit
import SwiftUI
import AppIntents

struct LargeMetricsAppIntentConfiguration: WidgetConfigurationIntent {
  static var title: LocalizedStringResource { "Project Services" }
  static var description: IntentDescription { "Select your project and environment." }
  
  @Parameter(title: "Project & Environment")
  var projectEnvironment: ProjectEnvironmentListItem?
  
  @Parameter(title: "Time Range", default: .day)
  var range: RangeOptionEnum
}

enum RangeOptionEnum: String, AppEnum {
  case hour = "HOUR"
  case sixHours = "SIX_HOURS"
  case twelveHours = "TWELVE_HOURS"
  case day = "DAY"
  case week = "WEEK"
  
  static var typeDisplayRepresentation: TypeDisplayRepresentation = "Time Range"
  static var caseDisplayRepresentations: [RangeOptionEnum: DisplayRepresentation] = [
    .hour: "1 Hour",
    .sixHours: "6 Hours",
    .twelveHours: "12 Hours",
    .day: "24 Hours",
    .week: "7 Days"
  ]
  
  var toRangeOption: RangeOption {
    switch self {
    case .hour: return .hour
    case .sixHours: return .sixHours
    case .twelveHours: return .twelveHours
    case .day: return .day
    case .week: return .week
    }
  }
}

struct LargeMetricsProvider: AppIntentTimelineProvider {
  func placeholder(in context: Context) -> LargeMetricsEntry {
    LargeMetricsEntry(
      date: Date(),
      configuration: LargeMetricsAppIntentConfiguration(),
      isSubscribed: true,
      services: []
    )
  }
  
  func snapshot(for configuration: LargeMetricsAppIntentConfiguration, in context: Context) async -> LargeMetricsEntry {
    LargeMetricsEntry(
      date: Date(),
      configuration: configuration,
      isSubscribed: true,
      services: []
    )
  }
  
  func timeline(for configuration: LargeMetricsAppIntentConfiguration, in context: Context) async -> Timeline<LargeMetricsEntry> {
    var isSubscribed: Bool = false
    var services: [ServiceWithMetrics] = []
    
    if let sharedDefaults = UserDefaults(suiteName: appGroupName) {
      isSubscribed = sharedDefaults.bool(forKey: isSubscribedKey)
    }
    
    if let projectEnv = configuration.projectEnvironment {
      do {
        services = try await fetchServicesWithMetrics(
          connection: projectEnv.connection,
          projectId: projectEnv.projectId,
          environmentId: projectEnv.environmentId,
          range: configuration.range.toRangeOption
        )
      } catch {
        // Ignore errors, leave empty state
      }
    }
    
    let entry = LargeMetricsEntry(
      date: Date(),
      configuration: configuration,
      isSubscribed: isSubscribed,
      services: services
    )
    
    let nextRefresh = Calendar.current.date(byAdding: .minute, value: 15, to: Date())!
    return Timeline(entries: [entry], policy: .after(nextRefresh))
  }
}

struct LargeMetricsEntry: TimelineEntry {
  let date: Date
  let configuration: LargeMetricsAppIntentConfiguration
  let isSubscribed: Bool
  let services: [ServiceWithMetrics]
}

struct ServiceRowView: View {
  let service: ServiceWithMetrics
  let projectId: String
  let connectionId: String
  
  private var deepLink: String {
    getAppDeepLink(connectionId: connectionId, path: "project/\(projectId)/service/\(service.id)/home/")
  }
  
  var body: some View {
    HStack(spacing: 8) {
      VStack(alignment: .leading, spacing: 4) {
        Text(service.name)
          .font(.system(size: 14, weight: .semibold))
          .foregroundStyle(Color("gray950"))
          .lineLimit(1)
          .truncationMode(.tail)
        HStack(spacing: 10) {
          HStack(spacing: 3) {
            Image(systemName: "cpu")
              .font(.system(size: 10, weight: .bold))
            Text(formatMetricValue(service.metrics?.cpu))
              .font(.system(size: 11, weight: .bold))
          }
          .foregroundStyle(Color("blue500"))
          HStack(spacing: 3) {
            Image(systemName: "memorychip")
              .font(.system(size: 10, weight: .bold))
            Text(formatMetricValue(service.metrics?.memory))
              .font(.system(size: 11, weight: .bold))
          }
          .foregroundStyle(Color("pink500"))
          HStack(spacing: 3) {
            Image(systemName: "network")
              .font(.system(size: 10, weight: .bold))
            Text(formatMetricValue(service.metrics?.network))
              .font(.system(size: 11, weight: .bold))
          }
          .foregroundStyle(Color("yellow500"))
        }
      }
      Spacer()
      Link(destination: URL(string: deepLink)!) {
        Text("OPEN")
          .font(.system(size: 12, weight: .bold))
          .foregroundStyle(Color("gray950"))
          .padding(.horizontal, 12)
          .padding(.vertical, 6)
          .background(Color("pink500"))
          .clipShape(Capsule())
      }
    }
    .padding(.vertical, 6)
  }
}

struct LargeMetricsEntryView: View {
  var entry: LargeMetricsProvider.Entry
  
  var body: some View {
    if !entry.isSubscribed {
      SubscriptionRequiredView()
        .widgetURL(URL(string: "station://"))
        .containerBackground(for: .widget) {
          Color("background")
        }
    } else {
      VStack(alignment: .leading, spacing: 12) {
        HStack(spacing: 8) {
          Image("AppIconImage")
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 28.0, height: 28.0)
            .clipShape(Circle())
          
          if let projectEnv = entry.configuration.projectEnvironment {
            Text(projectEnv.projectName)
              .font(.system(size: 16, weight: .bold))
              .foregroundStyle(Color("gray950"))
            Text("(\(projectEnv.environmentName) • \(entry.configuration.range.toRangeOption.displayName))")
              .font(.system(size: 14))
              .foregroundStyle(Color("gray500"))
          } else {
            Text("Services")
              .font(.system(size: 16, weight: .bold))
              .foregroundStyle(Color("gray950"))
          }
          Spacer()
        }
        
        if entry.services.isEmpty {
          Text(entry.configuration.projectEnvironment == nil ? "Select a project" : "Loading...")
            .font(.system(size: 14))
            .foregroundStyle(Color("gray500"))
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        } else {
          VStack(spacing: 0) {
            ForEach(Array(entry.services.prefix(7).enumerated()), id: \.offset) { index, service in
              ServiceRowView(
                service: service,
                projectId: entry.configuration.projectEnvironment?.projectId ?? "",
                connectionId: entry.configuration.projectEnvironment?.connection.id ?? ""
              )
              if index < min(entry.services.count, 6) - 1 {
                Divider().background(Color("backgroundSecondary"))
              }
            }
          }
        }
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
      .padding(EdgeInsets(top: 0, leading: 6, bottom: 6, trailing: 6))
      .containerBackground(for: .widget) {
        Color("background")
      }
    }
  }
}

struct LargeMetricsWidget: Widget {
  let kind: String = "LargeMetricsWidget"
  
  var body: some WidgetConfiguration {
    AppIntentConfiguration(
      kind: kind,
      intent: LargeMetricsAppIntentConfiguration.self,
      provider: LargeMetricsProvider()
    ) { entry in
      LargeMetricsEntryView(entry: entry)
    }
    .configurationDisplayName("Project Services")
    .description("List services in a project with current metrics.")
    .supportedFamilies([.systemLarge])
  }
}

extension LargeMetricsAppIntentConfiguration {
  fileprivate static var preview: LargeMetricsAppIntentConfiguration {
    let intent = LargeMetricsAppIntentConfiguration()
    intent.projectEnvironment = ProjectEnvironmentListItem(
      id: "preview",
      projectId: "proj-1",
      projectName: "My Project",
      environmentId: "env-1",
      environmentName: "production",
      connection: Connection(id: "1", apiToken: "token")
    )
    intent.range = .day
    return intent
  }
}

#Preview(as: .systemLarge) {
  LargeMetricsWidget()
} timeline: {
  LargeMetricsEntry(
    date: .now,
    configuration: .preview,
    isSubscribed: true,
    services: [
      ServiceWithMetrics(
        id: "1",
        name: "API Server",
        icon: nil,
        metrics: ServiceMetrics(
          cpu: MetricValue(value: 0.45, unit: "vCPU"),
          memory: MetricValue(value: 256, unit: "MB"),
          network: MetricValue(value: 1024 * 1024, unit: "B")
        )
      ),
      ServiceWithMetrics(
        id: "2",
        name: "Database",
        icon: nil,
        metrics: ServiceMetrics(
          cpu: MetricValue(value: 0.12, unit: "vCPU"),
          memory: MetricValue(value: 512, unit: "MB"),
          network: MetricValue(value: 512 * 1024, unit: "B")
        )
      )
    ]
  )
}
