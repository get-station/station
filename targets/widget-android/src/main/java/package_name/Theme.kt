package com.station.mobile

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.glance.GlanceComposable
import androidx.glance.GlanceTheme
import androidx.glance.material3.ColorProviders
import androidx.glance.unit.ColorProvider

// Shared colors
val tealColor = Color(0xFF14D8D4)
val green500 = Color(0xFF31A855)
val red500 = Color(0xFFFE4E5C)
val gold400 = Color(0xFFF98E21)
val neutral000 = Color(0xFFFFFFFF)
val neutral200 = Color(0xFFE6ECF2)
val neutral950 = Color(0xFFF8F8FA)

val bgApp = Color(0xFF111019) // hsl(247, 7%, 8%)
val bgDark = Color(0xFF161521) // hsl(246, 18.5%, 10.6%)
val stationPurple = Color(0xFF8E37E5) // hsl(270, 60%, 52%)
val stationBlue = Color(0xFF3078ED) // hsl(220, 80%, 55%)

// Light colors
private val LightColorPalette = lightColorScheme(
    background = bgApp,
    onSurface = neutral000,
    primary = stationPurple,
    secondary = bgDark,
    error = red500,
    outline = gold400,
)

// Dark colors
private val DarkColorPalette = darkColorScheme(
    background = bgApp,
    onSurface = neutral000,
    primary = stationPurple,
    secondary = bgDark,
    error = red500,
    outline = gold400,
)

private val GlanceColors = ColorProviders(
    light = LightColorPalette,
    dark = DarkColorPalette,
)

private val WidgetTypography = Typography(
    titleLarge = TextStyle(
        fontWeight = FontWeight.Bold,
        fontSize = 24.sp,
        color = neutral000,
    ),
    bodyLarge = TextStyle(
        fontWeight = FontWeight.Normal,
        fontSize = 20.sp,
        color = neutral000,
    ),
    bodyMedium = TextStyle(
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        color = neutral000,
    ),
)

@Composable
fun WidgetMaterialTheme(
    darkTheme: Boolean = true,
    content: @Composable () -> Unit,
) {
    val colors = if (darkTheme) DarkColorPalette else LightColorPalette

    MaterialTheme(
        colorScheme = colors,
        typography = WidgetTypography,
        content = content,
    )
}

@Composable
@GlanceComposable
fun WidgetGlanceTheme(
    content: @Composable () -> Unit,
) {
    GlanceTheme(
        colors = GlanceColors,
        content = content,
    )
}


