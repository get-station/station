import { fetchProject, fetchProjectEnvironmentLogs } from '@/api/queries'
import BottomGradient from '@/components/BottomGradient'
import { HeaderTouchableOpacity } from '@/components/base/HeaderTouchableOpacity'
import buildPlaceholder from '@/components/base/Placeholder'
import { useFlashlistProps } from '@/lib/hooks'
import { COLORS } from '@/theme/colors'
import { Feather } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlashList } from '@shopify/flash-list'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import * as Haptics from 'expo-haptics'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Text, View } from 'react-native'

// Define the log message type
type LogMessage = {
    timestamp: string
    message: string
    severity: string
    tags: {
        deploymentId: string
        deploymentInstanceId: string
        environmentId: string
        pluginId: string | null
        projectId: string
        serviceId: string
        snapshotId: string | null
    }
}

const LOG_COLORS = {
    error: COLORS.red500,
    warn: COLORS.yellow500,
    info: COLORS.blue500,
    debug: COLORS.gray600,
    default: COLORS.gray950,
} as const

function sanitizeLogMessage(message: string): string {
    return (
        message
            // Remove control characters and non-printable characters
            .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
            // Remove ANSI escape codes
            .replace(/\u001b\[[0-9;]*[a-zA-Z]/g, '')
            // Remove common build tool noise
            .replace(/^\s*\*+\s*/gm, '')
            .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '')
            // Remove ANSI color codes and other escape sequences
            .replace(/\x1b\[[0-9;]*[mGKHF]/g, '') // More comprehensive ANSI code removal
            .replace(/\[[0-9;]*m/g, '') // Remove color codes like [38;5;6m
            // Clean up whitespace
            .replace(/\s+/g, ' ')
            .trim()
    )
}

export default function ProjectLogs() {
    const { environmentId, projectId } = useGlobalSearchParams<{
        environmentId: string
        projectId: string
    }>()

    const [isExpanded, setIsExpanded] = useState(false)
    const [logs, setLogs] = useState<LogMessage[]>([])

    const ping = useRef<number | null>(null)
    const ws = useRef<WebSocket | null>(null)
    const [connectionStatus, setConnectionStatus] = useState<
        'connecting' | 'connected' | 'open' | 'closed' | 'error' | 'disconnected'
    >('disconnected')

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const serviceForId = useMemo(() => {
        return projectQuery.data?.project.services.edges.reduce(
            (acc, edge) => {
                acc[edge.node.id] = edge.node
                return acc
            },
            {} as Record<
                string,
                Awaited<
                    ReturnType<typeof fetchProject>
                >['project']['services']['edges'][number]['node']
            >
        )
    }, [projectQuery.data?.project.services.edges])

    const renderLogItem = useCallback(
        ({ item }: { item: LogMessage }) => {
            const service = serviceForId?.[item.tags.serviceId]

            if (isExpanded) {
                return (
                    <View
                        style={{
                            paddingHorizontal: 16,
                            flexDirection: 'column',
                            gap: 4,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Text
                                style={{
                                    color: COLORS.gray400,
                                    fontVariant: ['tabular-nums'],
                                    flex: 1.5,
                                    fontSize: 12,
                                }}
                            >
                                {format(new Date(item.timestamp), 'MMM dd HH:mm:ss')}
                            </Text>

                            {service && (
                                <Text
                                    style={{ color: COLORS.gray600, flex: 1, fontSize: 12 }}
                                    numberOfLines={1}
                                >
                                    {service?.name}
                                </Text>
                            )}

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 0.5,
                                }}
                            >
                                <Feather name="hash" size={12} color={COLORS.gray400} />
                                <Text
                                    style={{
                                        color: COLORS.gray400,
                                        fontSize: 12,
                                    }}
                                >
                                    {item.tags.deploymentId.split('-')[0]}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Feather name="disc" size={12} color={COLORS.gray400} />
                                <Text style={{ color: COLORS.gray400, fontSize: 12 }}>
                                    {item.tags.deploymentInstanceId.split('-')[0]}
                                </Text>
                            </View>
                        </View>

                        <Text
                            style={{
                                color: LOG_COLORS[item.severity as keyof typeof LOG_COLORS],
                            }}
                        >
                            {sanitizeLogMessage(item.message)}
                        </Text>
                    </View>
                )
            }

            return (
                <View
                    style={{
                        paddingHorizontal: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 4,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.gray400,
                                fontVariant: ['tabular-nums'],
                                fontSize: 12,
                            }}
                        >
                            {format(new Date(item.timestamp), 'MMM dd HH:mm')}
                        </Text>

                        {service && (
                            <Text
                                style={{
                                    color: COLORS.gray600,
                                    fontSize: 12,
                                }}
                            >
                                {service.name}
                            </Text>
                        )}

                        <Text
                            style={{
                                color: LOG_COLORS[item.severity as keyof typeof LOG_COLORS],
                                fontSize: 12,
                            }}
                            numberOfLines={1}
                        >
                            {sanitizeLogMessage(item.message)}
                        </Text>
                    </View>
                </View>
            )
        },
        [isExpanded, serviceForId]
    )

    const connectWebSocket = useCallback(async () => {
        try {
            console.log('Attempting to connect to Railway WebSocket...')
            let websocket: WebSocket | null = null

            setConnectionStatus('connecting')
            websocket = await fetchProjectEnvironmentLogs({ environmentId })
            console.log('WebSocket connection established')

            websocket.onopen = () => {
                console.log('WebSocket onopen event fired')
                setConnectionStatus('open')
            }

            websocket.onclose = (event) => {
                console.log('WebSocket connection closed:', event.code, event.reason)
                setConnectionStatus('closed')
            }

            websocket.onerror = (error) => {
                console.error('WebSocket error:', error)
                setConnectionStatus('error')
            }

            websocket.onmessage = (event) => {
                console.log('Received WebSocket message:', event.data)
                try {
                    const data = JSON.parse(event.data)
                    console.log('Parsed message data:', data)

                    if (data.type === 'connection_ack') {
                        console.log('Connection acknowledged by server')
                    }

                    if (data.type === 'pong') {
                        console.log('Received pong')
                    }

                    if (data.payload?.data?.environmentLogs) {
                        console.log('Received logs:', data.payload.data.environmentLogs.length)
                        setLogs((prevLogs) => {
                            const newLogs = [...data.payload.data.environmentLogs]
                            const combinedLogs = [...newLogs, ...prevLogs].slice(0, 1000)
                            console.log('Updated logs count:', combinedLogs.length)
                            return combinedLogs
                        })
                    } else {
                        console.log('No logs in payload:', data)
                    }
                } catch (error) {
                    console.error('Error parsing log message:', error)
                    console.log('Raw message:', event.data)
                }
            }

            // Set up ping interval to keep connection alive
            ping.current = setInterval(() => {
                if (websocket?.readyState === WebSocket.OPEN) {
                    console.log('Sending ping...')
                    websocket.send(JSON.stringify({ type: 'ping' }))
                } else {
                    console.log('WebSocket not open, readyState:', websocket?.readyState)
                }
            }, 30000)

            ws.current = websocket
            setConnectionStatus('connected')
        } catch (error) {
            console.error('Error connecting to WebSocket:', error)
            setConnectionStatus('error')
        }
    }, [environmentId])

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: projectQuery.isLoading || connectionStatus === 'connecting' || !ws.current,
            hasData: logs.length > 0,
            emptyLabel: 'No logs yet!',
            isError: projectQuery.isError,
            errorLabel: 'Failed to fetch logs',
        })
    }, [projectQuery.isLoading, connectionStatus, logs.length, projectQuery.isError])
    const { overrideProps } = useFlashlistProps(Placeholder)

    useEffect(() => {
        if (!environmentId) {
            console.log('No environmentId provided')
            return
        }

        console.log('Initializing WebSocket connection for environment:', environmentId)

        connectWebSocket()

        return () => {
            console.log('Cleaning up WebSocket connection')
            if (ws.current) {
                ws.current.close()
                ws.current = null
                setConnectionStatus('disconnected')
            }

            console.log('Cleaning up ping interval')
            if (ping.current) {
                clearInterval(ping.current)
                ping.current = null
            }
        }
    }, [environmentId, connectWebSocket])

    return (
        <>
            <Stack.Screen
                // name="logs"
                options={{
                    headerShown: true,
                    headerLargeTitle: true,
                    title: `Logs (${connectionStatus})`,
                    headerRight: () => (
                        <HeaderTouchableOpacity
                            onPress={() => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                                setIsExpanded((prev) => !prev)
                            }}
                        >
                            <Ionicons
                                name={isExpanded ? 'chevron-expand-outline' : 'expand-outline'}
                                size={isLiquidGlassAvailable() ? 32 : 24}
                                color={COLORS.gray950}
                            />
                        </HeaderTouchableOpacity>
                    ),
                }}
            />

            <FlashList
                data={logs}
                extraData={isExpanded}
                renderItem={renderLogItem}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                // onRefresh={() => {
                //     console.log('Manually refreshing connection...')
                //     if (!ws || ws.readyState !== WebSocket.OPEN) {
                //         setWs(null)
                //         setConnectionStatus('connecting')
                //         fetchProjectEnvironmentLogs({ environmentId })
                //     }
                // }}
                overrideProps={overrideProps}
                ListEmptyComponent={Placeholder}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            marginVertical: isExpanded ? 8 : 4,
                            height: 1,
                            backgroundColor: isExpanded ? COLORS.gray50 : undefined,
                        }}
                    />
                )}
            />
            <BottomGradient />
        </>
    )
}
