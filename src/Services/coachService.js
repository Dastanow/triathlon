import { axiosAPI } from '@/App'

const coachEndPoint = 'trainer/'

const coachService = {
    get: async () => {
        try {
            const { data } = await axiosAPI.get(coachEndPoint)
            return data
        } catch (error) {
            console.error('Error fetching data')
        }
    },
}

export default coachService
