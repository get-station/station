import { addDomain, deleteDomain } from '@/api/mutations'
import { fetchProject, fetchServiceDomains } from '@/api/queries'
import ActivityIndicator from '@/components/base/ActivityIndicator'
import HeaderItem from '@/components/base/HeaderItem'
import { HeaderTouchableOpacity } from '@/components/base/HeaderTouchableOpacity'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import { useFlashlistProps } from '@/lib/hooks'
import { COLORS } from '@/theme/colors'
import Alert from '@blazejkustra/react-native-alert'
import { Ionicons } from '@expo/vector-icons'
import Clipboard from '@react-native-clipboard/clipboard'
import { FlashList } from '@shopify/flash-list'
import { useMutation, useQuery } from '@tanstack/react-query'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import * as Haptics from 'expo-haptics'
import * as Linking from 'expo-linking'
import { useGlobalSearchParams, useNavigation } from 'expo-router'
import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { FlatList, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import ContextMenu, { type ContextMenuAction } from 'react-native-context-menu-view'

export default function ServiceDomainsScreen() {
    const { serviceId, projectId, initialEnvironmentId } = useGlobalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()

    const navigation = useNavigation()

    const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string | null>(
        initialEnvironmentId || null
    )

    console.log('ServiceDomainsScreen', serviceId, projectId, selectedEnvironmentId)

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const domainsQuery = useQuery({
        queryKey: ['domains', serviceId, projectId, selectedEnvironmentId],
        queryFn: () =>
            fetchServiceDomains({
                id: serviceId,
                projectId,
                environmentId: selectedEnvironmentId!,
            }),
        enabled: !!selectedEnvironmentId && !!projectId && !!serviceId,
    })

    console.log('domainsQuery', JSON.stringify(domainsQuery.data, null, 2))

    const addDomainMutation = useMutation({
        mutationFn: addDomain,
        onSuccess: () => {
            domainsQuery.refetch()
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const deleteDomainMutation = useMutation({
        mutationFn: deleteDomain,
        onSuccess: () => {
            domainsQuery.refetch()
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node)
    }, [projectQuery.data?.project.environments.edges])

    const mergedDomains = useMemo(() => {
        const customDomains = domainsQuery.data?.domains?.customDomains.map(
            (domain) => domain.domain
        )

        const serviceDomains = domainsQuery.data?.domains?.serviceDomains.map(
            (domain) => domain.domain
        )

        const tcpProxies = domainsQuery.data?.tcpProxies.map((proxy) =>
            proxy.proxyPort ? `${proxy.domain}:${proxy.proxyPort}` : proxy.domain
        )

        return [...(customDomains || []), ...(serviceDomains || []), ...(tcpProxies || [])]
    }, [domainsQuery])

    const showAddPrompt = useCallback(async () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
        Alert.prompt('Add Domain', 'Enter the domain you want to add', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Add',
                onPress: async (domain?: string) => {
                    if (!domain) return

                    const applicationPort = domainsQuery.data?.tcpProxies?.[0]?.applicationPort
                    const applicationPortString = applicationPort ? applicationPort.toString() : ''

                    if (applicationPort) {
                        Alert.alert(
                            'Confirm',
                            `Adding ${domain} for service on port ${applicationPortString}.`,
                            [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Add',
                                    onPress: async () => {
                                        await addDomainMutation.mutateAsync({
                                            domain,
                                            targetPort: Number.parseInt(applicationPortString),
                                            environmentId: selectedEnvironmentId!,
                                            projectId,
                                            serviceId,
                                        })
                                    },
                                },
                            ]
                        )
                    } else {
                        Alert.prompt('Confirm', 'Enter the port you want to add', [
                            { text: 'Cancel', style: 'cancel' },
                            {
                                text: 'Add',
                                onPress: async (applicationPortString?: string) => {
                                    if (!applicationPortString) return
                                    await addDomainMutation.mutateAsync({
                                        domain,
                                        targetPort: Number.parseInt(applicationPortString),
                                        environmentId: selectedEnvironmentId!,
                                        projectId,
                                        serviceId,
                                    })
                                },
                            },
                        ])
                    }
                },
            },
        ])
    }, [domainsQuery.data, addDomainMutation, selectedEnvironmentId, projectId, serviceId])

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: domainsQuery.isLoading,
            hasData: !!(domainsQuery.data?.domains?.serviceDomains?.length || 0),
            emptyLabel: 'No domains found',
            isError: domainsQuery.isError,
            errorLabel: 'Failed to fetch domains',
        })
    }, [domainsQuery.isLoading, domainsQuery, domainsQuery.isError])
    const { overrideProps } = useFlashlistProps(Placeholder)

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
            title: 'Domains',
            headerRight:
                addDomainMutation.isPending || deleteDomainMutation.isPending
                    ? () => (
                          <HeaderItem>
                              <ActivityIndicator sm={true} monochrome={true} />
                          </HeaderItem>
                      )
                    : () => (
                          <HeaderTouchableOpacity
                              onPress={async () => {
                                  await showAddPrompt()
                              }}
                          >
                              <Ionicons
                                  name={isLiquidGlassAvailable() ? 'add-sharp' : 'add-circle-sharp'}
                                  size={36}
                                  color={COLORS.pink500}
                              />
                          </HeaderTouchableOpacity>
                      ),
        })
    }, [navigation, showAddPrompt, addDomainMutation.isPending, deleteDomainMutation.isPending])

    return (
        <FlashList
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            data={mergedDomains}
            refreshControl={<RefreshControl onRefresh={domainsQuery.refetch} />}
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
            overrideProps={overrideProps}
            ListEmptyComponent={Placeholder}
            renderItem={({ item: domain, index: domainIndex }) => {
                const unverifiedDnsRecords = domainsQuery.data?.domains?.customDomains
                    .find((customDomain) => customDomain.domain === domain)
                    ?.status.dnsRecords.filter(
                        (record) => record.status === 'DNS_RECORD_STATUS_REQUIRES_UPDATE'
                    )
                    .map((record) => {
                        return {
                            type: record.recordType.replace('DNS_RECORD_TYPE_', ''),
                            name: record.hostlabel || '@',
                            value: record.requiredValue,
                        }
                    })

                const isUnverified = unverifiedDnsRecords && unverifiedDnsRecords.length > 0

                const actions: ContextMenuAction[] = [
                    {
                        title: 'Copy',
                        systemIcon: 'doc.on.doc',
                    },
                ]

                if (!isUnverified) {
                    actions.push({
                        title: 'Visit',
                        systemIcon: 'globe',
                    })
                }

                if (isUnverified) {
                    actions.push({
                        title: 'Copy Record Name',
                        systemIcon: 'doc.on.doc',
                    })

                    actions.push({
                        title: 'Copy Record Value',
                        systemIcon: 'doc.on.doc',
                    })
                }

                actions.push({
                    title: 'Delete',
                    destructive: true,
                    systemIcon: 'trash',
                })

                return (
                    <ContextMenu
                        dropdownMenuMode={true}
                        actions={actions}
                        onPress={(e) => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

                            if (e.nativeEvent.name === 'Copy') {
                                Clipboard.setString(domain)
                                return
                            }

                            if (e.nativeEvent.name === 'Visit') {
                                try {
                                    Linking.openURL(`https://${domain}`)
                                } catch {
                                    Alert.alert('Error', 'Could not open link, please try again.')
                                }
                                return
                            }

                            if (e.nativeEvent.name === 'Copy Record Name') {
                                Clipboard.setString(unverifiedDnsRecords?.[0]?.name || '')
                                return
                            }

                            if (e.nativeEvent.name === 'Copy Record Value') {
                                Clipboard.setString(unverifiedDnsRecords?.[0]?.value || '')
                                return
                            }

                            if (e.nativeEvent.name === 'Delete') {
                                Alert.alert(
                                    'Delete',
                                    'Are you sure you want to delete this domain?',
                                    [
                                        { text: 'Cancel', style: 'cancel' },
                                        {
                                            text: 'Delete',
                                            onPress: () => {
                                                const domainId =
                                                    domainsQuery.data?.domains?.customDomains.find(
                                                        (customDomain) =>
                                                            customDomain.domain === domain
                                                    )?.id

                                                if (!domainId) return

                                                deleteDomainMutation.mutate({
                                                    id: domainId,
                                                })
                                            },
                                        },
                                    ]
                                )
                            }
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: domainIndex % 2 === 0 ? COLORS.gray50 : undefined,
                                padding: 16,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                minHeight: 55, // so the activity indicator doesn't change the height
                            }}
                        >
                            <View style={{ flexDirection: 'column', gap: 12, flex: 1 }}>
                                <Text
                                    style={{
                                        color: isUnverified ? COLORS.red500 : COLORS.gray950,
                                        maxWidth: 280,
                                    }}
                                    numberOfLines={1}
                                >
                                    {domain}
                                </Text>
                                {isUnverified && (
                                    <View style={{ flexDirection: 'column', gap: 8 }}>
                                        <DomainVerificationRow
                                            label="Type"
                                            value={unverifiedDnsRecords[0].type}
                                        />

                                        <DomainVerificationRow
                                            label="Name"
                                            value={unverifiedDnsRecords[0].name}
                                        />

                                        <DomainVerificationRow
                                            label="Value"
                                            value={unverifiedDnsRecords[0].value}
                                        />
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    </ContextMenu>
                )
            }}
        />
    )
}

function DomainVerificationRow({
    label,
    value,
    copyValue,
}: { label: string; value: string; copyValue?: string }) {
    const [isCopied, setIsCopied] = useState(false)

    if (!copyValue)
        return (
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Text style={{ color: COLORS.gray900, width: 50 }}>{label}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{ color: COLORS.gray950, flex: 1 }}
                        numberOfLines={1}
                        ellipsizeMode="middle"
                    >
                        {value}
                    </Text>
                </View>
            </View>
        )

    return (
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Text style={{ color: COLORS.gray900, width: 50 }}>{label}</Text>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                }}
                onPress={() => {
                    Clipboard.setString(copyValue)
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 2000)
                }}
            >
                <Text
                    style={{ color: COLORS.gray950, flex: 1 }}
                    numberOfLines={1}
                    ellipsizeMode="middle"
                >
                    {value}
                </Text>

                <Ionicons
                    name={isCopied ? 'checkmark-circle' : 'clipboard'}
                    color={COLORS.gray800}
                    size={16}
                />
            </TouchableOpacity>
        </View>
    )
}
