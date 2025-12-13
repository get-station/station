import { fetchProject, fetchServiceVariables } from '@/api/queries'
import { HeaderTouchableOpacity } from '@/components/base/HeaderTouchableOpacity'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import { useFlashlistProps } from '@/lib/hooks'
import { COLORS } from '@/theme/colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlashList } from '@shopify/flash-list'
import { useQuery } from '@tanstack/react-query'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import * as Haptics from 'expo-haptics'
import { router, useGlobalSearchParams, useNavigation } from 'expo-router'
import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { FlatList, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

export default function ServiceVariablesScreen() {
    const { serviceId, projectId, initialEnvironmentId } = useGlobalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()
    const navigation = useNavigation()

    const [searchString, setSearchString] = useState('')
    const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string | null>(
        initialEnvironmentId || null
    )

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
    })

    const variablesQuery = useQuery({
        queryKey: ['variables', serviceId, projectId, selectedEnvironmentId],
        queryFn: () =>
            fetchServiceVariables({
                id: serviceId,
                projectId,
                environmentId: selectedEnvironmentId!,
            }),
        enabled: !!selectedEnvironmentId && !!projectId && !!serviceId,
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node)
    }, [projectQuery.data?.project.environments.edges])

    // const service = useMemo(() => {
    //     return projectQuery.data?.project.services.edges.find((edge) => edge.node.id === serviceId)
    //         ?.node
    // }, [projectQuery.data?.project.services.edges, serviceId])

    // const currentServiceInstance = useMemo(() => {
    //     return projectEnvironments
    //         ?.find((environment) => environment.id === selectedEnvironmentId)
    //         ?.serviceInstances.edges.find((edge) => edge.node.serviceId === serviceId)
    // }, [projectEnvironments, selectedEnvironmentId, serviceId])

    const mergedVariables = useMemo(() => {
        if (!variablesQuery.data) return null

        const merged = variablesQuery.data.variables

        for (const [key, value] of Object.entries(variablesQuery.data?.unrenderedVariables)) {
            merged[key] = value
        }

        return merged as { [key: string]: string }
    }, [variablesQuery.data])

    const onVariablePress = useCallback(
        (variableName: string) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
            router.push(
                `/project/${projectId}/service/${serviceId}/variables/${variableName}?initialEnvironmentId=${selectedEnvironmentId}`
            )
        },
        [projectId, serviceId, selectedEnvironmentId]
    )

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

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerLargeTitle: true,
            title: 'Variables',
            headerRight: () => (
                <HeaderTouchableOpacity
                    onPress={() => {
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
                        router.push(
                            `/project/${projectId}/service/${serviceId}/variables/add?initialEnvironmentId=${selectedEnvironmentId}`
                        )
                    }}
                >
                    <Ionicons
                        name={isLiquidGlassAvailable() ? 'add-sharp' : 'add-circle-sharp'}
                        size={36}
                        color={COLORS.pink500}
                    />
                </HeaderTouchableOpacity>
            ),
            headerSearchBarOptions: {
                placeholder: 'Search',
                hideWhenScrolling: true,
                barTintColor: COLORS.backgroundSecondary,
                textColor: COLORS.gray950,
                onChangeText: (event: any) => setSearchString(event.nativeEvent.text),
                autoCapitalize: 'none',
                tintColor: COLORS.pink600,
                hintTextColor: COLORS.gray900,
                headerIconColor: COLORS.pink600,
            },
        })
    }, [navigation, projectId, serviceId, selectedEnvironmentId])

    const filteredVariables = useMemo(
        () =>
            Object.entries(mergedVariables || {}).filter(([key]) =>
                key.toLowerCase().includes(searchString.toLowerCase())
            ),
        [mergedVariables, searchString]
    )

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: variablesQuery.isLoading,
            hasData: filteredVariables.length > 0,
            emptyLabel: 'No environment variables found',
            isError: variablesQuery.isError,
            errorLabel: 'Failed to fetch environment variables',
        })
    }, [variablesQuery.isLoading, filteredVariables.length, variablesQuery.isError])
    const { overrideProps } = useFlashlistProps(Placeholder)

    return (
        <FlashList
            contentInsetAdjustmentBehavior="automatic"
            refreshControl={<RefreshControl onRefresh={variablesQuery.refetch} />}
            showsVerticalScrollIndicator={false}
            data={filteredVariables}
            overrideProps={overrideProps}
            ListHeaderComponent={
                projectEnvironments && projectEnvironments.length > 1 ? (
                    <FlatList
                        contentContainerStyle={{
                            paddingLeft: 16,
                            paddingBottom: 12,
                            gap: 12,
                        }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={projectEnvironments}
                        extraData={selectedEnvironmentId}
                        renderItem={({ item: target }) => {
                            const isSelected = selectedEnvironmentId === target.id
                            return (
                                //! not TouchableOpacity, because switching between tabs is bugged. text keeps old color (sometimes??).
                                <TouchableHighlight
                                    style={{
                                        backgroundColor: isSelected ? '#33323e' : '#33323e30',
                                        padding: 8,
                                        paddingHorizontal: 16,
                                        borderRadius: 10,
                                    }}
                                    onPress={() => {
                                        if (!isSelected) {
                                            setSelectedEnvironmentId(target.id)
                                        }
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: isSelected ? '#dcdce0' : '#dcdce090',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {target.name}
                                    </Text>
                                </TouchableHighlight>
                            )
                        }}
                    />
                ) : undefined
            }
            ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: COLORS.gray200 }} />
            )}
            ListEmptyComponent={Placeholder}
            renderItem={({ item: env, index: envIndex }) => (
                <VariableRow
                    env={env}
                    onPress={onVariablePress}
                    backgroundColor={envIndex % 2 === 0 ? COLORS.gray50 : undefined}
                />
            )}
        />
    )
}

function VariableRow({
    env,
    onPress,
    backgroundColor,
}: { env: [string, string]; onPress: (variableName: string) => void; backgroundColor?: string }) {
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                padding: 16,
                paddingVertical: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <View style={{ flexDirection: 'column', gap: 4, flex: 1, marginRight: 16 }}>
                <Text style={{ color: COLORS.gray950 }} numberOfLines={1}>
                    {env[0]}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => onPress(env[0])}
                hitSlop={20}
                style={{
                    position: 'absolute',
                    right: 16,
                    zIndex: 1,
                }}
            >
                <Ionicons name="pencil" size={16} color={COLORS.gray700} />
            </TouchableOpacity>
        </View>
    )
}
