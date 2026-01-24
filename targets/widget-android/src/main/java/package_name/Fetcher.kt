package com.station.mobile

import android.util.Log
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.ByteArrayOutputStream
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL

@PublishedApi
internal const val TAG = "StationWidgetFetcher"

enum class HTTPMethod(val value: String) {
    GET("GET"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
}

data class FetchParams(
    val method: HTTPMethod,
    val url: String,
    val connection: Connection,
    val body: String? = null,
    val baseUrl: String? = null,
    val alternateHeader: Boolean = false,
    val rawAuth: Boolean = false,
)

suspend fun fetch(params: FetchParams): ByteArray =
    withContext(Dispatchers.IO) {
        val isPOSTRequest = params.body != null && params.method == HTTPMethod.POST

        if (!params.url.startsWith("/")) {
            Log.e(TAG, "InvalidUrl: URL should start with / — provided=${params.url}")
            throw Exception("URL should start with /")
        }

        val fullUrlString =
            params.baseUrl?.let { "$it${params.url}" }
                ?: "https://api.station.app${params.url}"

        Log.d(TAG, "Constructed full URL: $fullUrlString")

        val url = URL(fullUrlString)
        val connection =
            (url.openConnection() as HttpURLConnection).apply {
                requestMethod = params.method.value
                setRequestProperty("Accept", "application/json")
        setRequestProperty("Content-Type", "application/json")

                if (params.alternateHeader) {
                    Log.d(TAG, "Using cookie header for auth")
                    setRequestProperty("cookie", "auth=${params.connection.apiToken ?: ""};")
                } else {
                    val token = params.connection.apiToken ?: ""
                    val authHeader = if (params.rawAuth || token.startsWith("Bearer ")) {
                        token
                    } else {
                        "Bearer $token"
                    }
                    Log.d(TAG, "Using Authorization header (starts with ${authHeader.take(10)}...)")
                    setRequestProperty("Authorization", authHeader)
                }

                connectTimeout = 15_000
                readTimeout = 15_000
            }

        try {
            if (isPOSTRequest) {
                connection.doOutput = true
                OutputStreamWriter(connection.outputStream).use { writer ->
                    writer.write(params.body)
                    writer.flush()
                }
            }

            connection.connect()
            val responseCode = connection.responseCode
            Log.d(TAG, "HTTP status=$responseCode")

            if (responseCode !in 200..299) {
                val errorMsg =
                    connection.errorStream?.bufferedReader()?.use { it.readText() }
                        ?: "HTTP Error: $responseCode"
                Log.e(TAG, "HTTP error: $errorMsg")
                throw Exception("HTTP Error: $responseCode. $errorMsg")
            }

            connection.inputStream.use { input ->
                val buffer = ByteArrayOutputStream()
                val data = ByteArray(1024)
                var nRead: Int
                while (input.read(data, 0, data.size).also { nRead = it } != -1) {
                    buffer.write(data, 0, nRead)
                }
                buffer.toByteArray()
            }
        } finally {
            connection.disconnect()
        }
    }

suspend inline fun <reified T> httpRequest(params: FetchParams): T {
    val data = fetch(params)
    val json = String(data, Charsets.UTF_8)
    Log.d(TAG, "Raw Response from ${params.url}: $json")
    val type = object : TypeToken<T>() {}.type
    val result: T = Gson().fromJson(json, type)
    Log.d(TAG, "Parsed response type: ${T::class.java.simpleName}")
    return result
}


