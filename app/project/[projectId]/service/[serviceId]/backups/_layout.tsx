import { COLORS } from '@/theme/colors'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import { Stack } from 'expo-router'
import { Platform } from 'react-native'

export default function ServiceVariablesLayout() {
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
                title: 'Backups',
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}
