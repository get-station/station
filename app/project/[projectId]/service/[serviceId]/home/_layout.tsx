import { COLORS } from '@/theme/colors'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import { Stack } from 'expo-router'
import { Platform } from 'react-native'

export default function ServiceHomeLayout() {
    // const qc = useQueryClient()

    // qc.invalidateQueries({
    //     queryKey: ['user'],
    // })

    return (
        <Stack
            screenOptions={{
                headerLargeTitle: true,
                headerTransparent: Platform.OS === 'ios',
                headerBlurEffect: isLiquidGlassAvailable() ? undefined : 'regular',
                headerLargeTitleStyle: {
                    color: COLORS.gray950,
                },
                headerTintColor: COLORS.gray950,
                headerStyle: isLiquidGlassAvailable()
                    ? undefined
                    : {
                          backgroundColor: COLORS.background,
                      },
                contentStyle: {
                    backgroundColor: COLORS.background,
                },
                title: 'Deployments',
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}
