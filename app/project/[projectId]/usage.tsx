import { fetchProjectUsage } from '@/api/queries'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import { COLORS } from '@/theme/colors'
import { useQuery } from '@tanstack/react-query'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { useMemo } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

export default function ProjectUsage() {
    const { projectId } = useGlobalSearchParams<{
        projectId: string
    }>()

    const projectUsageQuery = useQuery({
        queryKey: ['project', projectId, 'usage'],
        queryFn: () => fetchProjectUsage({ id: projectId }),
        enabled: !!projectId,
        staleTime: 1000,
        gcTime: 1000,
    })

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            hasData: !!projectUsageQuery.data,
            isLoading: projectUsageQuery.isLoading,
            isError: projectUsageQuery.isError,
            errorLabel: 'Failed to fetch usage data',
            emptyLabel: 'No usage data found',
        })
    }, [projectUsageQuery.isLoading, projectUsageQuery.isError, projectUsageQuery.data])

    return (
        <>
            <Stack.Screen
                // name="usage"
                options={{
                    headerShown: true,
                    headerLargeTitle: true,
                    title: 'Usage',
                }}
            />
            {Placeholder || (
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl onRefresh={projectUsageQuery.refetch} />}
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <UsageCard
                        title="Current Cost"
                        data={projectUsageQuery.data?.usage}
                        backgroundColor={COLORS.background}
                    />
                    <View style={{ height: 30 }} />
                    <UsageCard
                        title="Estimated Cost"
                        data={projectUsageQuery.data?.estimatedUsage}
                        backgroundColor={COLORS.background}
                    />
                </ScrollView>
            )}
        </>
    )
}

function UsageCard({
    title,
    data,
    backgroundColor,
}: {
    title: string
    data: Awaited<ReturnType<typeof fetchProjectUsage>>['estimatedUsage' | 'usage'] | undefined
    backgroundColor?: string
}) {
    if (!data) return null

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor || COLORS.backgroundSecondary,
                flexDirection: 'column',
                gap: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: COLORS.gray950,
                    paddingHorizontal: 16,
                }}
            >
                {title}
            </Text>
            <FlatList
                scrollEnabled={false}
                data={
                    [
                        { title: 'CPU', key: 'cpu' },
                        { title: 'Memory', key: 'memory' },
                        { title: 'Volume', key: 'volume' },
                        { title: 'Network', key: 'network' },
                    ] as const
                }
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 16,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: COLORS.gray950 }}>{item.title}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.gray950 }}>
                            ${data[item.key]}
                        </Text>
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <View
                        style={{ marginVertical: 10, height: 1, backgroundColor: COLORS.gray200 }}
                    />
                )}
            />
        </View>
    )
}
