import { usePersistedStore } from '@/store/persisted'
import { COLORS } from '@/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { type OnboardingFeature, OnboardingView } from 'expo-onboarding'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const FEATURES: OnboardingFeature[] = [
    {
        title: 'Manage Railway',
        description: 'See logs, browse deployments, and check on your services anywhere you go.',
        systemImage: 'server.rack',
        icon: () => <Ionicons name="server" size={42} color={COLORS.pink600} />,
    },
    {
        title: 'Open Source',
        description:
            'You are using Open Source Software (OSS) crafted by container-loving people. Give it a star!',
        systemImage: 'star.fill',
        icon: () => <Ionicons name="star" size={42} color={COLORS.pink600} />,
        links: [
            {
                sectionText: 'Give it a star!',
                sectionUrl: 'https://github.com/get-station/station',
            },
        ],
    },
    {
        title: 'Local Only',
        description:
            'Your data never leaves the app, this includes your API token which is locally stored.',
        systemImage: 'shield.fill',
        icon: () => <Ionicons name="shield" size={42} color={COLORS.pink600} />,
    },
]

export default function OnboardScreen() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                paddingTop: 100,
            }}
        >
            <OnboardingView
                features={FEATURES}
                icon={require('@/assets/icon.png')}
                appName="Station"
                tintColor={COLORS.pink600}
                titleStyle={{}}
                featureTitleStyle={{
                    color: COLORS.gray950,
                }}
                featureDescriptionStyle={{
                    color: COLORS.gray900,
                }}
                ButtonComponent={() => (
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            maxWidth: '80%',
                            backgroundColor: COLORS.pink600,
                            padding: 10,
                            borderRadius: 12.5,
                        }}
                        onPress={() => {
                            usePersistedStore.setState({ hasSeenOnboarding: true })
                            router.dismissTo('/')
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.gray950,
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 600,
                                paddingTop: 4,
                                paddingBottom: 6,
                            }}
                        >
                            Let's go
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
