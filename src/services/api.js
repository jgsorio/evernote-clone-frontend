import axios from "axios";

const Api = axios.create({
    baseURL: 'https://evernote-api-production-624e1b1bd0b1.herokuapp.com//api',
});

export default Api;