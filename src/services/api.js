import axios from "axios";

const api = axios.create({
    baseURL: "http://creart-scheduler.herokuapp.com/api/scheduler-ws/mails/confirm",
});

export default api;