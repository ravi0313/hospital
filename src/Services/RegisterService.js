import axios from 'axios';
const http = axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:56760'
});

const doRegister = registerDetails => {
    return http.post('/api/Signup', registerDetails);
}

let RegisterService = {doRegister};
export default RegisterService;