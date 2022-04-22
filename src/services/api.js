import axios from "axios";

const api = axios.create({
    baseURL: "https://creart-scheduler.herokuapp.com/api/scheduler-ws/mails/confirm",
});

export default api;