import { axiosAPI } from '@/App';

const locationapi = 'contacts/'

const locationapiSer = {
    get: async () => {
        const {data} = await axiosAPI.get(locationapi)
        return data
},
};

export default locationapiSer;