import axios from 'axios';
import configFile from '../config.json';

const http = axios.create({
    baseURL: configFile.apiEndPoint,
});

http.interceptors.response.use(
    (res) => res,
    (error) => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            console.error('Something was wrong. Try it later');
        }

        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
};

export default httpService;
