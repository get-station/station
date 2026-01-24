//  https://docs.expo.dev/workflow/configuration/#switching-configuration-based-on-the-environment
//  https://docs.expo.dev/versions/latest/config/app/#backgroundcolor
//  https://docs.expo.dev/versions/latest/config/app/#primarycolor

module.exports = ({ config }) => {
    return {
        ...config,
        primaryColor: '#13111c',
        backgroundColor: '#13111c',

        name: process.env.EXPO_PUBLIC_APP_NAME,
        slug: process.env.EXPO_PUBLIC_APP_SLUG,
        scheme: process.env.EXPO_PUBLIC_APP_SCHEME,
        version: process.env.EXPO_PUBLIC_APP_VERSION,
        owner: process.env.EXPO_PUBLIC_OWNER,

        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'dark',
        newArchEnabled: true,

        ios: {
            appleTeamId: process.env.EXPO_PUBLIC_APPLE_TEAM_ID,
            bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
            supportsTablet: true,
            config: {
                usesNonExemptEncryption: false,
            },
            infoPlist: {
                SKIncludeConsumableInAppPurchaseHistory: true,
            },
            entitlements: {
                'com.apple.security.application-groups': [process.env.EXPO_PUBLIC_WIDGET_GROUP],
            },
        },

        androidNavigationBar: {
            enforceContrast: false,
        },
        android: {
            package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE,
            adaptiveIcon: {
                foregroundImage: './assets/icon.png',
                backgroundColor: '#13111c',
            },
            googleServicesFile: './google-services.json',
            playStoreUrl: process.env.EXPO_PUBLIC_ANDROID_STORE_URL,
            predictiveBackGestureEnabled: false,
        },

        plugins: [
            [
                'expo-build-properties',
                {
                    android: {
                        minSdkVersion: 24,
                        targetSdkVersion: 35,
                    },
                },
            ],
            './plugins/withAndroidHeap',
            [
                './plugins/withAndroidWidget',
                {
                    src: 'targets/widget-android',
                    distPlaceholder: 'com.station.mobile',
                    versions: {
                        glance: '1.1.0',
                        gson: '2.10.1',
                        activityCompose: '1.9.0',
                        composeUi: '1.6.7',
                        material3: '1.2.1',
                        workRuntime: '2.9.0',
                        kotlinExtension: '2.0.0',
                    },
                    widgets: [
                        {
                            receiverName: 'LargeProjectWidgetReceiver',
                            configurationActivity: 'LargeProjectConfigurationActivity',
                            title: 'Station Projects',
                            resource: '@xml/large_project_widget',
                        },
                        {
                            receiverName: 'SmallShortcutWidgetReceiver',
                            configurationActivity: 'SmallShortcutConfigurationActivity',
                            title: 'Station Shortcut',
                            resource: '@xml/small_shortcut_widget',
                        },
                    ],
                },
            ],
            'expo-router',

            [
                'expo-splash-screen',
                {
                    image: './assets/icon.png',
                    resizeMode: 'contain',
                    backgroundColor: '#13111c',
                    imageWidth: 200,
                },
            ],
            'expo-quick-actions',
            [
                '@sentry/react-native/expo',
                {
                    url: 'https://sentry.io/',
                    project: process.env.EXPO_PUBLIC_SENTRY_PROJECT,
                    organization: process.env.EXPO_PUBLIC_SENTRY_ORG,
                },
            ],
            'expo-font',
            'expo-web-browser',
            [
                'expo-alternate-app-icons',
                [
                    {
                        name: 'Arc',
                        ios: './assets/icon-arc.png',
                        android: {
                            foregroundImage: './assets/icon-arc.png',
                        },
                    },
                    {
                        name: 'Text',
                        ios: './assets/icon-text.png',
                        android: {
                            foregroundImage: './assets/icon-text.png',
                        },
                    },
                    {
                        name: 'Door',
                        ios: './assets/icon-door.png',
                        android: {
                            foregroundImage: './assets/icon-door.png',
                        },
                    },
                ],
            ],
            '@bacons/apple-targets',
        ],

        experiments: {
            typedRoutes: true,
        },
        extra: {
            router: {
                origin: false,
            },
            eas: {
                projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
            },
        },
    }
}
