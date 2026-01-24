package com.station.mobile

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.glance.GlanceId
import androidx.glance.action.ActionParameters
import androidx.glance.appwidget.action.ActionCallback
import java.text.NumberFormat
import java.util.Locale
import kotlin.math.abs

/**
 * Format large numbers in a compact way (e.g., 1000 -> 1K, 1000000 -> 1M)
 */
fun formatCompactCount(value: Int): String {
    val absValue = abs(value)
    val sign = if (value < 0) "-" else ""

    val formatter = NumberFormat.getNumberInstance(Locale.US).apply {
        minimumFractionDigits = 0
        maximumFractionDigits = 1
        isGroupingUsed = false
    }

    val (scaled, suffix) =
        when {
            absValue >= 1_000_000_000 -> Pair(absValue / 1_000_000_000.0, "B")
            absValue >= 1_000_000 -> Pair(absValue / 1_000_000.0, "M")
            absValue >= 1_000 -> Pair(absValue / 1_000.0, "K")
            else -> return value.toString()
        }

    val numberString = formatter.format(scaled)
    return "$sign$numberString$suffix"
}

/**
 * Generate deep link to the app based on subscription state and optional project/service/environment.
 */
fun getAppDeepLink(
    context: Context,
    projectId: String? = null,
    serviceId: String? = null,
    environmentId: String? = null,
    connectionId: String? = null,
): String {
    val baseLink = if (projectId != null && serviceId != null) {
        "exp+station://project/$projectId/service/$serviceId"
    } else if (projectId != null) {
        "exp+station://project/$projectId"
    } else {
        "exp+station://"
    }

    return if (connectionId != null) {
        val separator = if (baseLink.contains("?")) "&" else "?"
        "$baseLink${separator}_widgetConnectionId=$connectionId"
    } else {
        baseLink
    }
}

/**
 * Calculate timestamp from hours ago in milliseconds.
 */
fun getTimestampHoursAgo(hours: Int): Long {
    return System.currentTimeMillis() - (hours * 60 * 60 * 1000L)
}

/**
 * ActionCallback to handle deep link clicks from widgets
 */
class OpenDeepLinkAction : ActionCallback {
    override suspend fun onAction(
        context: Context,
        glanceId: GlanceId,
        parameters: ActionParameters
    ) {
        val deepLink = parameters[DeepLinkKey] ?: "station://"
        Log.d("OpenDeepLinkAction", "Opening deep link: $deepLink")
        
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(deepLink)).apply {
                flags = Intent.FLAG_ACTIVITY_NEW_TASK
            }
            context.startActivity(intent)
            Log.d("OpenDeepLinkAction", "Successfully launched activity")
        } catch (e: Exception) {
            Log.e("OpenDeepLinkAction", "Error launching activity: ${e.message}", e)
        }
    }

    companion object {
        val DeepLinkKey = ActionParameters.Key<String>("deepLink")
    }
}


