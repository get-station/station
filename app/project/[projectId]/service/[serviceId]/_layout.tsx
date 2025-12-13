import { fetchProject } from '@/api/queries'
import { COLORS } from '@/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from '@tanstack/react-query'
import { Tabs, useGlobalSearchParams } from 'expo-router'
import { useMemo } from 'react'
import { Platform } from 'react-native'

export default function TabsLayout() {
    const { projectId, serviceId } = useGlobalSearchParams<{
        projectId: string
        serviceId: string
    }>()

    const projectQuery = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => fetchProject({ id: projectId }),
        enabled: !!projectId,
    })

    const hasVolume = useMemo(() => {
        if (!projectQuery.data?.project?.volumes?.edges) return false

        const hasVolume = projectQuery.data.project.volumes.edges.some((edge) =>
            edge.node.volumeInstances.edges.some((edge) => edge.node.serviceId === serviceId)
        )

        return hasVolume
    }, [projectQuery.data?.project, serviceId])

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.pink500,
                tabBarStyle: {
                    borderTopColor: COLORS.backgroundSecondary,
                    backgroundColor: COLORS.background,
                    borderTopWidth: Platform.OS === 'ios' ? 1 : 0.2,
                    paddingTop: 8,
                    paddingBottom: 24,
                    height: 84,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Deployments',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name={focused ? 'rocket' : 'rocket-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="backups"
                options={{
                    title: 'Backups',
                    href: hasVolume ? undefined : null,
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name={focused ? 'cloud-download' : 'cloud-download-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="variables"
                options={{
                    title: 'Variables',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name={focused ? 'code-slash' : 'code-slash-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="domains"
                options={{
                    title: 'Domains',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name={focused ? 'link' : 'link-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
