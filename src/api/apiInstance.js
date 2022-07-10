import axios from 'axios';

const SERVER_URL = 'https://e-commerce-nest-backend.herokuapp.com/api';

export const API = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})

API.interceptors.request.use(req => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
});

API.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response.status === 401) {
            // თუ ვადაგასული თოქენია, წაშალოს
            if (localStorage.getItem('token')) localStorage.removeItem('token');
            // ყველა დანარჩენ შემთხვევაში
            if (window.location.href.indexOf("/login") === -1) { window.location = "/login" }
        } else {
            return Promise.reject(error);
        }
    }
);