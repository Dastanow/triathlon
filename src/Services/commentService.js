import httpService from './httpService';

const commentEndPoint = 'review/';

const commentService = {
    get: async () => {
        const { data } = await httpService.get(commentEndPoint);
        return data;
    },
};

export default commentService;
