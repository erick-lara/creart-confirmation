import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/scheduler-ws/mails/",
});

export default api;