import railway from '@/lib/railway'
import { usePersistedStore } from '@/store/persisted'
import { randomUUID } from 'expo-crypto'

export async function fetchUserInfo({ connectionId }: { connectionId?: string } = {}) {
    console.log('fetchUserInfo')

    try {
        const response = await railway({ connectionId }).query({
            me: {
                avatar: true,
                // customer: {
                //     id: true,
                //     usageLimit: {
                //         customerId: true,
                //         hardLimit: true,
                //         id: true,
                //         isOverLimit: true,
                //         softLimit: true,
                //     },
                //     isTrialing: true,
                //     isPrepaying: true,
                //     isUsageSubscriber: true,
                //     isWithdrawingToCredits: true,
                //     remainingUsageCreditBalance: true,
                //     state: true,
                //     subscriptions: {
                //         id: true,
                //         status: true,
                //     },
                //     creditBalance: true,
                // },
                name: true,
                id: true,
                isAdmin: true,
                isConductor: true,
                // isDevPlan: true,
                email: true,
                has2FA: true,
                username: true,
                workspaces: {
                    id: true,
                    createdAt: true,
                    plan: true,
                    name: true,
                    avatar: true,
                    projects: {
                        edges: {
                            node: {
                                id: true,
                                name: true,
                                services: {
                                    edges: {
                                        node: {
                                            id: true,
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                flags: true,
                // isOnHobbyPlan: true,
                isVerified: true,
                registrationStatus: true,
                termsAgreedOn: true,
                // isEligibleForFreeHobbyPlan: true,
            },
        })

        console.log('User info', response)

        return response.me
    } catch (e) {
        const error = e as Error
        console.log('Error fetching user info', error)
        throw error
    }
}

export async function fetchProject({ id }: { id: string }) {
    try {
        const response = await railway().query({
            project: {
                __args: {
                    id,
                },
                id: true,
                name: true,
                description: true,
                isPublic: true,
                services: {
                    edges: {
                        node: {
                            id: true,
                            name: true,
                            icon: true,
                            deletedAt: true,
                            createdAt: true,
                            updatedAt: true,
                        },
                    },
                },
                createdAt: true,
                updatedAt: true,
                volumes: {
                    edges: {
                        cursor: true,
                        node: {
                            createdAt: true,
                            id: true,
                            name: true,
                            volumeInstances: {
                                edges: {
                                    cursor: true,
                                    node: {
                                        createdAt: true,
                                        currentSizeMB: true,
                                        environmentId: true,
                                        externalId: true,
                                        id: true,
                                        mountPath: true,
                                        region: true,
                                        serviceId: true,
                                        sizeMB: true,
                                        state: true,
                                        // type: true, //! thx railway
                                        volumeId: true,
                                        volume: {
                                            name: true,
                                        },
                                    },
                                },
                            },
                            projectId: true,
                        },
                    },
                    pageInfo: {
                        endCursor: true,
                        hasNextPage: true,
                        hasPreviousPage: true,
                        startCursor: true,
                    },
                },
                baseEnvironmentId: true,
                environments: {
                    edges: {
                        cursor: true,
                        node: {
                            createdAt: true,
                            deletedAt: true,
                            id: true,
                            isEphemeral: true,
                            meta: {
                                baseBranch: true,
                                branch: true,
                                prCommentId: true,
                                prNumber: true,
                                prRepo: true,
                                prTitle: true,
                            },
                            name: true,
                            projectId: true,
                            serviceInstances: {
                                edges: {
                                    cursor: true,
                                    node: {
                                        buildCommand: true,
                                        builder: true,
                                        createdAt: true,
                                        cronSchedule: true,
                                        deletedAt: true,
                                        environmentId: true,
                                        healthcheckPath: true,
                                        healthcheckTimeout: true,
                                        id: true,
                                        isUpdatable: true,
                                        latestDeployment: {
                                            canRedeploy: true,
                                            canRollback: true,
                                            createdAt: true,
                                            deploymentStopped: true,
                                            environmentId: true,
                                            id: true,
                                            meta: true,
                                            projectId: true,
                                            serviceId: true,
                                            snapshotId: true,
                                            staticUrl: true,
                                            status: true,
                                            suggestAddServiceDomain: true,
                                            updatedAt: true,
                                            url: true,
                                        },
                                        nextCronRunAt: true,
                                        nixpacksPlan: true,
                                        numReplicas: true,
                                        preDeployCommand: true,
                                        railwayConfigFile: true,
                                        region: true,
                                        restartPolicyMaxRetries: true,
                                        restartPolicyType: true,
                                        rootDirectory: true,
                                        serviceId: true,
                                        serviceName: true,
                                        sleepApplication: true,
                                        source: {
                                            image: true,
                                            repo: true,
                                        },
                                        startCommand: true,
                                        updatedAt: true,
                                        upstreamUrl: true,
                                        watchPatterns: true,
                                    },
                                },
                            },
                            sourceEnvironment: {
                                id: true,
                            },
                            unmergedChangesCount: true,
                            updatedAt: true,
                            variables: {
                                edges: {
                                    cursor: true,
                                    node: {
                                        createdAt: true,
                                        environmentId: true,
                                        id: true,
                                        isSealed: true,
                                        name: true,
                                        pluginId: true,
                                        references: true,
                                        serviceId: true,
                                        updatedAt: true,
                                    },
                                },
                            },
                        },
                    },
                    pageInfo: {
                        endCursor: true,
                        hasNextPage: true,
                        hasPreviousPage: true,
                        startCursor: true,
                    },
                },
            },
        })
        return response
    } catch (e) {
        const error = e as Error
        console.log('Error fetching project info', error)
        throw error
    }
}

export async function fetchProjectUsage({ id }: { id: string }) {
    const COST_MEMORY = 0.000231
    const COST_CPU = 0.000463
    const COST_NETWORK = 0.1
    const COST_VOLUME = 0.25 / (31 * 24 * 60) // no. of minutes in a month

    // Helper function to format to 2 decimal places
    const formatValue = (value: number) => {
        return Number(value.toFixed(2))
    }

    console.log('fetchProjectUsage', id)

    try {
        const response = await railway().query({
            estimatedUsage: {
                __args: {
                    projectId: id,
                    measurements: [
                        'MEMORY_USAGE_GB',
                        'CPU_USAGE',
                        'DISK_USAGE_GB',
                        'BACKUP_USAGE_GB',
                        'NETWORK_TX_GB',
                        'NETWORK_RX_GB',
                    ],
                },
                measurement: true,
                estimatedValue: true,
            },
            usage: {
                __args: {
                    projectId: id,
                    measurements: [
                        'MEMORY_USAGE_GB',
                        'CPU_USAGE',
                        'DISK_USAGE_GB',
                        'BACKUP_USAGE_GB',
                        'NETWORK_TX_GB',
                        'NETWORK_RX_GB',
                    ],
                    startDate: new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        1
                    ).toISOString(),
                },
                measurement: true,
                value: true,
            },
        })

        return {
            estimatedUsage: {
                memory: formatValue(
                    (response.estimatedUsage.find((m) => m.measurement === 'MEMORY_USAGE_GB')
                        ?.estimatedValue || 0) * COST_MEMORY
                ),
                cpu: formatValue(
                    (response.estimatedUsage.find((m) => m.measurement === 'CPU_USAGE')
                        ?.estimatedValue || 0) * COST_CPU
                ),
                network: formatValue(
                    (response.estimatedUsage.find((m) => m.measurement === 'NETWORK_RX_GB')
                        ?.estimatedValue || 0) * COST_NETWORK
                ),
                volume: formatValue(
                    (response.estimatedUsage.find((m) => m.measurement === 'DISK_USAGE_GB')
                        ?.estimatedValue || 0) * COST_VOLUME
                ),
            },
            usage: {
                memory: formatValue(
                    (response.usage.find((m) => m.measurement === 'MEMORY_USAGE_GB')?.value || 0) *
                        COST_MEMORY
                ),
                cpu: formatValue(
                    (response.usage.find((m) => m.measurement === 'CPU_USAGE')?.value || 0) *
                        COST_CPU
                ),
                network: formatValue(
                    (response.usage.find((m) => m.measurement === 'NETWORK_RX_GB')?.value || 0) *
                        COST_NETWORK
                ),
                volume: formatValue(
                    (response.usage.find((m) => m.measurement === 'DISK_USAGE_GB')?.value || 0) *
                        COST_VOLUME
                ),
            },
        }
    } catch (e) {
        const error = e as Error
        console.log('Error fetching project usage', error)
        throw error
    }
}

export async function fetchMetrics({
    projectId,
    averagingWindowSeconds,
    sampleRateSeconds,
    serviceId,
    environmentId,
    startDate,
}: {
    projectId: string
    sampleRateSeconds: number
    startDate: string
    averagingWindowSeconds?: number
    serviceId?: string
    environmentId?: string
}) {
    try {
        const response = await railway().query({
            metrics: {
                __args: {
                    projectId,
                    serviceId,
                    environmentId,
                    averagingWindowSeconds,
                    sampleRateSeconds, //3600,
                    startDate,
                    //  new Date(new Date().getFullYear(),new Date().getMonth(),  1).toISOString()
                    measurements: [
                        'MEMORY_USAGE_GB',
                        'CPU_USAGE',
                        'DISK_USAGE_GB',
                        'BACKUP_USAGE_GB',
                        'NETWORK_TX_GB',
                        'NETWORK_RX_GB',
                    ],
                },
                measurement: true,
                values: {
                    ts: true,
                    value: true,
                },
            },
        })

        return response
    } catch (e) {
        const error = e as Error
        console.log('Error fetching project metrics', error)
        throw error
    }
}

export async function fetchProjectEnvironmentLogs({ environmentId }: { environmentId: string }) {
    const currentConnection = usePersistedStore.getState().currentConnection
    const apiToken = currentConnection?.apiToken

    if (!apiToken) {
        throw new Error('No API token found')
    }

    try {
        // Include the required subprotocols and authorization header
        const ws = new WebSocket(
            'wss://backboard.railway.com/graphql/v2',
            ['graphql-transport-ws', 'graphql-ws'],
            // @ts-ignore
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        )

        // Wait for connection to be established
        await new Promise((resolve, reject) => {
            ws.onopen = () => {
                console.log('WebSocket opened, sending connection_init')
                // Send connection initialization message first
                ws.send(
                    JSON.stringify({
                        type: 'connection_init',
                        payload: {}, // You might need to add auth headers here if required
                    })
                )
                resolve(true)
            }
            ws.onerror = (error) => reject(error)
        })

        // Wait for connection acknowledgment
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Connection acknowledgment timeout'))
            }, 5000)

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data)
                    if (data.type === 'connection_ack') {
                        console.log('Connection acknowledged')
                        clearTimeout(timeout)
                        resolve(true)
                    }
                } catch (error) {
                    console.error('Error parsing ack message:', error)
                }
            }
        })

        // Now subscribe to logs
        ws.send(
            JSON.stringify({
                // id: crypto.randomUUID(),
                // id: '1314d182-4b09-4e74-ad9d-70b02119c0c' + Math.floor(Math.random() * 10),
                id: randomUUID(),
                type: 'subscribe',
                payload: {
                    query: `subscription streamEnvironmentLogs($environmentId: String!, $filter: String, $beforeLimit: Int!, $beforeDate: String, $anchorDate: String, $afterDate: String, $afterLimit: Int) {
                        environmentLogs(
                            environmentId: $environmentId
                            filter: $filter
                            beforeDate: $beforeDate
                            anchorDate: $anchorDate
                            afterDate: $afterDate
                            beforeLimit: $beforeLimit
                            afterLimit: $afterLimit
                        ) {
                            timestamp
                            message
                            severity
                            tags {
                                deploymentId
                                deploymentInstanceId
                                environmentId
                                pluginId
                                projectId
                                serviceId
                                snapshotId
                            }
                        }
                    }`,
                    variables: {
                        environmentId,
                        filter: '(  )',
                        beforeLimit: 1000,
                        // beforeDate: new Date().toISOString(),
                        // beforeDate: '2024-11-12T17:17:52.568Z',
                        anchorDate: null,
                        afterDate: null,
                    },
                },
            })
        )

        // Set up ping/pong to keep connection alive
        const pingInterval = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: 'ping' }))
            }
        }, 30000)

        // Clean up ping interval if connection closes
        ws.onclose = () => {
            clearInterval(pingInterval)
        }

        return ws
    } catch (error) {
        console.error('Error establishing WebSocket connection:', error)
        throw error
    }
}

export async function fetchServiceDeployments({
    id,
    projectId,
    environmentId,
}: { id: string; projectId: string; environmentId: string }) {
    try {
        const response = await railway().query({
            deployments: {
                __args: { input: { serviceId: id, environmentId, projectId } },
                edges: {
                    node: {
                        id: true,
                        createdAt: true,
                        updatedAt: true,
                        status: true,
                        meta: true,
                        projectId: true,
                        serviceId: true,
                        environmentId: true,
                        canRollback: true,
                        canRedeploy: true,
                        sockets: {
                            processName: true,
                        },
                    },
                },
            },
        })

        return response
    } catch (e) {
        const error = e as Error
        console.log('Error fetching service deployments', error)
        throw error
    }
}

export async function fetchServiceVariables({
    id,
    projectId,
    environmentId,
}: { id: string; projectId: string; environmentId: string }) {
    const variables = await railway().query({
        variables: {
            __args: {
                serviceId: id,
                environmentId,
                projectId,
            },
        },
    })

    const unrenderedVariables = await railway().query({
        variables: {
            __args: {
                serviceId: id,
                environmentId,
                projectId,
                unrendered: true,
            },
        },
    })

    const response = {
        variables: variables.variables,
        unrenderedVariables: unrenderedVariables.variables,
    }

    return response
}

export async function fetchServiceDomains({
    id,
    projectId,
    environmentId,
}: { id: string; projectId: string; environmentId: string }) {
    console.log('fetchServiceDomains', id, projectId, environmentId)

    const response = await railway()
        .query({
            domains: {
                __args: { serviceId: id, environmentId, projectId },
                serviceDomains: {
                    id: true,
                    domain: true,
                    suffix: true,
                    createdAt: true,
                    updatedAt: true,
                    targetPort: true,
                },
                customDomains: {
                    id: true,
                    domain: true,
                    createdAt: true,
                    updatedAt: true,
                    targetPort: true,
                    status: {
                        dnsRecords: {
                            hostlabel: true,
                            fqdn: true,
                            recordType: true,
                            requiredValue: true,
                            currentValue: true,
                            status: true,
                            zone: true,
                            purpose: true,
                        },
                        cdnProvider: true,
                        certificates: {
                            issuedAt: true,
                            expiresAt: true,
                            domainNames: true,
                            fingerprintSha256: true,
                            keyType: true,
                        },
                        certificateStatus: true,
                    },
                },
            },
            egressGateways: {
                __args: { serviceId: id, environmentId },
                ipv4: true,
                region: true,
            },
            tcpProxies: {
                __args: { serviceId: id, environmentId },
                id: true,
                createdAt: true,
                applicationPort: true,
                proxyPort: true,
                domain: true,
            },
        })
        .catch((e) => {
            console.log('error', e)
            throw e
        })

    // console.log(JSON.stringify(response, null, 2))

    return response
}

export async function fetchVolumeInstanceBackupList({ id }: { id: string }) {
    try {
        console.log('fetchVolumeInstanceBackupList', id)
        const response = await railway().query({
            volumeInstanceBackupList: {
                __args: { volumeInstanceId: id },
                id: true,
                name: true,
                usedMB: true,
                referencedMB: true,
                creatorId: true,
                createdAt: true,
                expiresAt: true,
            },
        })

        return response
    } catch (e) {
        const error = e as Error
        console.log('Error fetching volume instance backup list', error)
        throw error
    }
}

export async function fetchVolumeInstanceBackupScheduleList({ id }: { id: string }) {
    try {
        const response = await railway().query({
            volumeInstanceBackupScheduleList: {
                __args: { volumeInstanceId: id },
                id: true,
                name: true,
                cron: true,
                kind: true,
                retentionSeconds: true,
                createdAt: true,
            },
        })

        return response
    } catch (e) {
        const error = e as Error
        console.log('Error fetching volume instance backup schedule list', error)
        throw error
    }
}

export async function fetchApiStatus() {
    try {
        const response = await railway().query({
            platformStatus: {
                isStable: true,
            },
        })

        return response.platformStatus
    } catch (e) {
        const error = e as Error
        console.log('Error fetching api status', error)
        throw error
    }
}

export async function fetchWebhook({
    connectionId,
    projectId,
    pushToken,
}: { connectionId?: string; projectId: string; pushToken: string }) {
    const currentConnection = connectionId
        ? usePersistedStore
              .getState()
              .connections.find((connection) => connection.id === connectionId)
        : usePersistedStore.getState().currentConnection

    if (!currentConnection) {
        throw new Error('Current connection not found')
    }

    try {
        const response = await railway({ connectionId: currentConnection.id }).query({
            webhooks: {
                __args: { projectId: projectId },
                edges: {
                    node: {
                        id: true,
                        url: true,
                        lastStatus: true,
                        filters: true,
                    },
                },
            },
        })
        return response.webhooks.edges.find(
            (edge) =>
                edge.node.url.includes(process.env.EXPO_PUBLIC_WEBHOOK_URL!) &&
                edge.node.url.includes(`_id=${pushToken.substring(0, 8)}`)
        )?.node
    } catch (error) {
        console.log('[Error] Error fetching webhooks', error)
        throw error
    }
}
