import axios from "axios";

const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:22832/', //22832 //5000
    baseURL: 'http://localhost:4500/' //22832 //5000
});

http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    config.headers['Authorization'] = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZWM2M2QxYy1jMWY2LTQ5OWItYjVlZC0wNWQ3OTQyMzk1Y2UiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEb2N0b3IiLCJleHAiOjE2NTcyNzA4MDgsImlzcyI6Imh0dHA6Ly9hYmMuY29tIiwiYXVkIjoiaHR0cDovL2FiYy5jb20ifQ.0FISS4ZwVKM1gfca1C341ZN50Kt5ZABp9aP4AJAJhrY";
    return config;
}, error => {
    Promise.reject(error);
});

const addNewDeaprtment = departmentObj => {
    return http.post('api/Admin', departmentObj);
}

const getDepartment = () => {
    return http.get('api/Admin');
}

// const updateDepartment = id => {
//     return http.get('api/Admin/'+id);
// }

const removeDepartment = (departmentId) => {
    return http.delete('api/Admin/'+departmentId);
}

let DepartmentService  = {addNewDeaprtment, removeDepartment,getDepartment};
export default DepartmentService;