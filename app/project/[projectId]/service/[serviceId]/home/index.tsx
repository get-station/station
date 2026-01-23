import {
    deleteService,
    redeployDeployment,
    removeDeployment,
    restartDeployment,
    rollbackDeployment,
} from '@/api/mutations'
import { fetchProject, fetchServiceDeployments } from '@/api/queries'
import ServiceMetricsCard from '@/components/ServiceMetricsCard'
import ActivityIndicator from '@/components/base/ActivityIndicator'
import HeaderItem from '@/components/base/HeaderItem'
import { HeaderTouchableOpacity } from '@/components/base/HeaderTouchableOpacity'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import WidgetMessage from '@/components/base/WidgetMessage'
import { useFlashlistProps } from '@/lib/hooks'
import { queryClient } from '@/lib/query'
import { usePersistedStore } from '@/store/persisted'
import { COLORS } from '@/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { useMutation, useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import * as Haptics from 'expo-haptics'
import { router, useGlobalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect, useMemo, useState } from 'react'
import { Alert, FlatList, Text, TouchableHighlight, View } from 'react-native'
import ContextMenu, { type ContextMenuAction } from 'react-native-context-menu-view'

export default function ServiceDeploymentsScreen() {
    const { serviceId, projectId, initialEnvironmentId } = useGlobalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()
    console.log('ServiceDeploymentsScreen', serviceId, projectId, initialEnvironmentId)
    const navigation = useNavigation()

    const acknowledgedSwipeLeft = usePersistedStore((state) => state.acknowledgedSwipeLeft)
    const acknowledgeSwipeLeft = usePersistedStore((state) => state.acknowledgeSwipeLeft)

    const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string | null>(
        initialEnvironmentId || null
    )

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const deploymentsQuery = useQuery({
        queryKey: ['deployments', serviceId, projectId, selectedEnvironmentId],
        queryFn: () =>
            fetchServiceDeployments({
                id: serviceId,
                projectId,
                environmentId: selectedEnvironmentId!,
            }),
        enabled: !!selectedEnvironmentId && !!projectId && !!serviceId,
    })

    const deleteMutation = useMutation({
        mutationFn: async () => await deleteService({ id: serviceId }),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['project', projectId],
            })
            router.back()
            await queryClient.refetchQueries({
                queryKey: ['project', projectId],
            })
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node)
    }, [projectQuery.data?.project.environments.edges])

    const service = useMemo(() => {
        return projectQuery.data?.project.services.edges.find((edge) => edge.node.id === serviceId)
            ?.node
    }, [projectQuery.data?.project.services.edges, serviceId])

    useLayoutEffect(() => {
        // if (selectedEnvironmentId && !initialEnvironmentId) return // weird, needs for expo-router bug
        if (!projectEnvironments) return

        if (initialEnvironmentId && !selectedEnvironmentId) {
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
            title: service?.name || 'Service',
            headerRight: deleteMutation.isPending
                ? () => (
                      <HeaderItem>
                          <ActivityIndicator sm={true} />
                      </HeaderItem>
                  )
                : () => (
                      <ContextMenu
                          dropdownMenuMode={true}
                          actions={[
                              {
                                  title: 'Close',
                                  systemIcon: 'xmark',
                              },
                              {
                                  title: 'Delete',
                                  destructive: true,
                                  systemIcon: 'trash',
                              },
                          ]}
                          onPress={(e) => {
                              if (e.nativeEvent.name === 'Close') {
                                  if (!acknowledgedSwipeLeft) {
                                      acknowledgeSwipeLeft()
                                      Alert.alert('Quick Tip', 'You can swipe left to go back!', [
                                          { text: 'Good to know!', style: 'cancel' },
                                      ])
                                  }
                                  if (navigation.canGoBack()) {
                                      router.back()
                                  } else {
                                      router.replace('/home/')
                                  }
                                  return
                              }

                              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

                              if (e.nativeEvent.name === 'Delete') {
                                  Alert.alert('Are you sure?', 'This action cannot be undone.', [
                                      { text: 'Cancel', style: 'cancel' },
                                      {
                                          text: 'Delete',
                                          style: 'destructive',
                                          onPress: () => {
                                              Alert.alert(
                                                  'Are you super duper sure?',
                                                  'The service will be deleted and cannot be recovered.',
                                                  [
                                                      {
                                                          text: 'Cancel',
                                                          style: 'cancel',
                                                      },
                                                      {
                                                          text: 'Delete service',
                                                          style: 'destructive',
                                                          onPress: () => {
                                                              deleteMutation.mutate()
                                                          },
                                                      },
                                                  ]
                                              )
                                          },
                                      },
                                  ])
                                  return
                              }
                          }}
                      >
                          <HeaderTouchableOpacity>
                              <Ionicons
                                  name="ellipsis-horizontal-sharp"
                                  size={32}
                                  color={COLORS.gray800}
                              />
                          </HeaderTouchableOpacity>
                      </ContextMenu>
                  ),
        })
    }, [navigation, service, deleteMutation, acknowledgedSwipeLeft, acknowledgeSwipeLeft])

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: false, // so we don't have too many loading indicators on the screen
            hasData: (deploymentsQuery.data?.deployments.edges.length || 0) > 0,
            isError: deploymentsQuery.isError,
            errorLabel: 'Failed to fetch deployments',
            emptyLabel: 'No deployments found',
        })
    }, [deploymentsQuery.data?.deployments.edges.length, deploymentsQuery.isError])
    const { overrideProps } = useFlashlistProps(Placeholder)

    return (
        <FlashList
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            data={deploymentsQuery.data?.deployments.edges}
            refreshControl={<RefreshControl onRefresh={deploymentsQuery.refetch} />}
            overrideProps={overrideProps}
            ListHeaderComponent={
                <View
                    style={{
                        flexDirection: 'column',
                        gap: 10,
                    }}
                >
                    {projectEnvironments && projectEnvironments.length > 1 && (
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
                    )}
                    <View style={{ paddingHorizontal: 16 }}>
                        <ServiceMetricsCard />
                    </View>
                    <WidgetMessage
                        message={`Tap to see ${service?.name} metrics on your homescreen.`}
                        style={{ paddingHorizontal: 16, paddingBottom: 12 }}
                    />
                </View>
            }
            ListEmptyComponent={Placeholder}
            // extraData={workingKeyName}
            renderItem={({ item: deployment, index: deploymentIndex }) => (
                <DeploymentRow
                    deployment={deployment}
                    backgroundColor={deploymentIndex % 2 === 0 ? COLORS.gray50 : undefined}
                />
            )}
        />
    )
}

function DeploymentRow({
    deployment,
    backgroundColor,
}: {
    deployment: Awaited<ReturnType<typeof fetchServiceDeployments>>['deployments']['edges'][number]
    backgroundColor?: string
}) {
    const deploymentRemoveMutation = useMutation({
        mutationFn: async () => await removeDeployment({ id: deployment.node.id }),
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: [
                    'deployments',
                    deployment.node.serviceId,
                    deployment.node.projectId,
                    deployment.node.environmentId,
                ],
            })
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const deploymentRollbackMutation = useMutation({
        mutationFn: async () => await rollbackDeployment({ id: deployment.node.id }),
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: [
                    'deployments',
                    deployment.node.serviceId,
                    deployment.node.projectId,
                    deployment.node.environmentId,
                ],
            })
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const deploymentRedeployMutation = useMutation({
        mutationFn: async () => await redeployDeployment({ id: deployment.node.id }),
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: [
                    'deployments',
                    deployment.node.serviceId,
                    deployment.node.projectId,
                    deployment.node.environmentId,
                ],
            })
            setTimeout(() => {
                queryClient.refetchQueries({
                    queryKey: [
                        'deployments',
                        deployment.node.serviceId,
                        deployment.node.projectId,
                        deployment.node.environmentId,
                    ],
                })
            }, 2000)
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const deploymentRestartMutation = useMutation({
        mutationFn: async () => await restartDeployment({ id: deployment.node.id }),
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const isActive = useMemo(() => {
        return (deployment.node.sockets?.length || 0) > 0
    }, [deployment.node.sockets])

    const actions = useMemo(() => {
        const actions: ContextMenuAction[] = []

        if (isActive) {
            actions.push({ title: 'Restart', systemIcon: 'arrow.clockwise' })
        }

        if (deployment.node.canRedeploy) {
            actions.push({ title: 'Redeploy', systemIcon: 'arrow.clockwise' })
        }

        if (deployment.node.canRollback && !isActive) {
            actions.push({ title: 'Rollback', systemIcon: 'arrow.counterclockwise' })
        }

        if (deployment.node.status === 'SUCCESS') {
            actions.push({ title: 'Remove', destructive: true, systemIcon: 'trash' })
        }

        return actions
    }, [deployment.node, isActive])

    const rightSide = useMemo(() => {
        const color =
            deployment.node.status === 'SUCCESS'
                ? COLORS.green500
                : deployment.node.status === 'FAILED'
                  ? COLORS.red500
                  : ['INITIALIZING', 'DEPLOYING'].includes(deployment.node.status)
                    ? COLORS.blue500
                    : COLORS.gray950

        if (deploymentRestartMutation.isPending) {
            return <Text style={{ color }}>Restarting...</Text>
        }

        if (deploymentRedeployMutation.isPending) {
            return <Text style={{ color }}>Redeploying...</Text>
        }

        if (deploymentRollbackMutation.isPending) {
            return <Text style={{ color }}>Rolling back...</Text>
        }

        if (deploymentRemoveMutation.isPending) {
            return <Text style={{ color }}>Removing...</Text>
        }

        return (
            <Text style={{ color }} numberOfLines={1}>
                {/* railway does not have an "ACTIVE" status but shows it in the UI */}
                {isActive ? 'ACTIVE' : deployment.node.status}
            </Text>
        )
    }, [
        isActive,
        deployment.node.status,
        deploymentRestartMutation.isPending,
        deploymentRedeployMutation.isPending,
        deploymentRollbackMutation.isPending,
        deploymentRemoveMutation.isPending,
    ])

    return (
        <ContextMenu
            dropdownMenuMode={true}
            actions={actions}
            onPress={(event) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

                if (event.nativeEvent.name === 'Restart') {
                    console.log('restart')
                    Alert.alert('Are you sure you want to restart this deployment?', '', [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Restart',
                            onPress: () => deploymentRestartMutation.mutate(),
                            style: 'destructive',
                        },
                    ])
                    return
                }

                if (event.nativeEvent.name === 'Redeploy') {
                    console.log('redeploy')
                    Alert.alert('Are you sure you want to redeploy this deployment?', '', [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Redeploy',
                            onPress: () => deploymentRedeployMutation.mutate(),
                            style: 'destructive',
                        },
                    ])
                    return
                }

                if (event.nativeEvent.name === 'Rollback') {
                    console.log('rollback')
                    Alert.alert('Are you sure you want to rollback this deployment?', '', [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Rollback',
                            onPress: () => deploymentRollbackMutation.mutate(),
                            style: 'destructive',
                        },
                    ])
                    return
                }

                if (event.nativeEvent.name === 'Remove') {
                    console.log('remove')
                    Alert.alert('Are you sure you want to remove this deployment?', '', [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Remove',
                            onPress: () => deploymentRemoveMutation.mutate(),
                            style: 'destructive',
                        },
                    ])
                    return
                }
            }}
        >
            <View
                style={{
                    backgroundColor: backgroundColor,
                    padding: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: 55, // so the activity indicator doesn't change the height
                }}
            >
                <Text style={{ color: COLORS.gray950 }} numberOfLines={1}>
                    {formatDistanceToNow(new Date(deployment.node.createdAt), {
                        addSuffix: true,
                    })}
                </Text>

                {rightSide}
            </View>
        </ContextMenu>
    )
}
