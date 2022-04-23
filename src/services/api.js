import axios from "axios";

const api = axios.create({
    baseURL: "https://creart-scheduler.azurewebsites.net/api/scheduler-ws/mails/confirm",
});

export default api;