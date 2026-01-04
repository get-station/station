import { deleteWebhook, registerWebhook } from '@/api/mutations'
import { fetchUserInfo, fetchWebhook } from '@/api/queries'
import RefreshControl from '@/components/base/RefreshControl'
import { queryClient } from '@/lib/query'
import { usePersistedStore } from '@/store/persisted'
import { COLORS } from '@/theme/colors'
import { useQuery } from '@tanstack/react-query'
import { useMutation, useQueries } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import * as Notifications from 'expo-notifications'
import { useUser } from 'expo-superwall'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, Image, Platform, ScrollView, Switch, Text, View } from 'react-native'
import { useDebouncedCallback } from 'use-debounce'

export default function NotificationsScreen() {
    const connections = usePersistedStore((state) => state.connections)

    const [hasPushEnabled, setHasPushEnabled] = useState(false)
    const [pushToken, setPushToken] = useState<string | null>(null)

    const usersQueries = useQueries({
        queries: connections.map((connection) => ({
            queryKey: ['user', connection.id],
            queryFn: async () => await fetchUserInfo({ connectionId: connection.id }),
        })),
    })

    const dataForWorkspaceId = useMemo(() => {
        const workspaceMap: Record<
            string,
            Awaited<ReturnType<typeof fetchUserInfo>>['workspaces'][number] & {
                connectionId: string
            }
        > = {}

        for (const userQuery of usersQueries) {
            if (userQuery.data?.workspaces) {
                for (const workspace of userQuery.data.workspaces) {
                    // pleasing the compiler
                    if (workspace.id) {
                        workspaceMap[workspace.id] = {
                            ...workspace,
                            connectionId: userQuery.data.id,
                        }
                    }
                }
            }
        }

        return workspaceMap
    }, [usersQueries])

    const allWorkspaceIds = useMemo(() => {
        return Object.keys(dataForWorkspaceId)
    }, [dataForWorkspaceId])

    useEffect(() => {
        Notifications.getPermissionsAsync().then(async ({ granted }) => {
            if (!granted) return

            await Notifications.getDevicePushTokenAsync().then((token) => {
                setPushToken(token.data)
                setHasPushEnabled(true)
                // making sure it gets refreshed
                setTimeout(() => {
                    queryClient.resetQueries({ queryKey: ['webhooks'] })
                }, 500)
            })
        })
    }, [])

    const enablePush = useCallback(async () => {
        const { status: currentStatus, canAskAgain } =
            await Notifications.getPermissionsAsync().catch(() => {
                return { status: undefined, canAskAgain: false }
            })

        if (!currentStatus) return

        if (currentStatus === Notifications.PermissionStatus.GRANTED) {
            await Notifications.getDevicePushTokenAsync().then(
                (token) => {
                    setPushToken(token.data)
                    setHasPushEnabled(true)
                },
                () => {
                    Alert.alert('Push notifications could not be enabled', 'Please try again later')
                }
            )
            return
        }

        if (!canAskAgain) {
            Alert.alert(
                'Push notifications are not enabled',
                'Please enable push notifications in your device settings'
            )
            return
        }

        const { status } = await Notifications.requestPermissionsAsync().catch(() => {
            return { status: undefined }
        })

        if (!status) return

        if (status === Notifications.PermissionStatus.GRANTED) {
            await Notifications.getDevicePushTokenAsync().then(
                (token) => {
                    setPushToken(token.data)
                    setHasPushEnabled(true)
                },
                () => {
                    Alert.alert('Push notifications could not be enabled', 'Please try again later')
                }
            )
        }
    }, [])

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ flex: 1 }}
            refreshControl={
                <RefreshControl
                    onRefresh={async () =>
                        await queryClient.resetQueries({ queryKey: ['webhook'] })
                    }
                />
            }
        >
            <View style={{ marginTop: 20 }}>
                {allWorkspaceIds.map((workspaceId, workspaceIndex) => (
                    <WorkspaceCard
                        key={workspaceId}
                        workspace={dataForWorkspaceId[workspaceId]}
                        hasPushEnabled={hasPushEnabled}
                        enablePush={enablePush}
                        pushToken={pushToken}
                        backgroundColor={
                            workspaceIndex % 2 === 0 ? 'transparent' : COLORS.backgroundSecondary
                        }
                    />
                ))}
            </View>
        </ScrollView>
    )
}

function WorkspaceCard({
    workspace,
    hasPushEnabled,
    enablePush,
    pushToken,
    backgroundColor,
}: {
    workspace: Awaited<ReturnType<typeof fetchUserInfo>>['workspaces'][number] & {
        connectionId: string
    }
    hasPushEnabled: boolean
    enablePush: () => Promise<void>
    pushToken: string | null
    backgroundColor: string
}) {
    const userQuery = useQuery({
        queryKey: ['user', workspace.connectionId],
        queryFn: async () => await fetchUserInfo({ connectionId: workspace.connectionId }),
        enabled: !!workspace.connectionId,
    })

    const workspaceProjects = useMemo(() => {
        if (!workspace?.projects) return []
        return workspace.projects.edges
            .map((edge) => edge.node)
            .sort((a, b) => a.name.localeCompare(b.name))
    }, [workspace])

    return (
        <View style={{ flexDirection: 'column', gap: 20, backgroundColor, padding: 14 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            source={{
                                uri: workspace.avatar || userQuery.data?.avatar || '',
                            }}
                            style={{ flex: 1 }}
                        />
                    </View>
                    <Text style={{ fontSize: 24, color: COLORS.white }}>{workspace.name}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'column', gap: 10 }}>
                {workspaceProjects?.map((project) => (
                    <ProjectRow
                        key={project.id}
                        project={{
                            ...project,
                            connectionId: workspace.connectionId,
                        }}
                        hasPushEnabled={hasPushEnabled}
                        enablePush={enablePush}
                        pushToken={pushToken}
                    />
                ))}
            </View>
        </View>
    )
}

function ProjectRow({
    project,
    hasPushEnabled,
    enablePush,
    pushToken,
}: {
    project: Awaited<
        ReturnType<typeof fetchUserInfo>
    >['workspaces'][number]['projects']['edges'][number]['node'] & {
        connectionId: string
    }
    hasPushEnabled: boolean
    enablePush: () => Promise<void>
    pushToken: string | null
}) {
    const { subscriptionStatus } = useUser()
    const [enabled, setEnabled] = useState(false)

    const webhookQuery = useQuery({
        queryKey: ['webhook', project.id],
        queryFn: async () => {
            // pleasing the compiler
            if (!project.id) return null
            if (!pushToken) return null

            const webhook = await fetchWebhook({
                connectionId: project.connectionId,
                projectId: project.id,
                pushToken: pushToken,
            })

            console.log(
                '[webhookQuery] webhook for project',
                project.id,
                JSON.stringify(webhook, null, 2)
            )

            return {
                webhook: webhook,
                connectionId: project.connectionId,
                projectId: project.id,
            }
        },
        enabled: !!project.id && !!pushToken,
    })

    const registerWebhookMutation = useMutation({
        mutationFn: async () => {
            if (!pushToken) return

            await registerWebhook({
                connectionId: project.connectionId,
                projectId: project.id,
                pushToken: pushToken,
                isSubscribed: subscriptionStatus.status === 'ACTIVE',
            })
        },
        onSuccess: async () => {
            // await webhookQuery.refetch()
            // making sure it gets refreshed
            setTimeout(() => {
                queryClient.resetQueries({ queryKey: ['webhooks'] })
            }, 1000)
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const deleteWebhookMutation = useMutation({
        mutationFn: async () => {
            if (!webhookQuery.data?.webhook?.id) return

            console.log(
                '[deleteWebhookMutation] unregistering webhook',
                webhookQuery.data.webhook.id
            )

            await deleteWebhook({
                webhookId: webhookQuery.data.webhook.id,
                connectionId: project.connectionId,
            })
        },
        onSuccess: async () => {
            await webhookQuery.refetch()
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    useEffect(() => {
        if (!webhookQuery.data?.webhook?.id) return
        setEnabled(true)
    }, [webhookQuery.data])

    const toggleWebhooksDebounced = useDebouncedCallback(async (enabled: boolean) => {
        if (enabled) {
            await deleteWebhookMutation.mutateAsync()
        } else {
            await registerWebhookMutation.mutateAsync()
        }
    }, 1000)

    const toggleEvent = useCallback(async () => {
        if (!hasPushEnabled || !pushToken) {
            await enablePush()
            return
        }

        setEnabled(!enabled)
        toggleWebhooksDebounced(enabled)
    }, [toggleWebhooksDebounced, hasPushEnabled, enablePush, pushToken, enabled])

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
            }}
        >
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.white }}>
                {project.name}
            </Text>

            <Switch
                value={enabled}
                onValueChange={toggleEvent}
                trackColor={{
                    true: COLORS.pink600,
                    false: undefined,
                }}
                thumbColor={Platform.OS === 'android' ? COLORS.pink300 : undefined}
            />
        </View>
    )
}
