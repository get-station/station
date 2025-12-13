import { addEnvironmentVariable } from '@/api/mutations'
import { queryClient } from '@/lib/query'
import { COLORS } from '@/theme/colors'
import { useMutation } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
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

export default function AddVariableScreen() {
    const { serviceId, projectId, initialEnvironmentId } = useLocalSearchParams<{
        serviceId: string
        projectId: string
        initialEnvironmentId?: string
    }>()

    const [editableEnvironmentVariable, setEditableEnvironmentVariable] = useState<
        [string, string] | null
    >(null)

    const addEnvironmentVariableMutation = useMutation({
        mutationFn: addEnvironmentVariable,
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
                                value={editableEnvironmentVariable?.[0] || ''}
                                onChangeText={(text) => {
                                    setEditableEnvironmentVariable([
                                        text,
                                        editableEnvironmentVariable?.[1] || '',
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
                                value={editableEnvironmentVariable?.[1] || ''}
                                onChangeText={(text) => {
                                    setEditableEnvironmentVariable([
                                        editableEnvironmentVariable?.[0] || '',
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

                            if (
                                !editableEnvironmentVariable?.[0] ||
                                !editableEnvironmentVariable?.[1]
                            ) {
                                Alert.alert('Please fill in all required fields')
                                return
                            }

                            await addEnvironmentVariableMutation.mutateAsync({
                                projectId,
                                environmentId: initialEnvironmentId!,
                                serviceId,
                                name: editableEnvironmentVariable[0],
                                value: editableEnvironmentVariable[1],
                            })
                            return
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
                            {addEnvironmentVariableMutation.isPending ? 'Creating...' : 'Create'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
