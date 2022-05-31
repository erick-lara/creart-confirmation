import axios from "axios";

const api = axios.create({
    baseURL: "http://ec2-54-233-130-250.sa-east-1.compute.amazonaws.com:8080/api/social-ws/admin/confirm",
});

export default api;