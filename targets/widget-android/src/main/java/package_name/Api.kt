package com.station.mobile

import android.content.Context
import android.util.Log
import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.JsonObject
import com.google.gson.annotations.SerializedName
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import androidx.glance.appwidget.GlanceAppWidgetManager
import androidx.glance.appwidget.state.updateAppWidgetState
import androidx.glance.appwidget.state.getAppWidgetState
import androidx.glance.state.PreferencesGlanceStateDefinition
import androidx.datastore.preferences.core.stringPreferencesKey
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
/**
 * API helpers for Station widgets talking to the Railway API.
 *
 * These mirror the structure of the app's data layer but are scoped for widgets
 * and built on top of the Fetcher/httpRequest utilities.
 */

// Repository interface for widget data access
interface WidgetDataSource {
    suspend fun getConnections(): List<Connection>
    suspend fun getProjects(): List<SiteListItem>
    suspend fun getProjectDetails(connection: Connection, projectId: String): ProjectDetailsResponse?
    suspend fun getServiceMetrics(connection: Connection, projectId: String, serviceId: String, environmentId: String, range: RangeOption = RangeOption.DAY): ServiceMetrics?
    fun isSubscribed(): Boolean
}

// Implementation that reads from local cache (populated by background worker)
private class SharedPrefsDataSource(private val context: Context) : WidgetDataSource {
    private val prefs = context.getSharedPreferences(APP_GROUP_NAME, Context.MODE_PRIVATE)
    private val gson = Gson()
    
    override suspend fun getConnections(): List<Connection> {
        val json = prefs.getString(CONNECTIONS_KEY, null) ?: return emptyList()
        return try {
            gson.fromJson(json, Array<Connection>::class.java).toList()
        } catch (e: Exception) {
            Log.e("WidgetDataSource", "Failed to parse connections", e)
            emptyList()
        }
    }
    
    override suspend fun getProjects(): List<SiteListItem> {
        val cacheKey = "widget_cache_projects"
        var cachedJson = prefs.getString(cacheKey, null)
        
        if (cachedJson == null) {
            // Proactive fetch if cache is empty
            try {
                val conn = getConnections().firstOrNull { it.apiToken != null }
                if (conn != null) {
                    val query = """
                        {
                            me {
                                workspaces {
                                    id
                                    name
                                    projects(first: 100) {
                                        edges {
                                            node {
                                                id
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    """.trimIndent()
                    
                    val response = fetch(FetchParams(
                        method = HTTPMethod.POST,
                        url = "/graphql/v2",
                        connection = conn,
                        body = gson.toJson(mapOf("query" to query)),
                        baseUrl = "https://backboard.railway.com"
                    ))
                    
                    val json = String(response, Charsets.UTF_8)
                    val projectsData = gson.fromJson(json, JsonObject::class.java)
                        .getAsJsonObject("data")?.getAsJsonObject("me")?.getAsJsonArray("workspaces")
                        
                    val projectsList = mutableListOf<CachedProject>()
                    projectsData?.forEach { wsElement ->
                        val workspace = wsElement.asJsonObject
                        val workspaceId = workspace.get("id").asString
                        val workspaceName = workspace.get("name").asString
                        val projEdges = workspace.getAsJsonObject("projects")?.getAsJsonArray("edges")
                        
                        projEdges?.forEach { edge ->
                            val node = edge.asJsonObject.getAsJsonObject("node")
                            projectsList.add(CachedProject(
                                id = node.get("id").asString,
                                name = node.get("name").asString,
                                workspaceId = workspaceId,
                                workspaceName = workspaceName
                            ))
                        }
                    }
                    
                    cachedJson = gson.toJson(projectsList)
                    prefs.edit().putString(cacheKey, cachedJson).apply()
                }
            } catch (e: Exception) {
                Log.e("WidgetDataSource", "Failed proactive project fetch", e)
            }
        }

        if (cachedJson == null) return emptyList()
        
        return try {
            val conn = getConnections().firstOrNull() ?: return emptyList()
            gson.fromJson(cachedJson, Array<CachedProject>::class.java).map { project ->
                SiteListItem(
                    id = project.id,
                    name = project.name,
                    connection = conn,
                    connectionAccount = ConnectionAccount(
                        id = project.workspaceId,
                        name = project.workspaceName,
                        slug = project.workspaceId
                    )
                )
            }
        } catch (e: Exception) {
            Log.e("WidgetDataSource", "Failed to parse cached projects", e)
            emptyList()
        }
    }
    
    override suspend fun getProjectDetails(connection: Connection, projectId: String): ProjectDetailsResponse? {
        val cacheKey = "widget_cache_project_$projectId"
        val cachedJson = prefs.getString(cacheKey, null)
        
        // Return cache if available (could add expiration here)
        if (cachedJson != null) {
            try {
                val project = gson.fromJson(cachedJson, ProjectData::class.java)
                return ProjectDetailsResponse(project)
            } catch (e: Exception) {}
        }

        // Fetch from network if not in cache (or for fresh data)
        return try {
            val query = """
                query GetProjectDetails(${'$'}id: String!) {
                    project(id: ${'$'}id) {
                        id
                        name
                        services(first: 100) {
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                        environments(first: 100) {
                            edges {
                                node {
                                    id
                                    name
                                    projectId
                                    serviceInstances(first: 100) {
                                        edges {
                                            node {
                                                id
                                                serviceId
                                                environmentId
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            """.trimIndent()
            
            val response = fetch(FetchParams(
                method = HTTPMethod.POST,
                url = "/graphql/v2",
                connection = connection,
                body = gson.toJson(mapOf(
                    "query" to query,
                    "variables" to mapOf("id" to projectId)
                )),
                baseUrl = "https://backboard.railway.com"
            ))
            
            val json = String(response, Charsets.UTF_8)
            val root = gson.fromJson(json, JsonObject::class.java)
            
            // Check for GraphQL errors
            if (root.has("errors")) {
                val errors = root.getAsJsonArray("errors")
                val errorMsg = errors.firstOrNull()?.asJsonObject?.get("message")?.asString ?: "Unknown GraphQL Error"
                Log.e("WidgetDataSource", "GraphQL Errors for project $projectId: $errors")
                throw Exception("Railway API Error: $errorMsg")
            }

            val projectData = root.getAsJsonObject("data")?.getAsJsonObject("project") 
                ?: throw Exception("Project not found or access denied.")
            
            // Save to cache
            prefs.edit().putString(cacheKey, projectData.toString()).apply()
            
            val project = gson.fromJson(projectData, ProjectData::class.java)
            ProjectDetailsResponse(project)
        } catch (e: Exception) {
            if (e.message?.startsWith("Railway API Error") == true) throw e
            Log.e("WidgetDataSource", "Failed to fetch project details", e)
            throw Exception("Network error: ${e.localizedMessage ?: "Connection failed"}")
        }
    }
    
    override suspend fun getServiceMetrics(connection: Connection, projectId: String, serviceId: String, environmentId: String, range: RangeOption): ServiceMetrics? {
        val cacheKey = "widget_cache_metrics_${serviceId}_${environmentId}_${range.name}"
        val cachedJson = prefs.getString(cacheKey, null)
        
        // Similar to project details, we could check cache expiration
        if (cachedJson != null) {
            try {
                return gson.fromJson(cachedJson, ServiceMetrics::class.java)
            } catch (e: Exception) {}
        }

        // Fetch from network
        return try {
            val startDate = java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'", java.util.Locale.US).apply {
                timeZone = java.util.TimeZone.getTimeZone("UTC")
            }.format(java.util.Date(System.currentTimeMillis() - range.toHours() * 60 * 60 * 1000L))

            val window = when(range) {
                RangeOption.HOUR -> 60
                RangeOption.SIX_HOURS -> 300
                RangeOption.TWELVE_HOURS -> 600
                RangeOption.DAY -> 1200
                RangeOption.WEEK -> 3600
            }

            val query = """
                query GetMetrics(${'$'}projectId: String!, ${'$'}serviceId: String!, ${'$'}environmentId: String!, ${'$'}startDate: DateTime!, ${'$'}window: Int!) {
                    metrics(projectId: ${'$'}projectId, serviceId: ${'$'}serviceId, environmentId: ${'$'}environmentId, averagingWindowSeconds: ${'$'}window, sampleRateSeconds: ${'$'}window, startDate: ${'$'}startDate, measurements: [CPU_USAGE, MEMORY_USAGE_GB, NETWORK_TX_GB]) {
                        measurement
                        values {
                            value
                        }
                    }
                }
            """.trimIndent()
            
            val response = fetch(FetchParams(
                method = HTTPMethod.POST,
                url = "/graphql/v2",
                connection = connection,
                body = gson.toJson(mapOf(
                    "query" to query,
                    "variables" to mapOf(
                        "projectId" to projectId,
                        "serviceId" to serviceId, 
                        "environmentId" to environmentId,
                        "startDate" to startDate,
                        "window" to window
                    )
                )),
                baseUrl = "https://backboard.railway.com"
            ))
            
            val json = String(response, Charsets.UTF_8)
            val root = gson.fromJson(json, JsonObject::class.java)

            if (root.has("errors")) {
                val errors = root.getAsJsonArray("errors")
                val errorMsg = errors.firstOrNull()?.asJsonObject?.get("message")?.asString ?: "Unknown GraphQL Error"
                Log.e("WidgetDataSource", "GraphQL Errors for metrics: $errors")
                throw Exception("Railway API Error: $errorMsg")
            }

            val metricsData = root.getAsJsonObject("data")?.getAsJsonArray("metrics") 
                ?: throw Exception("No metric data found for this service.")
            
            var cpu: Double? = null
            var mem: Double? = null
            var net: Double? = null

            metricsData.forEach { element ->
                val m = element.asJsonObject
                val mType = m.get("measurement").asString
                val values = m.getAsJsonArray("values")
                
                // Calculate average of all non-null values in the timeframe
                var sum = 0.0
                var count = 0
                if (values != null && values.size() > 0) {
                    for (i in 0 until values.size()) {
                        val v = values[i].asJsonObject.get("value")
                        if (v != null && !v.isJsonNull) {
                            sum += v.asDouble
                            count++
                        }
                    }
                }
                
                val avgValue = if (count > 0) sum / count else null
                
                when (mType) {
                    "CPU_USAGE" -> cpu = avgValue
                    "MEMORY_USAGE_GB" -> mem = avgValue?.times(1024.0) // Convert GB to MB
                    "NETWORK_TX_GB" -> net = avgValue?.times(1024.0 * 1024.0 * 1024.0) // Convert GB to Bytes
                }
            }
            
            val metrics = ServiceMetrics(
                cpu = cpu?.let { MetricValue(String.format("%.2f", it).toDouble(), "vCPU") },
                memory = mem?.let { MetricValue(String.format("%.0f", it).toDouble(), "MB") },
                network = net?.let { MetricValue(String.format("%.0f", it).toDouble(), "B") }
            )
            
            // Save to cache
            prefs.edit().putString(cacheKey, gson.toJson(metrics)).apply()
            
            metrics
        } catch (e: Exception) {
            if (e.message?.startsWith("Railway API Error") == true) throw e
            Log.e("WidgetDataSource", "Failed to fetch metrics", e)
            throw Exception("Failed to load metrics: ${e.localizedMessage}")
        }
    }
    
    override fun isSubscribed(): Boolean = prefs.getBoolean(IS_SUBSCRIBED_KEY, false)
}

/**
 * Worker to refresh widget data in the background using Railway's GraphQL API.
 */
class WidgetRefreshWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        try {
            val prefs = applicationContext.getSharedPreferences(APP_GROUP_NAME, Context.MODE_PRIVATE)
            val gson = Gson()
            
            val connJson = prefs.getString(CONNECTIONS_KEY, null) ?: return@withContext Result.failure()
            val connections = gson.fromJson(connJson, Array<Connection>::class.java)
            val conn = connections.firstOrNull { it.apiToken != null } ?: return@withContext Result.failure()

            // 1. Refresh Projects
            val projectsQuery = """
                {
                    me {
                        workspaces {
                            id
                            name
                            projects(first: 100) {
                                edges {
                                    node {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            """.trimIndent()
            
            val projectsResponse = fetch(FetchParams(
                method = HTTPMethod.POST,
                url = "/graphql/v2",
                connection = conn,
                body = gson.toJson(mapOf("query" to projectsQuery)),
                baseUrl = "https://backboard.railway.com"
            ))
            
            val projectsJson = String(projectsResponse, Charsets.UTF_8)
            val projectsData = gson.fromJson(projectsJson, JsonObject::class.java)
                .getAsJsonObject("data")?.getAsJsonObject("me")?.getAsJsonArray("workspaces")
                
            val projectsList = mutableListOf<CachedProject>()
            projectsData?.forEach { wsElement ->
                val workspace = wsElement.asJsonObject
                val workspaceId = workspace.get("id").asString
                val workspaceName = workspace.get("name").asString
                val projEdges = workspace.getAsJsonObject("projects")?.getAsJsonArray("edges")
                
                projEdges?.forEach { edge ->
                    val node = edge.asJsonObject.getAsJsonObject("node")
                    projectsList.add(CachedProject(
                        id = node.get("id").asString,
                        name = node.get("name").asString,
                        workspaceId = workspaceId,
                        workspaceName = workspaceName
                    ))
                }
            }
            prefs.edit().putString("widget_cache_projects", gson.toJson(projectsList)).apply()
            
            // 2. Refresh data for active widgets
            val manager = GlanceAppWidgetManager(applicationContext)
            
            // LargeProjectWidgets (Services List with Metrics)
            val largeIds = manager.getGlanceIds(LargeProjectWidget::class.java)
            largeIds.forEach { glanceId ->
                try {
                    val state = getAppWidgetState(applicationContext, PreferencesGlanceStateDefinition, glanceId)
                    val configJson = state[stringPreferencesKey("config")]
                    if (configJson != null) {
                        val config: WidgetServicesListConfig = gson.fromJson(configJson, WidgetServicesListConfig::class.java)
                        
                        // Fetch services and metrics for this specific widget config
                        val dataSource = SharedPrefsDataSource(applicationContext)
                        val projectDetails = try {
                            dataSource.getProjectDetails(conn, config.projectId)
                        } catch (e: Exception) {
                            Log.e("WidgetRefreshWorker", "Failed to fetch project details for ${config.projectId}", e)
                            null
                        }
                        
                        if (projectDetails != null) {
                            val env = projectDetails.project.environmentsList.find { it.id == config.environmentId }
                            val instances = env?.serviceInstances ?: emptyList()
                            
                            val servicesWithMetrics = instances.map { instance ->
                                val metrics = try {
                                    dataSource.getServiceMetrics(conn, config.projectId, instance.serviceId, config.environmentId, config.range)
                                } catch (e: Exception) {
                                    Log.e("WidgetRefreshWorker", "Failed to fetch metrics for ${instance.serviceId}", e)
                                    null
                                }
                                
                                ServiceWithMetrics(
                                    id = instance.serviceId,
                                    name = instance.serviceName ?: "Unknown Service",
                                    icon = null,
                                    metrics = metrics
                                )
                            }
                            
                            // Update widget state
                            updateAppWidgetState(applicationContext, PreferencesGlanceStateDefinition, glanceId) { p ->
                                p.toMutablePreferences().apply {
                                    this[stringPreferencesKey("services")] = gson.toJson(servicesWithMetrics)
                                }
                            }
                            LargeProjectWidget().update(applicationContext, glanceId)
                        }
                    }
                } catch (e: Exception) {
                    Log.e("WidgetRefreshWorker", "Error updating large widget $glanceId", e)
                }
            }
            
            // Update SmallShortcutWidgets (just trigger update to read from cache if needed)
            val smallIds = manager.getGlanceIds(SmallShortcutWidget::class.java)
            smallIds.forEach { glanceId ->
                SmallShortcutWidget().update(applicationContext, glanceId)
            }
            
            Result.success()
        } catch (e: Exception) {
            Log.e("WidgetRefreshWorker", "Error in background refresh", e)
            Result.retry()
        }
    }
}

/**
 * Trigger an immediate data refresh for widgets.
 */
fun triggerWidgetRefresh(context: Context) {
    val workRequest = OneTimeWorkRequestBuilder<WidgetRefreshWorker>().build()
    WorkManager.getInstance(context).enqueue(workRequest)
}
private data class CachedProject(
    val id: String,
    val name: String,
    val workspaceId: String,
    val workspaceName: String,
)


/**
 * Fetch workspaces and projects using repository pattern.
 */
suspend fun fetchWorkspacesAndProjects(
    context: Context,
    connection: Connection,
    dataSource: WidgetDataSource = SharedPrefsDataSource(context)
): List<SiteListItem> {
    return dataSource.getProjects()
}


/**
 * Fetch workspaces / projects (sites equivalent) for a given account.
 * @deprecated Use shared storage instead.
 */
suspend fun fetchAccountSites(
    context: Context,
    connection: Connection,
    connectionAccount: ConnectionAccount,
): List<ConnectionSite> {
    return emptyList()
}

/**
 * Fetch project details using repository pattern.
 */
suspend fun fetchProjectDetails(
    context: Context,
    connection: Connection,
    projectId: String,
    dataSource: WidgetDataSource = SharedPrefsDataSource(context)
): ProjectDetailsResponse {
    return dataSource.getProjectDetails(connection, projectId)
        ?: throw Exception("Failed to load project details.")
}

/**
 * Fetch available environments for a specific service in a project.
 * Returns environments that have a service instance for this service.
 */
suspend fun fetchServiceEnvironments(
    context: Context,
    connection: Connection,
    projectId: String,
    serviceId: String,
    dataSource: WidgetDataSource = SharedPrefsDataSource(context)
): List<Environment> {
    val projectDetails = dataSource.getProjectDetails(connection, projectId)
        ?: throw Exception("Project not cached")
    
    return projectDetails.project.environmentsList
        .filter { env ->
            env.serviceInstances.any { instance ->
                instance.serviceId == serviceId
            }
        }
        .map { it.toEnvironment() }
}



data class ProjectDetailsResponse(
    val project: ProjectData,
)

data class ProjectData(
    val id: String,
    val name: String,
    val services: ServicesConnection,
    val environments: EnvironmentsConnection,
) {
    // Helper to get services list
    val servicesList: List<Service>
        get() = services.edges.map { it.node.toService() }.filter { it != null }

    // Helper to get environments list with service instances
    val environmentsList: List<EnvironmentWithInstances>
        get() =
            environments.edges.map { edge ->
                EnvironmentWithInstances(
                    id = edge.node.id,
                    name = edge.node.name,
                    projectId = edge.node.projectId,
                    serviceInstances = edge.node.serviceInstances.edges.map { it.node.copy(
                        serviceName = servicesList.find { s -> s.id == it.node.serviceId }?.name ?: "Unknown Service"
                    ) },
                )
            }
}

data class ServicesConnection(
    val edges: List<ServiceEdge>,
)

data class ServiceEdge(
    val node: ServiceNode,
)

data class ServiceNode(
    val id: String,
    val name: String,
    val icon: String?,
    val deletedAt: String?,
) {
    fun toService(): Service = Service(id = id, name = name, icon = icon)
}

data class EnvironmentsConnection(
    val edges: List<EnvironmentEdge>,
)

data class EnvironmentEdge(
    val node: EnvironmentNode,
)

data class EnvironmentNode(
    val id: String,
    val name: String,
    val projectId: String,
    val deletedAt: String?,
    val serviceInstances: ServiceInstancesConnection,
)

data class ServiceInstancesConnection(
    val edges: List<ServiceInstanceEdge>,
)

data class ServiceInstanceEdge(
    val node: ServiceInstanceNode,
)

data class ServiceInstanceNode(
    val id: String,
    val serviceId: String,
    val environmentId: String,
    val serviceName: String,
) {
    fun toServiceInstance(): ServiceInstance =
        ServiceInstance(
            id = id,
            serviceId = serviceId,
            environmentId = environmentId,
            serviceName = serviceName,
        )
}

data class EnvironmentWithInstances(
    val id: String,
    val name: String,
    val projectId: String,
    val serviceInstances: List<ServiceInstanceNode>,
) {
    fun toEnvironment(): Environment = Environment(id = id, name = name, projectId = projectId)
}


/**
 * Fetch all services in an environment with their metrics.
 */
suspend fun fetchServicesWithMetrics(
    context: Context,
    connection: Connection,
    projectId: String,
    environmentId: String,
    range: RangeOption,
    dataSource: WidgetDataSource = SharedPrefsDataSource(context)
): List<ServiceWithMetrics> {
    // 1. Fetch project details to get services
    val projectDetails = dataSource.getProjectDetails(connection, projectId)
        ?: throw Exception("Project not cached")
    
    // 2. Filter service instances for the selected environment
    val environment = projectDetails.project.environmentsList
        .find { it.id == environmentId }
    
    val serviceInstances = environment?.serviceInstances ?: emptyList()
    
    // 3. Fetch metrics for each service
    return serviceInstances.map { instance ->
        val metrics = dataSource.getServiceMetrics(connection, projectId, instance.serviceId, environmentId, range)
        
        ServiceWithMetrics(
            id = instance.serviceId,
            name = instance.serviceName,
            icon = null,
            metrics = metrics,
        )
    }
}

/**
 * Fetch metrics for a specific service in an environment using repository pattern.
 */
suspend fun fetchServiceMetrics(
    context: Context,
    connection: Connection,
    projectId: String,
    serviceId: String,
    environmentId: String,
    range: RangeOption,
    dataSource: WidgetDataSource = SharedPrefsDataSource(context)
): ServiceMetrics? {
    return dataSource.getServiceMetrics(connection, projectId, serviceId, environmentId, range)
}
