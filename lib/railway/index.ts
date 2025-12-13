import { usePersistedStore } from '@/store/persisted'
import { createClient } from './generated'

const railway = ({ connectionId }: { connectionId?: string } = {}) => {
    const currentConnection = connectionId
        ? usePersistedStore
              .getState()
              .connections.find((connection) => connection.id === connectionId)
        : usePersistedStore.getState().currentConnection

    const apiToken = currentConnection?.apiToken

    if (!apiToken) {
        throw new Error('No API token found')
    }

    return createClient({
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    })
}

export default railway
