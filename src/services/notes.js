import Api from './api';

const user = JSON.parse(localStorage.getItem('user'));

const NotesService = {
    all: () => Api.get('/notes', {
        headers: {
            'Authorization': user.token,
        }
    }),
    show: (id) => Api.get(`/notes/${id}`, {
        headers: {
            'Authorization': user.token,
        }
    }),

    create: (params) => Api.post(`/notes`, params, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': user.token,
        }
    }),

    update: (id, params) => Api.put(`/notes/${id}`, params, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': user.token,
        }
    }),

    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: {
            'Authorization': user.token,
        }
    })
}

export default NotesService;