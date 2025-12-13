import { fetchProject } from '@/api/queries'
import { COLORS } from '@/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from '@tanstack/react-query'
import { useGlobalSearchParams } from 'expo-router'
import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs'
import { useMemo } from 'react'

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
        <NativeTabs disableTransparentOnScrollEdge={true} tintColor={COLORS.pink500}>
            <NativeTabs.Trigger name="home">
                <Label>Deployments</Label>
                <Icon src={<VectorIcon family={Ionicons} name="rocket" />} />
            </NativeTabs.Trigger>
            {hasVolume && (
                <NativeTabs.Trigger name="backups">
                    <Label>Backups</Label>
                    <Icon src={<VectorIcon family={Ionicons} name="cloud-download" />} />
                </NativeTabs.Trigger>
            )}
            <NativeTabs.Trigger name="variables">
                <Label>Variables</Label>
                <Icon src={<VectorIcon family={Ionicons} name="code-slash" />} />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="domains">
                <Label>Domains</Label>
                <Icon src={<VectorIcon family={Ionicons} name="link" />} />
            </NativeTabs.Trigger>
        </NativeTabs>
    )
}
