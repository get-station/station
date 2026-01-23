import WidgetKit
import SwiftUI
import AppIntents

struct SmallShortcutAppIntentConfiguration: WidgetConfigurationIntent {
  static var title: LocalizedStringResource { "Service" }
  static var description: IntentDescription { "Select your service." }
  
  @Parameter(title: "Service")
  var service: ServiceListItem?
}

struct SmallShortcutProvider: AppIntentTimelineProvider {
  func placeholder(in context: Context) -> SmallShortcutEntry {
    SmallShortcutEntry(date: Date(), configuration: SmallShortcutAppIntentConfiguration(), isSubscribed: true)
  }
  
  func snapshot(for configuration: SmallShortcutAppIntentConfiguration, in context: Context) async -> SmallShortcutEntry {
    SmallShortcutEntry(date: Date(), configuration: configuration, isSubscribed: true)
  }
  
  func timeline(for configuration: SmallShortcutAppIntentConfiguration, in context: Context) async -> Timeline<SmallShortcutEntry> {
    var isSubscribed: Bool = false
    
    if let sharedDefaults = UserDefaults(suiteName: appGroupName) {
       isSubscribed = sharedDefaults.bool(forKey: isSubscribedKey)
    }
    
    let entry = SmallShortcutEntry(date: Date(), configuration: configuration, isSubscribed: isSubscribed)
    return Timeline(entries: [entry], policy: .never)
  }
}

struct SmallShortcutEntry: TimelineEntry {
  let date: Date
  let configuration: SmallShortcutAppIntentConfiguration
  let isSubscribed: Bool
}

struct SmallShortcutEntryView: View {
  var entry: SmallShortcutProvider.Entry
  
  private var deepLink: String {
    guard let service = entry.configuration.service else {
      return "station://"
    }
    return getAppDeepLink(
      connectionId: service.connection.id,
      path: "project/\(service.projectId)/service/\(service.serviceId)"
    )
  }
  
  var body: some View {
    if (!entry.isSubscribed) {
      SubscriptionRequiredView()
        .widgetURL(URL(string: deepLink))
    } else {
      VStack(alignment: .center, spacing: 10.0) {
        Image("AppIconImage")
          .resizable()
          .aspectRatio(contentMode: .fit)
          .frame(width: 75.0, height: 75.0)
          .clipShape(Circle())
        
        if let service = entry.configuration.service {
          Text(service.serviceName)
            .font(.system(size: 16, weight: .bold))
            .foregroundStyle(Color("gray950"))
            .multilineTextAlignment(.center)
            .lineLimit(2)
            .truncationMode(.tail)
        } else {
          VStack() {
            RoundedRectangle(cornerRadius: 8.0)
              .fill(Color("backgroundSecondary"))
              .frame(height: 10.0)
            RoundedRectangle(cornerRadius: 8.0)
              .fill(Color("backgroundSecondary"))
              .frame(width: 50.0, height: 10.0)
          }
        }
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity)
      .widgetURL(URL(string: deepLink))
    }
  }
}

struct SmallShortcutWidget: Widget {
  let kind: String = "SmallShortcutWidget"
  
  var body: some WidgetConfiguration {
    AppIntentConfiguration(kind: kind, intent: SmallShortcutAppIntentConfiguration.self, provider: SmallShortcutProvider()) { entry in
      SmallShortcutEntryView(entry: entry)
        .containerBackground(for: .widget) {
          Color("background")
        }
    }
    .configurationDisplayName("Service Shortcut")
    .description("Quickly open your service.")
    .supportedFamilies([.systemSmall])
  }
}

extension SmallShortcutAppIntentConfiguration {
  fileprivate static var preview: SmallShortcutAppIntentConfiguration {
    let intent = SmallShortcutAppIntentConfiguration()
    intent.service = ServiceListItem(
      id: "preview",
      projectId: "proj-1",
      projectName: "My Project",
      serviceId: "svc-1",
      serviceName: "API Server",
      environmentId: "env-1",
      environmentName: "production",
      connection: Connection(id: "1", apiToken: "token")
    )
    return intent
  }
}

#Preview(as: .systemSmall) {
  SmallShortcutWidget()
} timeline: {
  SmallShortcutEntry(date: .now, configuration: .preview, isSubscribed: true)
}
