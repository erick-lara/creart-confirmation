import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const api = axios.create({
    baseURL: "https://creart-scheduler.herokuapp.com/api/scheduler-ws/mails/confirm",
});

export default api;