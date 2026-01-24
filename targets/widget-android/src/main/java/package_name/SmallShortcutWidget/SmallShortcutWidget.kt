package com.station.mobile

import android.content.Context
import android.content.Intent
import android.content.ComponentName
import android.net.Uri
import android.util.Log
import com.station.mobile.MainActivity
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
import androidx.glance.unit.ColorProvider
import androidx.glance.currentState
import androidx.glance.layout.Alignment
import androidx.glance.layout.Box
import androidx.glance.layout.Column
import androidx.glance.layout.fillMaxSize
import androidx.glance.layout.padding
import androidx.glance.layout.size
import androidx.glance.text.FontWeight
import androidx.glance.text.Text
import androidx.glance.text.TextStyle
import com.google.gson.Gson

class SmallShortcutWidget : GlanceAppWidget() {
    override val stateDefinition = PreferencesGlanceStateDefinition

    override suspend fun provideGlance(context: Context, id: GlanceId) {
        provideContent {
            WidgetGlanceTheme {
                SmallShortcutWidgetContent(context = context)
            }
        }
    }
}

@Composable
fun SmallShortcutWidgetContent(context: Context) {
    val prefs = currentState<Preferences>()
    val configJson = prefs[stringPreferencesKey("config")]
    val isSubscribed = prefs[booleanPreferencesKey("isSubscribed")] ?: false

    val widgetContext = LocalContext.current

    val config: WidgetServiceConfig? =
        if (configJson != null) {
            try {
                val parsed = Gson().fromJson(configJson, WidgetServiceConfig::class.java)
                parsed
            } catch (e: Exception) {
                null
            }
        } else {
            null
        }

    Box(
        modifier = GlanceModifier.fillMaxSize()
            .background(GlanceTheme.colors.background)
            .cornerRadius(12.dp)
            .padding(16.dp),
        contentAlignment = Alignment.Center,
    ) {
        if (!isSubscribed) {
            // Not subscribed: Show Subscription Required View with paywall link
             Box(
                modifier = GlanceModifier.fillMaxSize()
                    .clickable(
                        actionStartActivity<MainActivity>()
                    ),
                contentAlignment = Alignment.Center
            ) {
                SubscriptionRequiredView()
            }
        } else if (config != null) {
            // Subscribed & Configured: Show Project Shortcut
            val deepLink = getAppDeepLink(
                widgetContext,
                config.projectId,
                config.serviceId,
                config.environmentId,
                config.connection.id,
            )
            Log.d("SmallShortcutWidget", "Rendering widget for service: ${config.serviceName}, deepLink: $deepLink")
            
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalAlignment = Alignment.CenterVertically,
                modifier = GlanceModifier.fillMaxSize()
                    .clickable(
                        actionRunCallback<OpenDeepLinkAction>(
                            actionParametersOf(OpenDeepLinkAction.DeepLinkKey to deepLink)
                        )
                    )

            ) {
                // App Icon
                Image(
                    provider = ImageProvider(
                        context.resources.getIdentifier("ic_launcher", "mipmap", context.packageName)
                    ), 
                    contentDescription = null,
                    modifier = GlanceModifier.size(40.dp)
                )

                Text(
                    text = config.serviceName,
                    style = TextStyle(
                        color = GlanceTheme.colors.onSurface,
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp,
                    ),
                    maxLines = 2,
                    modifier = GlanceModifier.padding(top = 8.dp)
                )
            }
        } else {
            Text("Select a project")
        }
    }
}

