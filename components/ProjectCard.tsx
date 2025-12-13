import { fetchProject } from '@/api/queries'
import { usePersistedStore } from '@/store/persisted'
import { COLORS } from '@/theme/colors'
import { Feather } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useQuery } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import * as StoreReview from 'expo-store-review'
import ms from 'ms'
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
    Animated,
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native'
import ServiceBox from './ServiceBox'
import ActivityIndicator from './base/ActivityIndicator'

interface Environment {
    id: string
    name: string
    serviceInstances?: {
        edges: Array<{
            node: {
                serviceId: string
            }
        }>
    }
}

export default function ProjectCard({
    id,
    name,
    backgroundColor,
}: {
    id: string
    name: string
    backgroundColor?: string
}) {
    const [isExpanded, setIsExpanded] = useState(true)
    const { width: windowWidth } = useWindowDimensions()

    const countToReviewPrompt = usePersistedStore((state) => state.countToReviewPrompt)
    const setCountToReviewPrompt = usePersistedStore((state) => state.setCountToReviewPrompt)
    const lastShownReviewPrompt = usePersistedStore((state) => state.lastShownReviewPrompt)
    const setLastShownReviewPrompt = usePersistedStore((state) => state.setLastShownReviewPrompt)

    const pageIndicatorX = useRef(new Animated.Value(0)).current

    const [visibleEnvironmentId, setVisibleEnvironmentId] = useState<string | null>(null)
    const scrollViewRef = useRef<ScrollView>(null)

    const projectQuery = useQuery({
        queryKey: ['project', id],
        queryFn: () => fetchProject({ id }),
        enabled: !!id,
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node) || []
    }, [projectQuery.data?.project.environments.edges])

    const servicesForEnvironment = useMemo(() => {
        if (!projectEnvironments) return {}
        if (!projectQuery.data?.project.services.edges) return {}

        const services = projectEnvironments.reduce(
            (acc, environment: Environment) => {
                const serviceIds =
                    environment.serviceInstances?.edges?.map((edge) => edge.node.serviceId) || []
                const services = projectQuery.data?.project.services.edges.filter((edge) =>
                    serviceIds.includes(edge.node.id)
                )
                if (services) {
                    acc[environment.id] = services
                }
                return acc
            },
            {} as Record<
                string,
                Awaited<ReturnType<typeof fetchProject>>['project']['services']['edges']
            >
        )

        return services
    }, [projectEnvironments, projectQuery.data?.project.services.edges])

    const volumeForService = useMemo(() => {
        if (!projectQuery.data?.project) return {}

        const serviceIds = Object.values(servicesForEnvironment)
            .flat()
            .map((service) => service.node.id)

        const volumes = serviceIds.reduce(
            (acc, serviceId) => {
                const volumeInstance = projectQuery.data.project.volumes.edges.find((edge) =>
                    edge.node.volumeInstances.edges.find(
                        (edge) => edge.node.serviceId === serviceId
                    )
                )

                if (!volumeInstance) return acc

                acc[serviceId] = volumeInstance.node
                return acc
            },
            {} as Record<
                string,
                Awaited<
                    ReturnType<typeof fetchProject>
                >['project']['volumes']['edges'][number]['node']
            >
        )

        return volumes
    }, [projectQuery.data?.project, servicesForEnvironment])

    const sortedServicesForEnvironment = useMemo(() => {
        if (!projectEnvironments) return {}

        const sortedServicesForEnvironment: Record<
            string,
            (typeof servicesForEnvironment)[string]
        > = {}

        for (const [environmentId, services] of Object.entries(servicesForEnvironment)) {
            const servicesCopy = [...services]
            sortedServicesForEnvironment[environmentId] = servicesCopy.sort((a, b) => {
                const aVolumeName = volumeForService[a.node.id]?.name
                const bVolumeName = volumeForService[b.node.id]?.name

                // first sort by volume existence
                if (aVolumeName && !bVolumeName) return -1
                if (!aVolumeName && bVolumeName) return 1

                // then sort by service name
                return a.node.name.localeCompare(b.node.name)
            })
        }

        return sortedServicesForEnvironment
    }, [servicesForEnvironment, volumeForService, projectEnvironments])

    const scrollToEnvironment = useCallback(
        (environmentId: string) => {
            const environmentIndex = projectEnvironments.findIndex(
                (env) => env.id === environmentId
            )
            if (environmentIndex === -1) return

            scrollViewRef.current?.scrollTo({
                x: environmentIndex * windowWidth,
                animated: true,
            })
            setVisibleEnvironmentId(environmentId)
        },
        [projectEnvironments, windowWidth]
    )

    const handleScroll = useCallback(
        (event: any) => {
            Animated.event([{ nativeEvent: { contentOffset: { x: pageIndicatorX } } }], {
                useNativeDriver: false,
            })(event)

            const offsetX = event.nativeEvent.contentOffset.x
            const currentIndex = Math.round(offsetX / windowWidth)
            const currentEnvironment = projectEnvironments[currentIndex]
            if (currentEnvironment) {
                setVisibleEnvironmentId(currentEnvironment.id)
            }
        },
        [projectEnvironments, windowWidth, pageIndicatorX]
    )

    const getButtonAnimatedStyle = useCallback(
        (index: number) => {
            const inputRange = [
                (index - 1) * windowWidth, // Previous environment
                index * windowWidth, // Current environment
                (index + 1) * windowWidth, // Next environment
            ]

            const backgroundColor = pageIndicatorX.interpolate({
                inputRange,
                outputRange: ['#33323e30', '#33323e', '#33323e30'],
                extrapolate: 'clamp',
            })

            const textColor = pageIndicatorX.interpolate({
                inputRange,
                outputRange: ['#dcdce090', '#dcdce0', '#dcdce090'],
                extrapolate: 'clamp',
            })

            return {
                backgroundColor,
                color: textColor,
            }
        },
        [pageIndicatorX, windowWidth]
    )

    const tapServiceBox = useCallback(
        async (serviceId: string, environmentId: string) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

            router.push(
                // @ts-ignore
                `/project/${id}/service/${serviceId}/home?initialEnvironmentId=${environmentId}`
            )

            if (countToReviewPrompt === 0) {
                // make sure at least 1 day has passed
                if (!lastShownReviewPrompt || lastShownReviewPrompt < Date.now() - ms('1d')) {
                    setLastShownReviewPrompt(Date.now())
                    setCountToReviewPrompt(12)
                    StoreReview.requestReview()
                }
            } else {
                setCountToReviewPrompt(countToReviewPrompt - 1)
            }
        },
        [
            countToReviewPrompt,
            setCountToReviewPrompt,
            setLastShownReviewPrompt,
            id,
            lastShownReviewPrompt,
        ]
    )

    useLayoutEffect(() => {
        if (visibleEnvironmentId) return
        if (projectEnvironments.length === 0) return
        setVisibleEnvironmentId(projectEnvironments[0].id)
        console.log('visibleEnvironmentId', projectEnvironments[0].id)
    }, [projectEnvironments, visibleEnvironmentId])

    if (!projectQuery.data) {
        if (projectQuery.isLoading)
            return (
                <View
                    style={{
                        backgroundColor: COLORS.backgroundSecondary,
                        padding: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.gray950 }}>
                        {name}
                    </Text>
                    <ActivityIndicator sm={true} />
                </View>
            )

        return (
            <View
                style={{
                    backgroundColor: COLORS.backgroundSecondary,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.gray950 }}>
                    {name}
                </Text>
                <Text style={{ fontSize: 16, color: COLORS.gray950 }}>Could not load project</Text>
            </View>
        )
    }

    return (
        <View
            style={{
                flexDirection: 'column',
                gap: 10,
                backgroundColor: backgroundColor,
                paddingTop: 10,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    setIsExpanded(!isExpanded)
                }}
                style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: COLORS.gray950,
                    }}
                    numberOfLines={1}
                >
                    {projectQuery.data.project.name}
                </Text>

                <Ionicons
                    name={isExpanded ? 'chevron-collapse' : 'chevron-expand'}
                    size={14}
                    color={COLORS.gray950}
                />
            </TouchableOpacity>
            <View
                style={{
                    height: isExpanded ? '100%' : 0,
                    flex: 1,
                    overflow: 'hidden',
                    flexDirection: 'column',
                    gap: 10,
                    paddingBottom: isExpanded ? 10 : 0,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
                    <FlatList
                        data={projectEnvironments}
                        extraData={visibleEnvironmentId}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 10,
                        }}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => scrollToEnvironment(item.id)}
                                >
                                    <Animated.Text
                                        style={[
                                            {
                                                color: COLORS.gray800,
                                                paddingVertical: 5,
                                                paddingHorizontal: 10,
                                                borderRadius: 6,
                                                fontSize: 12,
                                            },
                                            getButtonAnimatedStyle(index),
                                        ]}
                                    >
                                        {item.name}
                                    </Animated.Text>
                                </TouchableOpacity>
                            )
                        }}
                        style={{
                            // might be needed to not push the right buttons
                            flex: 1,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: 5,
                                borderRadius: 6,
                                backgroundColor: COLORS.blue300,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => {
                                router.push(
                                    // @ts-ignore
                                    `/project/${id}/logs?environmentId=${projectEnvironments[0].id}`
                                )
                            }}
                        >
                            <Ionicons
                                name="document-text-outline"
                                size={16}
                                color={COLORS.gray900}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: 5,
                                borderRadius: 6,
                                backgroundColor: COLORS.green300,
                            }}
                            onPress={() => {
                                router.push(`/project/${id}/usage`)
                            }}
                        >
                            <Feather name="dollar-sign" size={16} color={COLORS.gray900} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal={true}
                    scrollEnabled={projectEnvironments?.length > 1}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                >
                    {projectEnvironments?.map((environment) => {
                        if (sortedServicesForEnvironment[environment.id].length === 0)
                            return (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: COLORS.gray950,
                                        textAlign: 'center',
                                    }}
                                >
                                    No services in this environment
                                </Text>
                            )

                        return (
                            <View
                                key={environment.id}
                                style={{
                                    width: windowWidth,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    gap: 10,
                                    paddingHorizontal: 10,
                                }}
                            >
                                {sortedServicesForEnvironment[environment.id].map((edge) => {
                                    const service = edge.node
                                    return (
                                        <ServiceBox
                                            key={service.id}
                                            {...service}
                                            volume={volumeForService[service.id]}
                                            onPress={() =>
                                                tapServiceBox(service.id, environment.id)
                                            }
                                        />
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

/**
 * A page indicator that animates the dots as the user scrolls through the pages
 * @param interpolationRange
 * How many screens to include in the animation interpolation
 * 1 means it will animate over 1 screen before and after
 */
function PageIndicator({
    count,
    scrollX,
    dotSize = 5,
    minScale = 0.9,
    maxScale = 1.1,
    activeOpacity = 1,
    inactiveOpacity = 0.4,
    backgroundColor = COLORS.gray950,
    interpolationRange = 1,
}: {
    count: number
    scrollX: Animated.Value
    dotSize?: number
    minScale?: number
    maxScale?: number
    activeOpacity?: number
    inactiveOpacity?: number
    backgroundColor?: string

    interpolationRange?: number
}) {
    const { width } = Dimensions.get('window')

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 8,
            }}
        >
            {Array.from({ length: count }).map((_, i) => {
                const inputRange = [
                    (i - interpolationRange) * width,
                    i * width,
                    (i + interpolationRange) * width,
                ]

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [minScale, maxScale, minScale],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [inactiveOpacity, activeOpacity, inactiveOpacity],
                    extrapolate: 'clamp',
                })

                return (
                    <Animated.View
                        key={`dot-${i}`}
                        style={{
                            width: dotSize,
                            height: dotSize,
                            borderRadius: dotSize / 2,
                            backgroundColor: backgroundColor,
                            transform: [{ scale }],
                            opacity,
                        }}
                    />
                )
            })}
        </View>
    )
}
