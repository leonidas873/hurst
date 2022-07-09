import axios from 'axios'

const SERVER_URL = 'https://e-commerce-nest-backend.herokuapp.com/api'

export const loginAPI = async (data) => {
    try {
        const results = await axios.post(`${SERVER_URL}/auth/login`, data);
        console.log(results.data);
        localStorage.setItem("user", JSON.stringify(results.data.username));
        localStorage.setItem("token", results.data.access_token);
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const registerAPI = async (data) => {
    try {
        const results = await axios.post(`${SERVER_URL}/auth/register`, data);
        localStorage.setItem("user", JSON.stringify(results.data.username));
        localStorage.setItem("token", results.data.access_token);
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};