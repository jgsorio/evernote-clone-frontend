import Api from './api';

const UsersService =  {
    register: async (params) => {
        const response = await Api.post('/register', params);
        if (response.status === 200) {
            return {
                statusCode: response.status,
            }
        }
    },
    login: async (params) => {
        const response = await Api.post('/login', params);
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return {
            statusCode: response.status
        };
    }
}

export default UsersService;