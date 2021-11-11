import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://murmuring-bayou-16041.herokuapp.com/"
});

export default AxiosInstance;
