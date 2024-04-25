import httpService from './httpService';

const trainAreaEndPoint = 'train-zone/';

const trainAreaService = {
    get: async () => {
        const { data } = await httpService.get(trainAreaEndPoint);
        return data;
    },
};

export default trainAreaService;
