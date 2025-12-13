import { createVolumeBackup, deleteVolumeBackup } from '@/api/mutations'
import { fetchProject, fetchVolumeInstanceBackupList } from '@/api/queries'
import ActivityIndicator from '@/components/base/ActivityIndicator'
import HeaderItem from '@/components/base/HeaderItem'
import { HeaderTouchableOpacity } from '@/components/base/HeaderTouchableOpacity'
import buildPlaceholder from '@/components/base/Placeholder'
import RefreshControl from '@/components/base/RefreshControl'
import { useFlashlistProps } from '@/lib/hooks'
import { queryClient } from '@/lib/query'
import { COLORS } from '@/theme/colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlashList } from '@shopify/flash-list'
import { useMutation, useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import * as Haptics from 'expo-haptics'
import { useGlobalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect, useMemo, useState } from 'react'
import { Alert, FlatList, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

export default function ServiceBackupsScreen() {
    const { serviceId, projectId, initialEnvironmentId } = useGlobalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()

    console.log('ServiceBackupsScreen', serviceId, projectId, initialEnvironmentId)

    const navigation = useNavigation()

    const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string | null>(
        initialEnvironmentId || null
    )

    // const [workingKeyName, sethWorkingKeyName] = useState<string | null>(null)

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const currentServiceVolumeId = useMemo(() => {
        const volume = projectQuery.data?.project.volumes.edges.find((edge) =>
            edge.node.volumeInstances.edges.find((edge) => edge.node.serviceId === serviceId)
        )

        const volumeInstance = volume?.node.volumeInstances.edges.find(
            (edge) =>
                edge.node.serviceId === serviceId &&
                edge.node.environmentId === selectedEnvironmentId
        )

        return volumeInstance?.node.id
    }, [projectQuery.data?.project.volumes.edges, serviceId, selectedEnvironmentId])

    const backupsQuery = useQuery({
        queryKey: ['backups', serviceId, projectId, selectedEnvironmentId],
        queryFn: () =>
            fetchVolumeInstanceBackupList({
                id: currentServiceVolumeId!,
            }),
        enabled: !!currentServiceVolumeId,
    })

    const sortedBackups = useMemo(() => {
        return backupsQuery.data?.volumeInstanceBackupList.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        })
    }, [backupsQuery.data?.volumeInstanceBackupList])

    const createBackupMutation = useMutation({
        mutationFn: () =>
            createVolumeBackup({
                volumeInstanceId: currentServiceVolumeId!,
            }),
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Failed to create backup', error.message)
        },
        onSuccess: () => {
            backupsQuery.refetch()
        },
    })

    const projectEnvironments = useMemo(() => {
        return projectQuery.data?.project.environments.edges.map((edge) => edge.node)
    }, [projectQuery.data?.project.environments.edges])

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
            title: 'Backups',
            headerRight: createBackupMutation.isPending
                ? () => (
                      <HeaderItem>
                          <ActivityIndicator sm={true} monochrome={true} />
                      </HeaderItem>
                  )
                : () => (
                      <HeaderTouchableOpacity
                          onPress={() => {
                              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
                              Alert.alert(
                                  'Create Backup',
                                  'Are you sure you want to create a backup?',
                                  [
                                      {
                                          text: 'Cancel',
                                          style: 'cancel',
                                      },
                                      {
                                          text: 'Create',
                                          onPress: () => createBackupMutation.mutate(),
                                      },
                                  ]
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
        })
    }, [navigation, createBackupMutation])

    const Placeholder = useMemo(() => {
        return buildPlaceholder({
            isLoading: backupsQuery.isLoading,
            hasData: (backupsQuery.data?.volumeInstanceBackupList.length || 0) > 0,
            emptyLabel: 'No backups found',
            isError: backupsQuery.isError,
            errorLabel: 'Failed to fetch backups',
        })
    }, [backupsQuery])
    const { overrideProps } = useFlashlistProps(Placeholder)

    return (
        <FlashList
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            data={sortedBackups}
            refreshControl={<RefreshControl onRefresh={backupsQuery.refetch} />}
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
                        extraData={[selectedEnvironmentId, currentServiceVolumeId]}
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
            ListEmptyComponent={Placeholder}
            // extraData={workingKeyName}
            renderItem={({ item: backup, index: backupIndex }) => (
                <BackupRow
                    backup={backup}
                    backgroundColor={backupIndex % 2 === 0 ? COLORS.gray50 : undefined}
                    serviceId={serviceId}
                    projectId={projectId}
                    selectedEnvironmentId={selectedEnvironmentId!}
                    volumeInstanceId={currentServiceVolumeId!}
                />
            )}
        />
    )
}

function BackupRow({
    backup,
    backgroundColor,
    serviceId,
    projectId,
    selectedEnvironmentId,
    volumeInstanceId,
}: {
    backup: Awaited<
        ReturnType<typeof fetchVolumeInstanceBackupList>
    >['volumeInstanceBackupList'][number]
    backgroundColor?: string
    serviceId: string
    projectId: string
    selectedEnvironmentId: string
    volumeInstanceId: string
}) {
    const deleteBackupMutation = useMutation({
        mutationFn: async () =>
            await deleteVolumeBackup({
                id: backup.id,
                volumeInstanceId,
            }),
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['backups', serviceId, projectId, selectedEnvironmentId],
            })
        },
    })

    return (
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
                {format(backup.createdAt, 'MMM d, hh:mm a')} ({backup.name},{' '}
                {backup.referencedMB ? (backup.referencedMB / 1024).toFixed(2) : '—'} GB)
            </Text>
            {deleteBackupMutation.isPending ? (
                <ActivityIndicator sm={true} color={COLORS.red400} />
            ) : (
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            'Delete Backup',
                            'Are you sure you want to delete this backup?',
                            [
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                },
                                {
                                    text: 'Delete',
                                    onPress: () => deleteBackupMutation.mutate(),
                                    style: 'destructive',
                                },
                            ]
                        )
                    }}
                >
                    <Ionicons name="trash-outline" size={20} color={COLORS.red400} />
                </TouchableOpacity>
            )}
        </View>
    )
}
