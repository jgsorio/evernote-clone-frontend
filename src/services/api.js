import axios from "axios";

const Api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API}/api`,
});

export default Api;