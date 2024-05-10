import { axiosAPI } from '@/App'

const buttonEndPoint = 'type_of_trainer/'

const buttonService = {
    get: async () => {
        try {
            const { data } = await axiosAPI.get(buttonEndPoint)
            return data
        } catch (error) {
            console.error('Error fetching data')
        }
    },
}

export default buttonService
