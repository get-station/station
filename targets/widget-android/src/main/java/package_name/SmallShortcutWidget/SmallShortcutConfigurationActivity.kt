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

enum class ConfigStep {
    SELECT_PROJECT,
    SELECT_SERVICE,
    SELECT_ENVIRONMENT,
}

class SmallShortcutConfigurationActivity : ComponentActivity() {
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
                var currentStep by remember { mutableStateOf(ConfigStep.SELECT_PROJECT) }
                var selectedProject by remember { mutableStateOf<SiteListItem?>(null) }
                var selectedService by remember { mutableStateOf<Service?>(null) }
                var selectedEnvironment by remember { mutableStateOf<Environment?>(null) }

                var projects by remember { mutableStateOf<List<SiteListItem>>(emptyList()) }
                var services by remember { mutableStateOf<List<Service>>(emptyList()) }
                var environments by remember { mutableStateOf<List<Environment>>(emptyList()) }

                var isLoading by remember { mutableStateOf(true) }
                var isLoadingServices by remember { mutableStateOf(false) }
                var isLoadingEnvironments by remember { mutableStateOf(false) }
                var error by remember { mutableStateOf<String?>(null) }
                var connections by remember { mutableStateOf<List<Connection>>(emptyList()) }
                val widgetScope = rememberCoroutineScope()

                LaunchedEffect(Unit) {
                    // Trigger background refresh immediately
                    triggerWidgetRefresh(this@SmallShortcutConfigurationActivity)

                    // Trigger app to sync connections if not found
                    val syncIntent =
                        Intent("com.station.mobile.SYNC_CONNECTIONS").apply {
                            setPackage(this@SmallShortcutConfigurationActivity.packageName)
                        }
                    try {
                        this@SmallShortcutConfigurationActivity.sendBroadcast(syncIntent)
                    } catch (e: Exception) {
                    }

                    try {
                        val prefs =
                            this@SmallShortcutConfigurationActivity.getSharedPreferences(
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
                            
                            projects = fetchSitesFromConnections(this@SmallShortcutConfigurationActivity, connections)
                        }
                    } catch (e: Exception) {
                        Log.e("SmallShortcutConfig", "Error loading data: ${e.message}")
                    }
                    isLoading = false
                }

                // Load services when project is selected
                LaunchedEffect(selectedProject) {
                    if (selectedProject != null && currentStep == ConfigStep.SELECT_SERVICE) {
                        isLoadingServices = true
                        widgetScope.launch {
                            try {
                                val projectDetails =
                                    fetchProjectDetails(
                                        this@SmallShortcutConfigurationActivity,
                                        selectedProject!!.connection,
                                        selectedProject!!.id,
                                    )
                                services = projectDetails.project.servicesList
                                isLoadingServices = false
                            } catch (e: Exception) {
                                error = e.message
                                isLoadingServices = false
                            }
                        }
                    }
                }

                // Load environments when service is selected

                WidgetMaterialTheme {
                    MultiStepConfigurationScreen(
                        widgetTitle = "Project Shortcut",
                        widgetDescription = "Quickly open your project",
                        currentStep = currentStep,
                        projects = projects,
                        services = services,
                        environments = environments,
                        selectedProject = selectedProject,
                        selectedService = selectedService,
                        selectedEnvironment = selectedEnvironment,
                        isLoading = isLoading,
                        isLoadingServices = isLoadingServices,
                        isLoadingEnvironments = isLoadingEnvironments,
                        error = error,
                        isAuthorized = connections.isNotEmpty(),
                        onProjectSelected = { project ->
                            selectedProject = project
                            currentStep = ConfigStep.SELECT_SERVICE
                            error = null // Clear any previous errors
                        },
                        onServiceSelected = { service ->
                            selectedService = service
                            error = null // Clear any previous errors
                            // Instant check for environments
                            isLoadingEnvironments = true
                            widgetScope.launch {
                                try {
                                    val envs = fetchServiceEnvironments(
                                        this@SmallShortcutConfigurationActivity,
                                        selectedProject!!.connection,
                                        selectedProject!!.id,
                                        service.id,
                                    )
                                    environments = envs
                                    isLoadingEnvironments = false

                                    if (envs.size == 1) {
                                        // Auto-select and finish
                                        val environment = envs[0]
                                        selectedEnvironment = environment
                                        completeShortcutConfig(
                                            appWidgetId = appWidgetId,
                                            project = selectedProject!!,
                                            service = service,
                                            environment = environment
                                        )
                                    } else {
                                        // Multiple environments, show selection
                                        currentStep = ConfigStep.SELECT_ENVIRONMENT
                                    }
                                } catch (e: Exception) {
                                    error = e.message
                                    isLoadingEnvironments = false
                                }
                            }
                        },
                        onEnvironmentSelected = { env ->
                            selectedEnvironment = env
                            widgetScope.launch {
                                completeShortcutConfig(
                                    appWidgetId = appWidgetId,
                                    project = selectedProject!!,
                                    service = selectedService!!,
                                    environment = env
                                )
                            }
                        },
                        onBack = {
                            when (currentStep) {
                                ConfigStep.SELECT_PROJECT -> finish()
                                ConfigStep.SELECT_SERVICE -> {
                                    currentStep = ConfigStep.SELECT_PROJECT
                                    selectedProject = null
                                }
                                ConfigStep.SELECT_ENVIRONMENT -> {
                                    currentStep = ConfigStep.SELECT_SERVICE
                                    selectedService = null
                                    selectedEnvironment = null
                                }
                            }
                        },
                        onCancel = { finish() },
                    )
                }
            }
        } catch (e: Exception) {
            Log.e("SmallShortcutConfig", "Error in onCreate: ${e.message}", e)
            e.printStackTrace()
            finish()
        }
    }

    private suspend fun completeShortcutConfig(
        appWidgetId: Int,
        project: SiteListItem,
        service: Service,
        environment: Environment
    ) {
        val prefs = getSharedPreferences(APP_GROUP_NAME, Context.MODE_PRIVATE)
        val isSubscribed = prefs.getBoolean(IS_SUBSCRIBED_KEY, false)
        val glanceId = GlanceAppWidgetManager(this).getGlanceIdBy(appWidgetId)

        val config = WidgetServiceConfig(
            projectId = project.id,
            projectName = project.name,
            serviceId = service.id,
            serviceName = service.name,
            environmentId = environment.id,
            environmentName = environment.name,
            connection = project.connection,
            connectionAccount = project.connectionAccount,
        )

        SmallShortcutWidgetReceiver().onServiceSelected(
            this,
            glanceId,
            config,
            isSubscribed,
        )

        val resultValue = Intent().apply {
            putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
        }
        setResult(RESULT_OK, resultValue)
        finish()
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
fun MultiStepConfigurationScreen(
    widgetTitle: String,
    widgetDescription: String,
    currentStep: ConfigStep,
    projects: List<SiteListItem>,
    services: List<Service>,
    environments: List<Environment>,
    selectedProject: SiteListItem?,
    selectedService: Service?,
    selectedEnvironment: Environment?,
    isLoading: Boolean,
    isLoadingServices: Boolean,
    isLoadingEnvironments: Boolean,
    error: String?,
    isAuthorized: Boolean,
    onProjectSelected: (SiteListItem) -> Unit,
    onServiceSelected: (Service) -> Unit,
    onEnvironmentSelected: (Environment) -> Unit,
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
                        ConfigStep.SELECT_PROJECT -> "Select Project"
                        ConfigStep.SELECT_SERVICE -> "Select Service"
                        ConfigStep.SELECT_ENVIRONMENT -> "Select Environment"
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

                currentStep == ConfigStep.SELECT_PROJECT -> {
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

                currentStep == ConfigStep.SELECT_SERVICE -> {
                    when {
                        isLoadingServices -> {
                            Box(
                                modifier = Modifier.fillMaxSize(),
                                contentAlignment = Alignment.Center,
                            ) {
                                CircularProgressIndicator(color = Color(0xFF14D8D4))
                            }
                        }
                        services.isEmpty() -> {
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
                                items(services) { service ->
                                    ServiceListItemView(
                                        service = service,
                                        onClick = { onServiceSelected(service) },
                                    )
                                }
                            }
                        }
                    }
                }

                currentStep == ConfigStep.SELECT_ENVIRONMENT -> {
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
            }

            if (currentStep != ConfigStep.SELECT_PROJECT) {
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
fun ServiceListItemView(service: Service, onClick: () -> Unit) {
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
                    text = service.name,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                )
            }
        }
    }
}

@Composable
fun EnvironmentListItemView(environment: Environment, onClick: () -> Unit) {
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
                    text = environment.name,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                )
            }
        }
    }
}
