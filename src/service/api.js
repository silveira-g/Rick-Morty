import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_BASE_URL
})

export default api