import axios from "axios";

// backend api connection
const BASE_URL = "http://localhost:5014/api/v1";
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;

// response time of the backend server
axiosInstance.defaults.timeout = 10000;

export default axiosInstance;