import { fetchMetrics, fetchProject } from '@/api/queries'
import { COLORS } from '@/theme/colors'
import { useQuery } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import { useGlobalSearchParams } from 'expo-router'
import ms from 'ms'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import ContextMenu from 'react-native-context-menu-view'
import buildPlaceholder from './base/Placeholder'

export default function ServiceMetricsCard() {
    const { serviceId, projectId, initialEnvironmentId } = useGlobalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()

    const [selectedRange, setSelectedRange] = useState<'1h' | '6h' | '12h' | '24h' | '7d'>('1h')

    const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string | null>(
        initialEnvironmentId || null
    )

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node)
    }, [projectQuery.data?.project.environments.edges])

    const metricsQuery = useQuery({
        queryKey: ['metrics', projectId, selectedEnvironmentId],
        queryFn: () =>
            fetchMetrics({
                projectId,
                serviceId,
                environmentId: selectedEnvironmentId!,
                // averagingWindowSeconds: 3600,
                sampleRateSeconds: 3600,
                startDate: new Date(Date.now() - ms(selectedRange)).toISOString(),
            }),
        enabled: !!selectedEnvironmentId && !!serviceId && !!projectId,
    })

    useEffect(() => {
        console.log('metricsQuery', JSON.stringify(metricsQuery.data, null, 2))
        console.log(new Date(Date.now() - ms('1h')).toISOString())
    }, [metricsQuery.data])

    const metrics = useMemo(() => {
        if (!metricsQuery.data) return null

        const cpuData = metricsQuery.data.metrics.find(
            (metric) => metric.measurement === 'CPU_USAGE'
        )
        const memoryData = metricsQuery.data.metrics.find(
            (metric) => metric.measurement === 'MEMORY_USAGE_GB'
        )
        const networkData = metricsQuery.data.metrics.find(
            (metric) => metric.measurement === 'NETWORK_TX_GB'
        )

        let averageCpu = cpuData
            ? cpuData?.values.reduce((acc, curr) => acc + curr.value, 0) / cpuData?.values.length
            : 0
        let averageMemory = memoryData
            ? memoryData?.values.reduce((acc, curr) => acc + curr.value, 0) /
              memoryData?.values.length
            : 0
        let averageNetwork = networkData
            ? networkData?.values.reduce((acc, curr) => acc + curr.value, 0) /
              networkData?.values.length
            : 0

        if (averageCpu !== 0) {
            averageCpu = Math.round(averageCpu * 100) / 100
        }

        if (averageMemory !== 0) {
            // convert GB to MB
            averageMemory = averageMemory * 1024
            averageMemory = Math.round(averageMemory)
        }

        if (averageNetwork !== 0) {
            // convert GB to MB
            averageNetwork = averageNetwork * 1024
            averageNetwork = Math.round(averageNetwork)
        }

        return { averageCpu, averageMemory, averageNetwork }
    }, [metricsQuery.data])

    useEffect(() => {
        console.log('metrics', JSON.stringify(metrics, null, 2))
    }, [metrics])

    useLayoutEffect(() => {
        // if (selectedEnvironmentId && !initialEnvironmentId) return // weird, needs for expo-router bug
        if (!projectEnvironments) return

        if (initialEnvironmentId) {
            // check if it's a valid id
            const environment = projectEnvironments?.find((env) => env.id === initialEnvironmentId)
            if (environment) {
                setSelectedEnvironmentId(environment.id)
            }
            return
        }

        if (!selectedEnvironmentId && !initialEnvironmentId) {
            setSelectedEnvironmentId(projectEnvironments[0].id)
            return
        }
    }, [projectEnvironments, initialEnvironmentId, selectedEnvironmentId])

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: metricsQuery.isLoading,
            isError: metricsQuery.isError,
            errorLabel: 'Failed to fetch metrics',
            hasData: !!metricsQuery.data,
            emptyLabel: 'No metrics found',
        })
    }, [metricsQuery.isLoading, metricsQuery.isError, metricsQuery.data])

    if (Placeholder) return Placeholder

    return (
        <ContextMenu
            dropdownMenuMode={true}
            actions={[
                {
                    title: '1h',
                    disabled: selectedRange === '1h',
                },
                {
                    title: '6h',
                    disabled: selectedRange === '6h',
                },
                {
                    title: '12h',
                    disabled: selectedRange === '12h',
                },
                {
                    title: '24h',
                    disabled: selectedRange === '24h',
                },
                {
                    title: '7d',
                    disabled: selectedRange === '7d',
                },
            ]}
            onPress={(e) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
                setSelectedRange(e.nativeEvent.name as '1h' | '6h' | '12h' | '24h' | '7d')
                metricsQuery.refetch()
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: 120,
                    backgroundColor: COLORS.backgroundSecondary,
                    borderRadius: 10,
                    padding: 12,
                    borderWidth: 1,
                    borderColor: COLORS.gray200,
                    flexDirection: 'column',
                    gap: 10,
                }}
            >
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: COLORS.gray950 }}>
                        Metrics ({selectedRange})
                    </Text>

                    {/* //! using && instead of ternary operator crashes the app */}
                    {/* {isWorking ? (
                        <ActivityIndicator size="small" color={COLORS.gray950} />
                    ) : undefined} */}
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '900', color: COLORS.gray950 }}>
                            {metrics?.averageCpu?.toLocaleString() || '—'}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.blue500 }}>
                            vCPU
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '900', color: COLORS.gray950 }}>
                            {metrics?.averageMemory?.toLocaleString() || '—'} MB
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.red500 }}>
                            Memory
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '900', color: COLORS.gray950 }}>
                            {metrics?.averageNetwork?.toLocaleString() || '—'} B
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.yellow500 }}>
                            Network
                        </Text>
                    </View>
                </View>
            </View>
        </ContextMenu>
    )
}
