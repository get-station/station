import { fetchUserInfo } from '@/api/queries'
import ApiStatus from '@/components/ApiStatus'
import BottomGradient from '@/components/BottomGradient'
import ProjectCard from '@/components/ProjectCard'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import { useFlashlistProps, useNotificationHandler, useWebhookCheck } from '@/lib/hooks'
import { queryClient } from '@/lib/query'
import { storage } from '@/lib/storage'
import { usePersistedStore } from '@/store/persisted'
import { COLORS } from '@/theme/colors'
import { HeaderButton } from '@react-navigation/elements'
import * as Sentry from '@sentry/react-native'
import { FlashList } from '@shopify/flash-list'
import { useQueries } from '@tanstack/react-query'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import * as Haptics from 'expo-haptics'
import * as QuickActions from 'expo-quick-actions'
import { Stack, router } from 'expo-router'
import { usePlacement, useSuperwall, useUser } from 'expo-superwall'
import { useEffect, useMemo, useState } from 'react'
import { Alert, Image, Linking, View } from 'react-native'
import { Platform } from 'react-native'
import ContextMenu from 'react-native-context-menu-view'

export default function HomeScreen() {
    const { registerPlacement } = usePlacement()
    const { subscriptionStatus } = useUser()
    const { getPresentationResult } = useSuperwall()
    const connections = usePersistedStore((state) => state.connections)
    const currentConnection = usePersistedStore((state) => state.currentConnection)
    const switchConnection = usePersistedStore((state) => state.switchConnection)
    const removeConnection = usePersistedStore((state) => state.removeConnection)

    const currentWorkspaceId = useMemo(
        () => currentConnection?.currentWorkspaceId,
        [currentConnection]
    )

    const [searchString, setSearchString] = useState('')

    const usersQueries = useQueries({
        queries: connections.map((connection) => ({
            queryKey: ['user', connection.id],
            queryFn: async () => await fetchUserInfo({ connectionId: connection.id }),
        })),
    })

    const currentUserQuery = useMemo(() => {
        return usersQueries.find((query) => query.data?.id === currentConnection?.id)
    }, [usersQueries, currentConnection])

    const currentUser = useMemo(() => {
        return currentUserQuery?.data
    }, [currentUserQuery])

    const currentUserWorkspaces = useMemo(() => {
        return currentUser?.workspaces
    }, [currentUser])

    const currentWorkspace = useMemo(() => {
        return currentUserWorkspaces?.find((workspace) => workspace.id === currentWorkspaceId)
    }, [currentUserWorkspaces, currentWorkspaceId])

    const currentWorkspaceProjects = useMemo(() => {
        if (!currentWorkspace?.projects) return []
        return currentWorkspace.projects.edges
            .map((edge) => edge.node)
            .sort((a, b) => a.name.localeCompare(b.name))
    }, [currentWorkspace])

    const filteredWorkspaceProjects = useMemo(() => {
        if (!currentWorkspaceProjects) return []
        if (!searchString) return currentWorkspaceProjects

        return currentWorkspaceProjects
            ?.map((project) => {
                if (project.name.toLowerCase().includes(searchString.toLowerCase())) {
                    return project
                }

                if (
                    project.services.edges.find((edge) =>
                        edge.node.name.toLowerCase().includes(searchString.toLowerCase())
                    )
                ) {
                    return project
                }

                // const filteredProject = project
                // const filteredServices = filteredProject.services.edges.filter((edge) =>
                //     edge.node.name.toLowerCase().includes(searchString.toLowerCase())
                // )

                // if (filteredServices.length > 0) {
                //     filteredProject.services.edges = filteredServices
                //     return filteredProject
                // }

                return null
            })
            .filter((project) => project !== null)
    }, [currentWorkspaceProjects, searchString])

    useEffect(() => {
        // this is needed on first login, and when switching connections (not accounts/teams/workspaces)
        // to pick an accountId from the received ones
        console.log('currentWorkspaceId', currentWorkspaceId)

        if (!currentUser || !currentUserWorkspaces || currentUserWorkspaces.length === 0) return

        if (!currentWorkspaceId) {
            for (const workspace of currentUserWorkspaces) {
                if (workspace.id) {
                    switchConnection({ connectionId: currentUser.id, workspaceId: workspace.id })
                    break
                }
            }
        }

        // sets a new workspace if the user lost access to the current one
        if (!currentUserWorkspaces.find((workspace) => workspace.id === currentWorkspaceId)) {
            for (const workspace of currentUserWorkspaces) {
                if (workspace.id) {
                    switchConnection({ connectionId: currentUser.id, workspaceId: workspace.id })
                    break
                }
            }
        }
    }, [currentWorkspaceId, currentUser, currentUserWorkspaces, switchConnection])

    useEffect(() => {
        const getUrlAsync = async () => {
            // Get the deep link used to open the app
            const initialUrl = await Linking.getInitialURL()

            const eventId = initialUrl?.split('railwayapp:///?event=')[1]

            if (!eventId) return

            if (eventId === 'push') {
                registerPlacement({
                    placement: 'OpenNotifications',
                    feature: () => {
                        router.push('/notifications')
                    },
                }).catch((error) => {
                    console.error('Error registering OpenNotifications', error)
                    Alert.alert('Error', 'Something went wrong, please try again.')
                })
                return
            }
        }

        getUrlAsync()
    }, [registerPlacement])

    const Placeholder = useMemo(() => {
        const emptyUser = buildPlaceholder({
            isLoading: currentUserQuery?.isLoading || false,
            isError: currentUserQuery?.isError || false,
            errorLabel: 'Failed to fetch user data',
            emptyLabel: 'No user data found',
            hasData: !!currentUser,
        })

        if (emptyUser) return emptyUser

        const emptyWorkspace = buildPlaceholder({
            isLoading: false,
            isError: false,
            errorLabel: 'Failed to fetch user data',
            emptyLabel: 'No workspace data found',
            hasData: !!currentWorkspace && !!currentWorkspaceProjects,
        })

        return emptyWorkspace
    }, [
        currentUserQuery?.isLoading,
        currentUserQuery?.isError,
        currentWorkspaceProjects,
        currentWorkspace,
        currentUser,
    ])
    const { overrideProps } = useFlashlistProps(Placeholder)

    useEffect(() => {
        if (subscriptionStatus.status !== 'INACTIVE') {
            QuickActions.isSupported().then((supported) => {
                if (!supported) return
                QuickActions.setItems(
                    Platform.OS === 'ios'
                        ? [
                              {
                                  id: '0',
                                  title: 'Bugs?',
                                  subtitle: 'Open an issue on GitHub!',
                                  icon: 'mail',
                              },
                          ]
                        : []
                )
            })
            return
        }

        try {
            getPresentationResult('LifetimeOffer_1').then((presentationResult) => {
                if (
                    ['placementnotfound', 'noaudiencematch'].includes(
                        presentationResult.type.toLowerCase()
                    )
                ) {
                    return
                }
                setTimeout(() => {
                    registerPlacement({
                        placement: 'LifetimeOffer_1',
                        feature: () => {
                            // WidgetKitModule.setIsSubscribed(true)
                            Alert.alert('Congrats!', 'You unlocked lifetime access to Station.')
                        },
                    }).catch((error) => {
                        Sentry.captureException(error)
                        console.error('Error registering LifetimeOffer_1', error)
                    })
                }, 1000)
            })

            QuickActions.isSupported().then((supported) => {
                if (!supported) return
                QuickActions.setItems([
                    {
                        id: '0',
                        title:
                            Platform.OS === 'android'
                                ? "Don't delete me ): Tap here!"
                                : "Don't delete me ):",
                        subtitle: "Here's 50% off for life!",
                        icon: 'love',
                        params: { href: '/?showLfo1=1' },
                    },
                ])
            })
        } catch (error) {
            Sentry.captureException(error)
        }
    }, [registerPlacement, subscriptionStatus.status, getPresentationResult])

    useWebhookCheck(usersQueries)
    useNotificationHandler()

    return (
        <>
            <Stack.Screen
                // name="home"
                options={{
                    headerShown: true,
                    headerLargeTitle: true,
                    title: currentWorkspace?.name,
                    headerLeft: () => (
                        <ContextMenu
                            dropdownMenuMode={true}
                            actions={[
                                ...(usersQueries || [])
                                    .map((userQuery) => {
                                        if (!userQuery.data) return undefined

                                        return {
                                            title: userQuery.data.name || userQuery.data.email,
                                            disabled: userQuery.data.id === currentConnection?.id,
                                            inlineChildren: true,
                                            actions: [
                                                ...(userQuery.data.workspaces || []).map(
                                                    (workspace) => ({
                                                        title: workspace.name,
                                                        systemIcon: isLiquidGlassAvailable()
                                                            ? workspace.id === currentWorkspaceId
                                                                ? 'smallcircle.filled.circle.fill'
                                                                : 'smallcircle.filled.circle'
                                                            : undefined,
                                                        disabled:
                                                            workspace.id === currentWorkspaceId,
                                                    })
                                                ),
                                                {
                                                    title: 'Remove Connection',
                                                    systemIcon: 'trash',
                                                    destructive: true,
                                                },
                                            ],
                                        }
                                    })
                                    .filter((action) => action !== undefined),
                                {
                                    title: 'Notifications',
                                    systemIcon: 'bell',
                                },
                                {
                                    title: 'Add Connection',
                                    systemIcon: 'plus',
                                },
                            ]}
                            onPress={(e) => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

                                if (e.nativeEvent.name === 'Remove Connection') {
                                    const [userPath] = e.nativeEvent.indexPath // [userPath, actionPath]

                                    Alert.alert(
                                        'Remove Connection',
                                        'Are you sure you want to remove this connection?',
                                        [
                                            {
                                                text: 'Remove',
                                                onPress: () => {
                                                    // we can  use the same index because they get displayed in the same order
                                                    const connectionId =
                                                        usersQueries[userPath].data?.id
                                                    if (!connectionId) return

                                                    removeConnection(connectionId)

                                                    // if we had 1 connection before, we will have none
                                                    if (connections.length === 1) {
                                                        storage.clearAll()
                                                        router.dismissAll()
                                                        router.replace('/login')
                                                        queryClient.clear()
                                                        return
                                                    }
                                                },
                                                style: 'destructive',
                                            },
                                            {
                                                text: 'Cancel',
                                                style: 'cancel',
                                            },
                                        ]
                                    )

                                    return
                                }

                                if (e.nativeEvent.name === 'Add Connection') {
                                    const featureFn = () => {
                                        router.push('/login')
                                    }

                                    if (__DEV__) {
                                        featureFn()
                                        return
                                    }

                                    registerPlacement({
                                        placement: 'AddConnection',
                                        feature: featureFn,
                                    }).catch((error) => {
                                        console.error('Error registering AddConnection', error)
                                        Alert.alert(
                                            'Error',
                                            'Something went wrong, please try again.'
                                        )
                                    })

                                    return
                                }

                                if (e.nativeEvent.name === 'Notifications') {
                                    const featureFn = () => {
                                        router.push('/notifications')
                                    }

                                    if (__DEV__) {
                                        featureFn()
                                        return
                                    }

                                    registerPlacement({
                                        placement: 'OpenNotifications',
                                        feature: featureFn,
                                    }).catch((error) => {
                                        console.error('Error registering OpenNotifications', error)
                                        Alert.alert(
                                            'Error',
                                            'Something went wrong, please try again.'
                                        )
                                    })
                                    return
                                }

                                const [userPath, workspacePath] = e.nativeEvent.indexPath
                                const selectedUser = usersQueries[userPath].data
                                const selectedWorkspace =
                                    usersQueries[userPath].data?.workspaces[workspacePath]

                                if (!selectedWorkspace || !selectedUser) return

                                if (selectedWorkspace.id !== currentWorkspaceId) {
                                    switchConnection({
                                        connectionId: selectedUser.id,
                                        workspaceId: selectedWorkspace.id,
                                    })
                                    return
                                }
                            }}
                        >
                            <HeaderButton
                                style={{
                                    marginRight: isLiquidGlassAvailable() ? undefined : 10,
                                }}
                            >
                                <Image
                                    source={
                                        currentWorkspace?.avatar || currentUser?.avatar
                                            ? {
                                                  uri:
                                                      currentWorkspace?.avatar ||
                                                      currentUser?.avatar,
                                              }
                                            : require('@/assets/icon.png')
                                    }
                                    borderRadius={isLiquidGlassAvailable() ? 16 : 32}
                                    style={
                                        isLiquidGlassAvailable()
                                            ? { width: 32, height: 32 }
                                            : { width: 20, height: 20 }
                                    }
                                />
                            </HeaderButton>
                        </ContextMenu>
                    ),
                    // headerRight: () => (
                    //     <TouchableOpacity
                    //         style={{
                    //             width: 20,
                    //             height: 20,
                    //         }}
                    //         onPress={() => {
                    //             queryClient.clear()
                    //         }}
                    //     >
                    //         <Ionicons name="cog" size={20} color={COLORS.gray950} />
                    //     </TouchableOpacity>
                    // ),
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
                }}
            />
            <FlashList
                data={filteredWorkspaceProjects}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        onRefresh={async () => {
                            await Promise.all([
                                await queryClient.invalidateQueries({ queryKey: ['project'] }),
                                await queryClient.invalidateQueries({ queryKey: ['apiStatus'] }),
                                await currentUserQuery?.refetch(),
                            ])
                        }}
                    />
                }
                ItemSeparatorComponent={() => (
                    <View style={{ height: 1, backgroundColor: COLORS.gray200 }} />
                )}
                overrideProps={overrideProps}
                ListEmptyComponent={Placeholder}
                renderItem={({ item, index }) => (
                    <ProjectCard
                        id={item.id}
                        name={item.name}
                        backgroundColor={
                            index % 2 === 0 ? COLORS.gray50 : COLORS.backgroundSecondary
                        }
                    />
                )}
                ListFooterComponent={() => (
                    <View style={{ paddingTop: 16 }}>
                        <ApiStatus />
                    </View>
                )}
            />
            <BottomGradient />
        </>
    )
}
