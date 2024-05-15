import { axiosAPI } from '@/App'

const commentEndPoint = 'review/'

const commentService = {
    get: async () => {
        try {
            const { data } = await axiosAPI.get(commentEndPoint)
            return data
        } catch (error) {
            console.error('Error fetching data')
        }
    },
}

export default commentService
