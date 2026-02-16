package com.station.mobile

import android.content.Context
import android.content.Intent
import android.content.ComponentName
import android.net.Uri
import android.util.Log
import com.station.mobile.MainActivity
import kotlin.math.roundToInt
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.core.Preferences
import androidx.glance.state.PreferencesGlanceStateDefinition
import androidx.glance.GlanceId
import androidx.glance.LocalContext
import androidx.glance.GlanceModifier
import androidx.glance.GlanceTheme
import androidx.glance.Image
import androidx.glance.ImageProvider
import androidx.glance.action.actionParametersOf
import androidx.glance.action.actionStartActivity
import androidx.glance.action.clickable
import androidx.glance.appwidget.action.actionRunCallback
import androidx.glance.appwidget.GlanceAppWidget
import androidx.glance.appwidget.cornerRadius
import androidx.glance.appwidget.provideContent
import androidx.glance.background
import androidx.glance.currentState
import androidx.glance.layout.Alignment
import androidx.glance.layout.Box
import androidx.glance.layout.Column
import androidx.glance.layout.Row
import androidx.glance.layout.Spacer
import androidx.glance.layout.fillMaxSize
import androidx.glance.layout.fillMaxWidth
import androidx.glance.layout.height
import androidx.glance.layout.padding
import androidx.glance.layout.size
import androidx.glance.layout.width
import androidx.glance.text.FontWeight
import androidx.glance.text.Text
import androidx.glance.text.TextStyle
import androidx.glance.unit.ColorProvider
import com.google.gson.Gson

class LargeProjectWidget : GlanceAppWidget() {
    override val stateDefinition = PreferencesGlanceStateDefinition

    override suspend fun provideGlance(context: Context, id: GlanceId) {
        provideContent {
            WidgetGlanceTheme {
                LargeProjectWidgetContent(context = context)
            }
        }
    }
}

@Composable
fun LargeProjectWidgetContent(context: Context) {
    val prefs = currentState<Preferences>()
    val configJson = prefs[stringPreferencesKey("config")]
    val servicesJson = prefs[stringPreferencesKey("services")]
    val isSubscribed = prefs[booleanPreferencesKey("isSubscribed")] ?: false

    val widgetContext = LocalContext.current

    val config =
        if (configJson != null) {
            try {
                Gson().fromJson(configJson, WidgetServicesListConfig::class.java)
            } catch (e: Exception) {
                null
            }
        } else {
            null
        }

    val services =
        if (servicesJson != null) {
            try {
                val parsed = Gson().fromJson(servicesJson, Array<ServiceWithMetrics>::class.java).toList()
                Log.d("LargeProjectWidget", "Parsed ${parsed.size} services")
                parsed
            } catch (e: Exception) {
                Log.e("LargeProjectWidget", "Error parsing services: ${e.message}", e)
                emptyList()
            }
        } else {
            Log.w("LargeProjectWidget", "No services found in preferences")
            emptyList()
        }

    // Dark Mode Container
    Box(
        modifier = GlanceModifier.fillMaxSize()
            .background(GlanceTheme.colors.background)
            .cornerRadius(12.dp)
            .padding(16.dp),
        contentAlignment = Alignment.TopStart,
    ) {
        if (!isSubscribed) {
             Box(
                modifier = GlanceModifier.fillMaxSize()
                    .clickable(
                        actionStartActivity<MainActivity>()
                    ),
                contentAlignment = Alignment.Center
            ) {
                SubscriptionRequiredView()
            }
        } else {
            when {
                config == null -> {
                    Text("Configure widget", style = TextStyle(color = ColorProvider(Color.White)))
                }
                services.isEmpty() -> {
                    LoadingView()
                }
                else -> {
                    ServicesListView(config, services, widgetContext)
                }
            }
        }
    }
}

@Composable
fun ServicesListView(
    config: WidgetServicesListConfig,
    services: List<ServiceWithMetrics>,
    context: Context,
) {
    Column(
        modifier = GlanceModifier.fillMaxSize(),
        verticalAlignment = Alignment.Top,
    ) {
        // Header
        Row(
            modifier = GlanceModifier.fillMaxWidth().padding(bottom = 12.dp),
            horizontalAlignment = Alignment.Start,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Image(
                provider = ImageProvider(
                    context.resources.getIdentifier("ic_launcher_foreground", "mipmap", context.packageName)
                ), 
                contentDescription = null,
                modifier = GlanceModifier.size(20.dp)
            )
            Spacer(modifier = GlanceModifier.width(8.dp))
            Text(
                text = "${config.projectName} ",
                style = TextStyle(
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = ColorProvider(Color.White),
                ),
            )
             Text(
                text = "(${config.environmentName} • ${config.range.displayName})",
                style = TextStyle(
                    fontSize = 14.sp,
                    color = ColorProvider(Color(0xFFABB5BF)),
                ),
            )
        }

        // Services list
        services.take(6).forEach { service -> // 6 services
            ServiceItemView(service, config, context)
            Spacer(modifier = GlanceModifier.height(12.dp))
        }
    }
}

@Composable
fun ServiceItemView(
    service: ServiceWithMetrics,
    config: WidgetServicesListConfig,
    context: Context,
) {
    val path = "project/${config.projectId}/service/${service.id}"
    val deepLink =
        getAppDeepLink(
            context,
            config.connection.id,
            path
        )

    Row(
        modifier = GlanceModifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        // Left Column: Name + Metrics
        Column(
            modifier = GlanceModifier.defaultWeight()
        ) {
            // Service Name
            Text(
                text = service.name,
                style = TextStyle(
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold,
                    color = ColorProvider(Color.White),
                ),
            )
            
            Spacer(modifier = GlanceModifier.height(4.dp))

            // Metrics Row
            MetricsView(service.metrics ?: ServiceMetrics(null, null, null))
        }

        // Right Side: OPEN Button
        Box(
            modifier = GlanceModifier
                .background(ColorProvider(Color(0xFF8E37E5))) // Purple
                .cornerRadius(16.dp)
                .padding(horizontal = 12.dp, vertical = 6.dp)
                .clickable(
                    actionRunCallback<OpenDeepLinkAction>(
                        actionParametersOf(OpenDeepLinkAction.DeepLinkKey to deepLink)
                    )
                ),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = "OPEN",
                style = TextStyle(
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold,
                    color = ColorProvider(Color.White)
                )
            )
        }
    }
}

@Composable
fun MetricsView(metrics: ServiceMetrics) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
    ) {
        // CPU (Blue)
        Text(
            text = "CPU: ",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFF3078ED)), // Blue
            ),
        )
        Text(
            text = metrics.cpu?.let { "${it.value} ${it.unit}" } ?: "-",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFF3078ED)), // Blue
            ),
        )
        Spacer(modifier = GlanceModifier.width(8.dp))

        // Memory (Red)
        Text(
            text = "MEM: ",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFFFE4E5C)), // Red
            ),
        )
        Text(
            text = metrics.memory?.let { "${it.value.roundToInt()} ${it.unit}" } ?: "-",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFFFE4E5C)), // Red
            ),
        )
        Spacer(modifier = GlanceModifier.width(8.dp))

        // Network (Yellow)
        Text(
            text = "NET: ",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFFF98E21)), // Yellow
            ),
        )
        Text(
            text = metrics.network?.let { "${it.value.roundToInt()} ${it.unit}" } ?: "-",
            style = TextStyle(
                fontSize = 12.sp,
                color = ColorProvider(Color(0xFFF98E21)), // Yellow
            ),
        )
    }
}
