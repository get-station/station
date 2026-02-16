package com.station.mobile

import android.appwidget.AppWidgetManager
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.TextButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.glance.appwidget.GlanceAppWidgetManager
import com.google.gson.Gson
import kotlinx.coroutines.launch
import kotlinx.coroutines.delay

enum class ServicesConfigStep {
    SELECT_PROJECT,
    SELECT_ENVIRONMENT,
    SELECT_RANGE,
}

class LargeProjectConfigurationActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        try {
            setResult(RESULT_CANCELED)

            val appWidgetId =
                intent?.extras?.getInt(
                    AppWidgetManager.EXTRA_APPWIDGET_ID,
                    AppWidgetManager.INVALID_APPWIDGET_ID,
                )
                    ?: AppWidgetManager.INVALID_APPWIDGET_ID

            if (appWidgetId == AppWidgetManager.INVALID_APPWIDGET_ID) {
                finish()
                return
            }

            setContent {
                var currentStep by remember { mutableStateOf(ServicesConfigStep.SELECT_PROJECT) }
                var selectedProject by remember { mutableStateOf<SiteListItem?>(null) }
                var selectedEnvironment by remember { mutableStateOf<Environment?>(null) }
                var selectedRange by remember { mutableStateOf<RangeOption?>(null) }

                var projects by remember { mutableStateOf<List<SiteListItem>>(emptyList()) }
                var environments by remember { mutableStateOf<List<Environment>>(emptyList()) }

                var isLoading by remember { mutableStateOf(true) }
                var isLoadingEnvironments by remember { mutableStateOf(false) }
                var error by remember { mutableStateOf<String?>(null) }
                var connections by remember { mutableStateOf<List<Connection>>(emptyList()) }
                val scope = rememberCoroutineScope()

                LaunchedEffect(Unit) {
                    // Trigger background refresh immediately
                    triggerWidgetRefresh(this@LargeProjectConfigurationActivity)

                    // Trigger app to sync connections
                    val syncIntent =
                        Intent("com.station.mobile.SYNC_CONNECTIONS").apply {
                            setPackage(this@LargeProjectConfigurationActivity.packageName)
                        }
                    try {
                        this@LargeProjectConfigurationActivity.sendBroadcast(syncIntent)
                    } catch (e: Exception) {
                    }

                    try {
                        val prefs =
                            this@LargeProjectConfigurationActivity.getSharedPreferences(
                                APP_GROUP_NAME,
                                Context.MODE_PRIVATE,
                            )
                        val rawConnections =
                            prefs.getString(CONNECTIONS_KEY, "[]") ?: "[]"

                        val parsedConnections =
                            try {
                                if (rawConnections.isNotEmpty() && rawConnections != "[]") {
                                    Gson()
                                        .fromJson(
                                            rawConnections,
                                            Array<Connection>::class.java,
                                        )
                                        ?.filter { it.id != null && it.apiToken != null }
                                        ?: emptyList()
                                } else {
                                    emptyList()
                                }
                            } catch (e: Exception) {
                                emptyList()
                            }

                        if (parsedConnections.isNotEmpty()) {
                            connections = parsedConnections
                            
                            projects = fetchSitesFromConnections(this@LargeProjectConfigurationActivity, connections)
                        }
                    } catch (e: Exception) {
                        Log.e("LargeProjectConfig", "Error loading data: ${e.message}")
                    }
                    isLoading = false
                }

                // Load environments when project is selected
                LaunchedEffect(selectedProject) {
                    if (selectedProject != null && currentStep == ServicesConfigStep.SELECT_ENVIRONMENT) {
                        isLoadingEnvironments = true
                        scope.launch {
                            try {
                                val projectDetails =
                                    fetchProjectDetails(
                                        this@LargeProjectConfigurationActivity,
                                        selectedProject!!.connection,
                                        selectedProject!!.id,
                                    )
                                val envs = projectDetails.project.environmentsList.map { it.toEnvironment() }
                                environments = envs
                                isLoadingEnvironments = false

                                // Auto-select if only one environment
                                if (envs.size == 1) {
                                    selectedEnvironment = envs[0]
                                    currentStep = ServicesConfigStep.SELECT_RANGE
                                }
                            } catch (e: Exception) {
                                error = e.message
                                isLoadingEnvironments = false
                            }
                        }
                    }
                }

                WidgetMaterialTheme {
                    ServicesListConfigurationScreen(
                        widgetTitle = "Services List",
                        widgetDescription = "View all services with metrics",
                        currentStep = currentStep,
                        projects = projects,
                        environments = environments,
                        selectedProject = selectedProject,
                        selectedEnvironment = selectedEnvironment,
                        selectedRange = selectedRange,
                        isLoading = isLoading,
                        isLoadingEnvironments = isLoadingEnvironments,
                        error = error,
                        isAuthorized = connections.isNotEmpty(),
                        onProjectSelected = { project ->
                            selectedProject = project
                            currentStep = ServicesConfigStep.SELECT_ENVIRONMENT
                            error = null // Clear any previous errors
                        },
                        onEnvironmentSelected = { environment ->
                            selectedEnvironment = environment
                            currentStep = ServicesConfigStep.SELECT_RANGE
                            error = null // Clear any previous errors
                        },
                        onRangeSelected = { range ->
                            selectedRange = range
                            // Complete configuration
                            scope.launch {
                                try {
                                    val prefs =
                                        this@LargeProjectConfigurationActivity.getSharedPreferences(
                                            APP_GROUP_NAME,
                                            Context.MODE_PRIVATE,
                                        )
                                    val isSubscribed =
                                        prefs.getBoolean(IS_SUBSCRIBED_KEY, false)

                                    val config =
                                        WidgetServicesListConfig(
                                            projectId = selectedProject!!.id,
                                            projectName = selectedProject!!.name,
                                            environmentId = selectedEnvironment!!.id,
                                            environmentName = selectedEnvironment!!.name,
                                            range = range,
                                            connection = selectedProject!!.connection,
                                            connectionAccount = selectedProject!!.connectionAccount,
                                        )

                                    // Fetch services with metrics
                                    val services =
                                        fetchServicesWithMetrics(
                                            this@LargeProjectConfigurationActivity,
                                            selectedProject!!.connection,
                                            selectedProject!!.id,
                                            selectedEnvironment!!.id,
                                            range,
                                        )

                                    val glanceId =
                                        GlanceAppWidgetManager(this@LargeProjectConfigurationActivity)
                                            .getGlanceIdBy(appWidgetId)

                                    LargeProjectWidgetReceiver()
                                        .onConfigurationComplete(
                                            this@LargeProjectConfigurationActivity,
                                            glanceId,
                                            config,
                                            services,
                                            isSubscribed,
                                        )

                                    val resultValue =
                                        Intent().apply {
                                            putExtra(
                                                AppWidgetManager.EXTRA_APPWIDGET_ID,
                                                appWidgetId,
                                            )
                                        }
                                    setResult(RESULT_OK, resultValue)
                                    finish()
                                } catch (e: Exception) {
                                    error = e.message
                                }
                            }
                        },
                        onBack = {
                            when (currentStep) {
                                ServicesConfigStep.SELECT_PROJECT -> finish()
                                ServicesConfigStep.SELECT_ENVIRONMENT -> {
                                    currentStep = ServicesConfigStep.SELECT_PROJECT
                                    selectedProject = null
                                }
                                ServicesConfigStep.SELECT_RANGE -> {
                                    currentStep = ServicesConfigStep.SELECT_ENVIRONMENT
                                    selectedEnvironment = null
                                    selectedRange = null
                                }
                            }
                        },
                        onCancel = { finish() },
                    )
                }
            }
        } catch (e: Exception) {
            Log.e("LargeProjectConfig", "Error in onCreate: ${e.message}", e)
            e.printStackTrace()
            finish()
        }
    }
}

private suspend fun fetchSitesFromConnections(
    context: Context,
    connections: List<Connection>
): List<SiteListItem> {
    val allSites = mutableListOf<SiteListItem>()
    var lastError: Exception? = null

    for (connection in connections) {
        try {
            val sites = fetchWorkspacesAndProjects(context, connection)
            allSites.addAll(sites)
        } catch (e: Exception) {
            lastError = e
        }
    }

    if (allSites.isEmpty() && lastError != null) {
        throw lastError
    }

    return allSites
}

@Composable
fun ServicesListConfigurationScreen(
    widgetTitle: String,
    widgetDescription: String,
    currentStep: ServicesConfigStep,
    projects: List<SiteListItem>,
    environments: List<Environment>,
    selectedProject: SiteListItem?,
    selectedEnvironment: Environment?,
    selectedRange: RangeOption?,
    isLoading: Boolean,
    isLoadingEnvironments: Boolean,
    error: String?,
    isAuthorized: Boolean,
    onProjectSelected: (SiteListItem) -> Unit,
    onEnvironmentSelected: (Environment) -> Unit,
    onRangeSelected: (RangeOption) -> Unit,
    onBack: () -> Unit,
    onCancel: () -> Unit,
) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background,
    ) {
        Column(
            modifier =
                Modifier
                    .fillMaxSize()
                    .windowInsetsPadding(WindowInsets.systemBars)
                    .padding(16.dp),
        ) {
            // Removed Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = "Configure $widgetTitle",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White,
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = widgetDescription,
                fontSize = 14.sp,
                color = Color(0xFFE6ECF2),
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Step indicator
            Text(
                text =
                    when (currentStep) {
                        ServicesConfigStep.SELECT_PROJECT -> "Select Project"
                        ServicesConfigStep.SELECT_ENVIRONMENT -> "Select Environment"
                        ServicesConfigStep.SELECT_RANGE -> "Select Timeframe"
                    },
                fontSize = 12.sp,
                color = Color(0xFFABB5BF),
            )

            Spacer(modifier = Modifier.height(24.dp))

            when {
                !isAuthorized -> {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center,
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "Unauthorized",
                                color = Color(0xFFFE4E5C),
                                fontWeight = FontWeight.Bold,
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = "Open the app to connect your account",
                                color = Color(0xFFABB5BF),
                                fontSize = 12.sp,
                            )
                        }
                    }
                }

                currentStep == ServicesConfigStep.SELECT_PROJECT -> {
                    when {
                        isLoading -> {
                            Box(
                                modifier = Modifier.fillMaxSize(),
                                contentAlignment = Alignment.Center,
                            ) {
                                CircularProgressIndicator(color = Color(0xFF14D8D4))
                            }
                        }
                        projects.isEmpty() -> {
                            Box(
                                modifier = Modifier.fillMaxSize(),
                                contentAlignment = Alignment.Center,
                            ) {
                                CircularProgressIndicator(color = Color(0xFF14D8D4))
                            }
                        }
                        else -> {
                            LazyColumn(
                                verticalArrangement = Arrangement.spacedBy(8.dp),
                            ) {
                                items(projects) { project ->
                                    SiteListItemView(
                                        site = project,
                                        onClick = { onProjectSelected(project) },
                                    )
                                }
                            }
                        }
                    }
                }

                currentStep == ServicesConfigStep.SELECT_ENVIRONMENT -> {
                    when {
                        isLoadingEnvironments -> {
                            Box(
                                modifier = Modifier.fillMaxSize(),
                                contentAlignment = Alignment.Center,
                            ) {
                                CircularProgressIndicator(color = Color(0xFF14D8D4))
                            }
                        }
                        environments.isEmpty() -> {
                            Box(
                                modifier = Modifier.fillMaxSize(),
                                contentAlignment = Alignment.Center,
                            ) {
                                CircularProgressIndicator(color = Color(0xFF14D8D4))
                            }
                        }
                        else -> {
                            LazyColumn(
                                verticalArrangement = Arrangement.spacedBy(8.dp),
                            ) {
                                items(environments) { environment ->
                                    EnvironmentListItemView(
                                        environment = environment,
                                        onClick = { onEnvironmentSelected(environment) },
                                    )
                                }
                            }
                        }
                    }
                }

                currentStep == ServicesConfigStep.SELECT_RANGE -> {
                    LazyColumn(
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        items(RangeOption.values().toList()) { range ->
                            RangeListItemView(
                                range = range,
                                onClick = { onRangeSelected(range) },
                            )
                        }
                    }
                }
            }

            if (currentStep != ServicesConfigStep.SELECT_PROJECT) {
                Spacer(modifier = Modifier.height(24.dp))
                TextButton(
                    onClick = onBack,
                    modifier = Modifier.align(Alignment.Start),
                    contentPadding = PaddingValues(start = 0.dp)
                ) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = null,
                        tint = Color(0xFF14D8D4)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Back",
                        color = Color(0xFF14D8D4),
                        fontSize = 16.sp
                    )
                }
            }
        }
    }
}

@Composable
fun RangeListItemView(range: RangeOption, onClick: () -> Unit) {
    Surface(
        modifier =
            Modifier
                .fillMaxWidth()
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = onClick
                ),
        color = Color(0xFF1E242C),
        shape = MaterialTheme.shapes.medium,
    ) {
        Row(
            modifier =
                Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = range.displayName,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Last ${range.toHours()} hours",
                    fontSize = 12.sp,
                    color = Color(0xFFABB5BF),
                )
            }
        }
    }
}

