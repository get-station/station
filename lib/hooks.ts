import { deleteWebhook } from '@/api/mutations'
import { type fetchUserInfo, fetchWebhook } from '@/api/queries'
import { queryClient } from '@/lib/query'
import { type UseQueryResult, useQueries } from '@tanstack/react-query'
import * as Notifications from 'expo-notifications'
import { router } from 'expo-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Platform } from 'react-native'

// gets all possible webhooks (all accounts, all sites) and unregisters them if push notifications are disabled
export function useWebhookCheck(
    usersQueries: UseQueryResult<Awaited<ReturnType<typeof fetchUserInfo>>>[]
) {
    const [pushToken, setPushToken] = useState<string | null>(null)

    const isChecking = useRef(false)

    const allProjectIds = useMemo(() => {
        const projects: { projectId: string; connectionId: string }[] = []

        for (const query of usersQueries) {
            if (!query.data) continue

            const user = query.data

            for (const workspace of user.workspaces) {
                projects.push(
                    ...workspace.projects.edges.map((edge) => ({
                        projectId: edge.node.id,
                        connectionId: user.id,
                    }))
                )
            }
        }

        return projects
    }, [usersQueries])

    const webhooksQueries = useQueries({
        queries: allProjectIds.map(({ projectId, connectionId }) => ({
            queryKey: ['webhook', projectId],
            queryFn: async () => {
                if (!pushToken) return null

                const webhook = await fetchWebhook({ connectionId, projectId, pushToken })

                return {
                    webhook: webhook,
                    connectionId: connectionId,
                    projectId: projectId,
                }
            },
        })),
    })

    useEffect(() => {
        if (webhooksQueries.length === 0) return

        if (isChecking.current) {
            console.log('[useWebhookCheck] already checking')
            return
        }

        isChecking.current = true

        async function disableWebhooks() {
            const validQueries = webhooksQueries.filter((q) => q.data)

            if (validQueries.length === 0) {
                console.log('[useWebhookCheck] no valid queries')
                return
            }

            for (const query of validQueries) {
                if (!query.data?.webhook?.id) continue

                await deleteWebhook({
                    webhookId: query.data.webhook.id,
                    connectionId: query.data.connectionId,
                })
            }

            await queryClient.resetQueries({ queryKey: ['webhook'] })
        }

        // check push notification status
        Notifications.getPermissionsAsync()
            .then(async ({ granted }) => {
                console.log('[disableWebhooks] granted', granted)
                if (!granted) {
                    console.log('[disableWebhooks] status not granted')
                    // disable webhooks for all teams
                    await disableWebhooks()
                    return
                }

                Notifications.getDevicePushTokenAsync().then((token) => {
                    setPushToken(token.data)
                })
            })
            .catch((error) => {
                console.log('[disableWebhooks] error', error)
            })
            .finally(() => {
                isChecking.current = false
            })
    }, [webhooksQueries])
}

export function useNotificationHandler() {
    const notificationTapListener = useRef<Notifications.EventSubscription | null>(null)

    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldPlaySound: Platform.OS === 'android',
                shouldSetBadge: false,
                shouldShowBanner: true,
                shouldShowList: true,
            }),
        })

        notificationTapListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                router.replace('/home')
            }
        )
        return () => {
            if (notificationTapListener.current) {
                notificationTapListener.current.remove()
            }
        }
    }, [])
}

export function useFlashlistProps(placeholder?: React.ReactNode) {
    const isAndroid = useMemo(() => Platform.OS === 'android', [])

    if (isAndroid) {
        return {
            overrideProps: undefined,
        }
    }

    return {
        overrideProps: placeholder
            ? {
                  contentContainerStyle: {
                      flex: 1,
                  },
              }
            : undefined,
    }
}
