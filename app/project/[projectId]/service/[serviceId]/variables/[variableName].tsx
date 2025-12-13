import { deleteEnvironmentVariable, updateEnvironmentVariable } from '@/api/mutations'
import { fetchServiceVariables } from '@/api/queries'
import ActivityIndicator from '@/components/base/ActivityIndicator'
import { queryClient } from '@/lib/query'
import { COLORS } from '@/theme/colors'
import { useMutation, useQuery } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import {
    Alert,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function VariablesSheet() {
    const { serviceId, projectId, initialEnvironmentId, variableName } = useLocalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
        variableName: string
    }>()

    const navigation = useNavigation()

    const [editableEnvironmentVariable, setEditableEnvironmentVariable] = useState<
        [string, string] | null
    >(null)

    const variablesQuery = useQuery({
        queryKey: ['variables', serviceId, projectId, initialEnvironmentId],
        queryFn: () =>
            fetchServiceVariables({
                id: serviceId,
                projectId,
                environmentId: initialEnvironmentId!,
            }),
        enabled: !!initialEnvironmentId && !!projectId && !!serviceId,
    })

    const editEnvironmentVariableMutation = useMutation({
        mutationFn: updateEnvironmentVariable,
        onSuccess: async () => {
            await queryClient.resetQueries({
                queryKey: ['variables', serviceId, projectId, initialEnvironmentId],
            })
            router.back()
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const mergedVariables = useMemo(() => {
        if (!variablesQuery.data) return null

        const merged = variablesQuery.data.variables

        for (const [key, value] of Object.entries(variablesQuery.data?.unrenderedVariables)) {
            merged[key] = value
        }

        return merged as { [key: string]: string }
    }, [variablesQuery.data])

    const deleteEnvironmentVariableMutation = useMutation({
        mutationFn: deleteEnvironmentVariable,
        onSuccess: async () => {
            await queryClient.resetQueries({
                queryKey: ['variables', serviceId, projectId, initialEnvironmentId],
            })
            router.back()
        },
        onError: (error) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            Alert.alert('Error', error.message)
        },
    })

    const showDeletePrompt = useCallback(
        (env: [string, string]) => {
            const [key] = env

            Alert.alert('Delete Variable', `Are you sure you want to delete "${key}"?`, [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        if (!initialEnvironmentId || !serviceId || !projectId) return

                        await deleteEnvironmentVariableMutation.mutateAsync({
                            projectId,
                            environmentId: initialEnvironmentId,
                            serviceId,
                            name: key,
                        })
                    },
                },
            ])
        },
        [projectId, serviceId, initialEnvironmentId, deleteEnvironmentVariableMutation]
    )

    useEffect(() => {
        if (!mergedVariables) return

        const editableVariable = mergedVariables[variableName]
        if (editableVariable) {
            setEditableEnvironmentVariable([variableName, editableVariable])
        }
    }, [mergedVariables, variableName])

    useLayoutEffect(() => {
        if (!editableEnvironmentVariable) return

        navigation.setOptions({
            title: `Edit ${editableEnvironmentVariable[0]}`,
        })
    }, [editableEnvironmentVariable, navigation])

    if (!editableEnvironmentVariable) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        padding: 24,
                        paddingTop: 16,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1,
                    }}
                >
                    <View style={{ flexDirection: 'column', gap: 20 }}>
                        {/* Name field */}
                        <View style={{ flexDirection: 'column', gap: 4 }}>
                            <Text style={{ fontSize: 14, color: COLORS.gray950 }}>Name</Text>
                            <TextInput
                                style={{
                                    backgroundColor: COLORS.gray200,
                                    borderRadius: 8,
                                    padding: 12,
                                    color: COLORS.gray950,
                                    fontSize: 14,
                                }}
                                value={editableEnvironmentVariable?.[0]}
                                onChangeText={(text) => {
                                    if (!editableEnvironmentVariable) return
                                    setEditableEnvironmentVariable([
                                        text,
                                        editableEnvironmentVariable[1],
                                    ])
                                }}
                                placeholder="Enter name"
                                placeholderTextColor={COLORS.gray900}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoComplete="off"
                                keyboardAppearance="dark"
                            />
                        </View>

                        {/* Value field */}
                        <View style={{ flexDirection: 'column', gap: 4 }}>
                            <Text style={{ fontSize: 14, color: COLORS.gray950 }}>Value</Text>
                            <TextInput
                                style={{
                                    backgroundColor: COLORS.gray200,
                                    borderRadius: 8,
                                    padding: 12,
                                    color: COLORS.gray950,
                                    fontSize: 14,
                                }}
                                value={editableEnvironmentVariable?.[1]}
                                onChangeText={(text) => {
                                    if (!editableEnvironmentVariable) return
                                    setEditableEnvironmentVariable([
                                        editableEnvironmentVariable[0],
                                        text,
                                    ])
                                }}
                                placeholder="Enter value"
                                placeholderTextColor={COLORS.gray900}
                                multiline={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoComplete="off"
                                keyboardAppearance="dark"
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: 16,
                                paddingHorizontal: 16,
                                borderRadius: 8,
                                backgroundColor: COLORS.pink400,
                            }}
                            disabled={false}
                            onPress={async () => {
                                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

                                if (!editableEnvironmentVariable) return

                                if (
                                    editableEnvironmentVariable[1] ===
                                    mergedVariables?.[editableEnvironmentVariable[0]]
                                ) {
                                    router.back()
                                    return
                                }

                                await editEnvironmentVariableMutation.mutateAsync({
                                    projectId,
                                    environmentId: initialEnvironmentId!,
                                    serviceId,
                                    name: editableEnvironmentVariable[0],
                                    value: editableEnvironmentVariable[1],
                                })
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.gray900,
                                    textAlign: 'center',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {editEnvironmentVariableMutation.isPending ? 'Saving...' : 'Save'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showDeletePrompt(editableEnvironmentVariable!)}
                        >
                            <Text style={{ color: COLORS.red500, textAlign: 'center' }}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
