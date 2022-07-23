import axios from 'axios';
const http = axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:56760/'
});

const doLogin = loginCredentails => {
    return http.post('/api/Signin', loginCredentails);
}

let LoginService = {doLogin};
export default LoginService;