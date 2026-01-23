import { queryClient } from '@/lib/query'
import { mmkvStorage } from '@/lib/storage'
import { COLORS } from '@/theme/colors'
import * as Sentry from '@sentry/react-native'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { isRunningInExpoGo } from 'expo'
import { isLiquidGlassAvailable } from 'expo-glass-effect'
import { activateKeepAwakeAsync } from 'expo-keep-awake'
import { useQuickActionRouting } from 'expo-quick-actions/router'
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router'
import { SuperwallProvider } from 'expo-superwall'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const navigationIntegration = Sentry.reactNavigationIntegration({
    enableTimeToInitialDisplay: !isRunningInExpoGo(),
})

Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
    // biome-ignore lint/correctness/noUndeclaredVariables: <>
    environment: __DEV__ ? 'development' : 'production',
    integrations: [navigationIntegration],
    enableNativeFramesTracking: !isRunningInExpoGo(),
})

const mmkvPersister = createSyncStoragePersister({
    storage: mmkvStorage,
})

// const clearStorage = () => {
//     mmkvStorage.clearAll()
//     queryClient.clear()
// }

function RootLayout() {
    const commonHeaderStyle = {
        headerTransparent: Platform.OS === 'ios',
        headerStyle: isLiquidGlassAvailable()
            ? undefined
            : {
                  backgroundColor: COLORS.background,
              },
        headerTintColor: COLORS.gray950,
        headerShadowVisible: false,
    }

    const commonContentStyle = {
        contentStyle: {
            backgroundColor: COLORS.background,
        },
    }

    useQuickActionRouting()
    const ref = useNavigationContainerRef()

    useEffect(() => {
        if (ref?.current) {
            navigationIntegration.registerNavigationContainer(ref)
        }
    }, [ref])

    useEffect(() => {
        SplashScreen.hide()
        activateKeepAwakeAsync()
    }, [])

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView>
                <KeyboardProvider statusBarTranslucent={true} navigationBarTranslucent={true}>
                    <SuperwallProvider
                        apiKeys={{
                            ios: process.env.EXPO_PUBLIC_IOS_SUPERWALL_API_KEY,
                            android: process.env.EXPO_PUBLIC_ANDROID_SUPERWALL_API_KEY,
                        }}
                    >
                        <PersistQueryClientProvider
                            client={queryClient}
                            persistOptions={{
                                persister: mmkvPersister,
                                dehydrateOptions: {
                                    shouldDehydrateQuery: (query) => query.state.data !== undefined,
                                },
                            }}
                        >
                            <Stack
                                screenOptions={{
                                    navigationBarHidden: true,
                                }}
                            >
                                <Stack.Screen
                                    name="index"
                                    options={{
                                        title: '',
                                        headerShown: false,
                                        gestureEnabled: false,
                                        contentStyle: {
                                            backgroundColor: COLORS.background,
                                        },
                                    }}
                                />

                                <Stack.Screen
                                    name="onboard/index"
                                    options={{
                                        headerShown: false,
                                        gestureEnabled: false,
                                        animation: 'none',
                                    }}
                                />

                                <Stack.Screen
                                    name="login/index"
                                    options={{
                                        title: 'Login',
                                        headerShown: false,
                                        // gestureEnabled: false,
                                        // animation: 'none',
                                        presentation: 'modal',
                                        ...commonContentStyle,
                                        autoHideHomeIndicator: true,
                                    }}
                                />

                                <Stack.Screen
                                    name="home/index"
                                    options={{
                                        title: 'Home',
                                        headerShown: false,
                                        ...commonHeaderStyle,
                                        ...commonContentStyle,
                                        autoHideHomeIndicator: true,
                                    }}
                                />

                                <Stack.Screen
                                    name="notifications/index"
                                    options={{
                                        title: 'Notifications',
                                        headerShown: true,
                                        ...commonHeaderStyle,
                                        ...commonContentStyle,
                                    }}
                                />

                                <Stack.Screen
                                    name="project/[projectId]/service/[serviceId]"
                                    options={{
                                        title: 'Service',
                                        headerShown: false,
                                        ...commonHeaderStyle,
                                        ...commonContentStyle,
                                    }}
                                />

                                {/* <Stack.Screen
                            name="project/[projectId]/[environmentId]/service/[serviceId]"
                            options={{
                                title: 'Service',
                                headerShown: false,
                                ...commonHeaderStyle,
                                ...commonContentStyle,
                            }}
                        /> */}

                                <Stack.Screen
                                    name="project/[projectId]/logs"
                                    options={{
                                        title: 'Logs',
                                        headerLargeTitle: true,
                                        ...commonHeaderStyle,
                                        ...commonContentStyle,
                                        autoHideHomeIndicator: true,
                                    }}
                                />
                                <Stack.Screen
                                    name="project/[projectId]/usage"
                                    options={{
                                        title: 'Usage',
                                        headerLargeTitle: true,
                                        ...commonHeaderStyle,
                                        ...commonContentStyle,
                                    }}
                                />
                            </Stack>
                        </PersistQueryClientProvider>
                                    <Stack.Screen
                                        name="icons/index"
                                        options={{
                                            title: 'App Icon',
                                            ...commonHeaderStyle,
                                            ...commonContentStyle,
                                            autoHideHomeIndicator: true,
                                        }}
                                    />
                    </SuperwallProvider>
                </KeyboardProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

export default RootLayout
