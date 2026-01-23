import { usePersistedStore } from '@/store/persisted'
import * as Sentry from '@sentry/react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { usePlacement } from 'expo-superwall'
import { Alert } from 'react-native'

export default function App() {
    const { registerPlacement } = usePlacement()
    const { showPaywall, showLfo1 } = useLocalSearchParams<{
        showPaywall?: string
        showLfo1?: string
    }>()

    const hasSeenOnboarding = usePersistedStore((state) => state.hasSeenOnboarding)
    const connections = usePersistedStore((state) => state.connections)
    const currentConnection = usePersistedStore((state) => state.currentConnection)

    if (connections.length === 0) {
        return <Redirect href="/login" />
    }

    if (!currentConnection) {
        try {
            usePersistedStore.setState({ currentConnection: connections[0] })
            throw new Error('Found connections but not current connection id.')
        } catch (error) {
            Sentry.captureException(error)
        }
    }

    if (showPaywall) {
        registerPlacement({
            placement: 'TapWidget',
            feature: () => {
                Alert.alert(
                    'Congrats!',
                    'You can now go to your homescreen and search for "Station" widgets'
                )
            },
        }).catch((error) => {
            Sentry.captureException(error)
            console.error('Error registering TapWidget', error)
            Alert.alert('Error', 'Something went wrong, please try again.')
        })
    }

    if (showLfo1) {
        registerPlacement({
            placement: 'LifetimeOffer_1_Show',
            feature: () => {
                Alert.alert('Congrats!', 'You unlocked lifetime access to Station.')
            },
        }).catch((error) => {
            console.error('Error registering LifetimeOffer_1_Show', error)
            Sentry.captureException(error)
        })
    }

    return <Redirect href="/home" />
}
