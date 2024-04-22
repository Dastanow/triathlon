import httpService from './httpService';

const coachEndPoint = 'trainer/';

const coachService = {
    get: async () => {
        const { data } = await httpService.get(coachEndPoint);
        return data;
    },
};

export default coachService;
