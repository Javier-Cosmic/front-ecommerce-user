import axios from 'axios';

const AxiosUrl = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export default AxiosUrl;