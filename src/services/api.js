import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/scheduler-ws/mails/confirm?token=",
});

export default api;