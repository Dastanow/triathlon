import axios from 'axios'

const axiosAPI = axios.create({
    baseURL: import.meta.env.VITE_API,
})

axiosAPI.interceptors.request.use(
    async (config) => {
        const userLanguage = localStorage.getItem('selectedLanguage')
        if (userLanguage) {
            config.headers['Accept-Language'] = userLanguage
        }
        return config
    },
    (error) => Promise.reject(error),
)

export { axiosAPI }
