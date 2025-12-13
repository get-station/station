import { fetchApiStatus } from '@/api/queries'
import { COLORS } from '@/theme/colors'
import { useQuery } from '@tanstack/react-query'
import * as Haptics from 'expo-haptics'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

export default function ApiStatus() {
    const apiStatusQuery = useQuery({
        queryKey: ['apiStatus'],
        queryFn: fetchApiStatus,
    })

    const isOperational = useMemo(() => apiStatusQuery?.data?.isStable, [apiStatusQuery.data])

    if (!apiStatusQuery.data) {
        return null
    }

    return (
        <TouchableOpacity
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                try {
                    Linking.openURL('https://status.railway.com')
                } catch {
                    Alert.alert('Error', 'Could not open link, please try again.')
                }
            }}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}
        >
            <View
                style={{
                    width: 10,
                    height: 10,
                    backgroundColor: isOperational ? COLORS.pink500 : COLORS.red500,
                    borderRadius: 5,
                }}
            />
            <Text
                style={{
                    color: isOperational ? COLORS.pink500 : COLORS.red500,
                }}
            >
                {isOperational ? 'All systems operational' : 'Degraded service'}
            </Text>
        </TouchableOpacity>
    )
}
