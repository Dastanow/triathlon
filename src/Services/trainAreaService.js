import { axiosAPI } from '@/App'

const trainAreaEndPoint = 'train-zone/'

const trainAreaService = {
    get: async () => {
        try {
            const { data } = await axiosAPI.get(trainAreaEndPoint)
            return data
        } catch (error) {
            console.error('Error fetching data')
        }
    },
}

export default trainAreaService
