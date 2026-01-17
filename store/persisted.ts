import { mmkvStorage } from '@/lib/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface Connection {
    id: string
    apiToken: string
    currentWorkspaceId: string | null
}

interface PersistedStoreState {
    connections: Connection[]
    currentConnection: Connection | null
    switchConnection: ({
        connectionId,
        workspaceId,
    }: {
        connectionId: string
        workspaceId?: string
    }) => void
    removeConnection: (connectionId: string) => void
    addConnection: (connection: Connection) => void

    countToReviewPrompt: number
    setCountToReviewPrompt: (count: number) => void
    lastShownReviewPrompt: number | null
    setLastShownReviewPrompt: (ts: number) => void

    acknowledgedSwipeLeft: boolean
    acknowledgeSwipeLeft: () => void

    hasSeenOnboarding: boolean

    installationTs: number
}

export const usePersistedStore = create<PersistedStoreState>()(
    persist(
        (set, get) => ({
            connections: [],
            currentConnection: null,
            removeConnection: (connectionId: string) => {
                const newConnections = get().connections.filter((c) => c.id !== connectionId)

                set({
                    connections: newConnections,
                    currentConnection: newConnections[0] || null,
                })
            },
            addConnection: (connection: Connection) => {
                set((state) => ({ connections: [...state.connections, connection] }))
            },
            switchConnection: ({
                connectionId,
                workspaceId,
            }: { connectionId: string; workspaceId?: string }) => {
                const state = get()

                const connection = state.connections.find((c) => c.id === connectionId)
                if (!connection) return

                const newConnection = {
                    ...connection,
                    currentWorkspaceId: workspaceId || connection.currentWorkspaceId,
                }

                const newConnections = state.connections.map((c) =>
                    c.id === newConnection.id ? newConnection : c
                )

                set({
                    connections: newConnections,
                    currentConnection: newConnection,
                })

                // queryClient.invalidateQueries()
            },

            countToReviewPrompt: 12,
            setCountToReviewPrompt: (count: number) => {
                set({ countToReviewPrompt: count })
            },
            lastShownReviewPrompt: null,
            setLastShownReviewPrompt: (ts: number) => {
                set({ lastShownReviewPrompt: ts })
            },

            acknowledgedSwipeLeft: false,
            acknowledgeSwipeLeft: () => {
                set({ acknowledgedSwipeLeft: true })
            },

            hasSeenOnboarding: false,

            installationTs: Date.now(),
        }),
        {
            name: 'station-persisted-store',
            storage: createJSONStorage(() => mmkvStorage),
            version: 1,
        }
    )
)
