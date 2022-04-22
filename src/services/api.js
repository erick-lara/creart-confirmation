import axios from "axios";

const api = axios.create({
    baseURL: "https://creart-scheduler.herokuapp.com/api/scheduler-ws/mails/confirm",
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
});

export default api;