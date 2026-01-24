package com.station.mobile

import android.content.Context
import android.util.Log
import androidx.glance.appwidget.GlanceAppWidget
import androidx.glance.appwidget.GlanceAppWidgetReceiver
import androidx.glance.appwidget.state.updateAppWidgetState
import androidx.glance.state.PreferencesGlanceStateDefinition
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.glance.GlanceId
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class SmallShortcutWidgetReceiver : GlanceAppWidgetReceiver() {
    override val glanceAppWidget: GlanceAppWidget = SmallShortcutWidget()

    fun onServiceSelected(
        context: Context,
        glanceId: GlanceId,
        config: WidgetServiceConfig,
        isSubscribed: Boolean,
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                updateAppWidgetState(
                    context = context,
                    definition = PreferencesGlanceStateDefinition,
                    glanceId = glanceId,
                ) { prefs ->
                    prefs.toMutablePreferences().apply {
                        this[stringPreferencesKey("config")] = Gson().toJson(config)
                        this[booleanPreferencesKey("isSubscribed")] = isSubscribed
                    }
                }

                glanceAppWidget.update(context, glanceId)
                Log.d(
                    "SmallShortcutWidgetReceiver",
                    "Widget updated with service: ${config.serviceName} in ${config.environmentName}",
                )
            } catch (e: Exception) {
                Log.e(
                    "SmallShortcutWidgetReceiver",
                    "Error updating widget: ${e.message}",
                    e,
                )
            }
        }
    }
}

