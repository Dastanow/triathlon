import httpService from './httpService'

const buttonEndPoint = 'type_of_trainer/'

const buttonService = {
    get: async () => {
        const { data } = await httpService.get(buttonEndPoint)
        return data
    },
}

export default buttonService
