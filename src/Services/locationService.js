import httpService from './httpService'

const locationapi = 'contacts/'

const locationapiSer = {
    get: async () => {
        const {data} = await  httpService.get(locationapi)
        return data
},
};

export default locationapiSer;