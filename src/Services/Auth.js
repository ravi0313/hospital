import axios from 'axios';
const http = axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:56760',
    baseURL: 'http://localhost:4200'
});

http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
}, error => {
    Promise.reject(error);
});

const doLogin = loginCredentails => {
    return http.post('/api/Signin', loginCredentails);
}

const doRegister = SignupCredentials => {
    return http.post('/api/Signup', SignupCredentials);
}

let LoginService = {doLogin , doRegister};
//let LoginService = {doLogin};
export default LoginService;