import railway from '@/lib/railway'
import { Platform } from 'react-native'
import { fetchWebhook } from './queries'

export const deleteService = async ({
    id,
}: {
    id: string
}) => {
    try {
        const result = await railway().mutation({
            serviceDelete: {
                __args: {
                    id,
                },
            },
        })

        console.log('result', JSON.stringify(result, null, 2))
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete service ' + error)
    }
}

export const updateEnvironmentVariable = async ({
    environmentId,
    projectId,
    serviceId,
    name,
    value,
}: {
    environmentId: string
    projectId: string
    serviceId: string
    name: string
    value: string
}) => {
    try {
        await railway().mutation({
            variableUpsert: {
                __args: {
                    input: {
                        environmentId,
                        projectId,
                        serviceId,
                        name,
                        value,
                    },
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to update environment variable ' + error)
    }
}

export const addEnvironmentVariable = async ({
    environmentId,
    projectId,
    serviceId,
    name,
    value,
}: {
    environmentId: string
    projectId: string
    serviceId: string
    name: string
    value: string
}) => {
    try {
        await railway().mutation({
            variableUpsert: {
                __args: {
                    input: {
                        environmentId,
                        projectId,
                        serviceId,
                        name,
                        value,
                    },
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to add environment variable ' + error)
    }
}

export const deleteEnvironmentVariable = async ({
    environmentId,
    projectId,
    serviceId,
    name,
}: {
    environmentId: string
    projectId: string
    serviceId: string
    name: string
}) => {
    try {
        await railway().mutation({
            variableDelete: {
                __args: {
                    input: {
                        environmentId,
                        projectId,
                        serviceId,
                        name,
                    },
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete environment variable ' + error)
    }
}

export const addDomain = async ({
    domain,
    environmentId,
    projectId,
    serviceId,
    targetPort,
}: {
    domain: string
    environmentId: string
    projectId: string
    serviceId: string
    targetPort?: number
}) => {
    try {
        await railway().mutation({
            __name: 'customDomainCreate',
            customDomainCreate: {
                __args: {
                    input: {
                        domain,
                        environmentId,
                        projectId,
                        serviceId,
                        targetPort,
                    },
                },
                id: true,
                domain: true,
                createdAt: true,
                updatedAt: true,
                serviceId: true,
                environmentId: true,
                projectId: true,
                targetPort: true,
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to add domain ' + error)
    }
}

export const deleteDomain = async ({
    id,
}: {
    id: string
}) => {
    try {
        await railway().mutation({
            customDomainDelete: {
                __args: {
                    id,
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete domain ' + error)
    }
}

export const redeployDeployment = async ({
    id,
}: {
    id: string
}) => {
    try {
        await railway().mutation({
            deploymentRedeploy: {
                __args: { id },
                id: true,
                createdAt: true,
                updatedAt: true,
                status: true,
                meta: true,
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to redeploy deployment ' + error)
    }
}

export const rollbackDeployment = async ({
    id,
}: {
    id: string
}) => {
    try {
        await railway().mutation({
            deploymentRollback: {
                __args: { id },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to rollback deployment ' + error)
    }
}

export const removeDeployment = async ({
    id,
}: {
    id: string
}) => {
    try {
        await railway().mutation({
            deploymentRemove: {
                __args: { id },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to remove deployment ' + error)
    }
}

export const restartDeployment = async ({
    id,
}: {
    id: string
}) => {
    try {
        await railway().mutation({
            deploymentRestart: {
                __args: { id },
            },
        })
        console.log('Deployment restarted')
    } catch (error) {
        console.error(error)
        throw new Error('Failed to restart deployment ' + error)
    }
}

export const createVolumeBackup = async ({
    volumeInstanceId,
}: {
    volumeInstanceId: string
}) => {
    try {
        await railway().mutation({
            volumeInstanceBackupCreate: {
                __args: { volumeInstanceId },
                workflowId: true,
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to create volume instance backup ' + error)
    }
}

export const deleteVolumeBackup = async ({
    id,
    volumeInstanceId,
}: {
    id: string
    volumeInstanceId: string
}) => {
    console.log('deleteVolumeBackup', id, volumeInstanceId)
    try {
        await railway().mutation({
            volumeInstanceBackupDelete: {
                __args: { volumeInstanceBackupId: id, volumeInstanceId },
                workflowId: true,
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete volume instance backup ' + error)
    }
}

export async function registerWebhook({
    pushToken,
    connectionId,
    projectId,
    isSubscribed,
}: {
    pushToken: string
    connectionId: string
    projectId: string
    isSubscribed: boolean
}) {
    if (!isSubscribed) {
        throw new Error('Push Notifications require an active subscription')
    }

    let shouldRevert = false
    let webhookId: string | null = null

    try {
        const webhook = await fetchWebhook({
            connectionId,
            projectId,
            pushToken,
        })

        if (webhook) {
            // remove existing webhook
            await deleteWebhook({
                webhookId: webhook.id,
                connectionId,
            })
        }

        const randomString = new Array(12)
            .fill(0)
            .map(() => Math.random().toString(36).charAt(2))
            .join('')

        shouldRevert = true

        await createWebhook({
            verification: randomString,
            projectId,
            connectionId,
            pushToken,
        }).then((res) => {
            if ('id' in res.webhookCreate) {
                webhookId = res.webhookCreate.id as string
            }
        })

        const url =
            Platform.OS === 'android'
                ? process.env.EXPO_PUBLIC_WEBHOOK_URL + '/google/notifications'
                : process.env.EXPO_PUBLIC_WEBHOOK_URL + '/apple/notifications'

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                projectId: projectId,
                token: pushToken,
                verification: randomString,
            }),
        })

        if (!res.ok) {
            console.log('Failed to register webhook', res)
            throw new Error('Failed to register webhook')
        }
    } catch (error) {
        if (shouldRevert && webhookId) {
            await deleteWebhook({
                webhookId,
                connectionId,
            }).catch((err) => {
                console.error('[registerWebhook] Error deleting webhook', err)
            })
        }
        console.log('[registerWebhook] Error registering webhook', error)
        throw error
    }
}

export async function createWebhook({
    verification,
    projectId,
    connectionId,
    pushToken,
}: {
    verification: string
    projectId: string
    connectionId: string
    pushToken: string
}) {
    try {
        const response = await railway({ connectionId }).mutation({
            webhookCreate: {
                id: true,
                url: true,
                lastStatus: true,
                filters: true,
                __args: {
                    input: {
                        url:
                            process.env.EXPO_PUBLIC_WEBHOOK_URL +
                            '/webhook?v=' +
                            verification +
                            '&_id=' +
                            pushToken.substring(0, 8),
                        projectId,
                        filters: null,
                    },
                },
            },
        })
        console.log('response', response)
        return response
    } catch (error) {
        console.log('[createWebhook] Error creating webhook', error)
        throw error
    }
}

export async function deleteWebhook({
    webhookId,
    connectionId,
}: {
    webhookId: string
    connectionId: string
}) {
    try {
        const response = await railway({ connectionId }).mutation({
            webhookDelete: {
                __args: { id: webhookId },
            },
        })
        return response
    } catch (error) {
        console.log('[deleteWebhook] Error deleting webhook', error)
        throw error
    }
}
