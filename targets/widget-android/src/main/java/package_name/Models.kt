package com.station.mobile

import com.google.gson.annotations.SerializedName

// App group configuration / shared keys
const val APP_GROUP_NAME = "group.com.station.mobile"
const val CONNECTIONS_KEY = "station::connections"
const val IS_SUBSCRIBED_KEY = "station::subscribed"
const val WIDGET_STATE_KEY = "station::widgetState"

// Connection model used for JSON (de)serialization
// Fields are nullable to match potential JS/Expo record serialization
data class Connection(
    val id: String?,
    val apiToken: String?,
)

// Widget intent states to represent high-level widget state
enum class WidgetIntentState(val value: Int) {
    LOADING(0),
    API_FAILED(1),
    HAS_DATA(2),
    NO_DATA(3),
}

// Example account / site models that widget configuration might use
data class ConnectionAccount(
    val id: String,
    val name: String,
    val slug: String,
)

data class ConnectionSite(
    val id: String,
    val name: String,
)

// Service model
data class Service(
    val id: String,
    val name: String,
    val icon: String? = null,
)

// Environment model
data class Environment(
    val id: String,
    val name: String,
    val projectId: String,
)

// Service instance (service deployed in an environment)
data class ServiceInstance(
    val id: String,
    val serviceId: String,
    val environmentId: String,
    val serviceName: String,
)

// Site list item for widget configuration
data class SiteListItem(
    val id: String,
    val name: String,
    val connection: Connection,
    val connectionAccount: ConnectionAccount,
)

// Widget configuration with service and environment
data class WidgetServiceConfig(
    val projectId: String,
    val projectName: String,
    val serviceId: String,
    val serviceName: String,
    val environmentId: String,
    val environmentName: String,
    val connection: Connection,
    val connectionAccount: ConnectionAccount,
)

// Example metric point used for time-series widgets
data class MetricPoint(
    val time: String,
    val values: MetricValues,
)

data class MetricValues(
    val primary: Int?,
    @SerializedName("secondary")
    val secondary: Int?,
    @SerializedName("tertiary")
    val tertiary: Int?,
)

data class MetricsWidgetData(
    val primary: Int?,
    val secondary: Int?,
    val tertiary: Int?,
)

// Time ranges
enum class RangeOption(val displayName: String) {
    HOUR("1H"),
    SIX_HOURS("6H"),
    TWELVE_HOURS("12H"),
    DAY("24H"),
    WEEK("7D");

    fun toHours(): Int =
        when (this) {
            HOUR -> 1
            SIX_HOURS -> 6
            TWELVE_HOURS -> 12
            DAY -> 24
            WEEK -> 168
        }
}

// Widget configuration for services list with metrics
data class WidgetServicesListConfig(
    val projectId: String,
    val projectName: String,
    val environmentId: String,
    val environmentName: String,
    val range: RangeOption,
    val connection: Connection,
    val connectionAccount: ConnectionAccount,
)

// Service with metrics for display in widget
data class ServiceWithMetrics(
    val id: String,
    val name: String,
    val icon: String?,
    val metrics: ServiceMetrics?,
)

// Metrics for a service
data class ServiceMetrics(
    val cpu: MetricValue?,
    val memory: MetricValue?,
    val network: MetricValue?,
)

// Single metric value
data class MetricValue(
    val value: Double,
    val unit: String,
)


