import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BACK_URL
});

export default api