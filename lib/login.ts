import { createClient } from './railway/generated'

export async function checkLoginCredentials(token: string) {
    console.log('checkLoginCredentials')

    try {
        const railway = createClient({
            headers: {
                Authorization: token,
            },
        })

        const response = await railway.query({
            me: {
                name: true,
                id: true,
                username: true,
                workspaces: {
                    id: true,
                    createdAt: true,
                    plan: true,
                },
                isVerified: true,
                registrationStatus: true,
                termsAgreedOn: true,
            },
        })

        return response.me
    } catch (e) {
        const error = e as Error
        console.log('Error checking login credentials', error)
        throw error
    }
}
