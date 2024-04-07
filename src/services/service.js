import axios  from "axios";
let service = axios.create({
baseURL:  'http://localhost:3400/'
})

service.interceptors.request.use(config => {
    config.headers['Content-Type']='application/json';
    config.headers.Authorization = localStorage.getItem('token');
      return config;
});

export default service;