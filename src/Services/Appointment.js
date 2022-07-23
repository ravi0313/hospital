import axios from "axios";


const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:5000' ,//35246 //5000
    baseURL: 'http://localhost:35246', //35246 //5000
    baseURL: 'http://localhost:4300' //35246 //5000
});


http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
}, error => {
    Promise.reject(error);
});

const getAppointment = () => {
    return http.get('api/Appointment/AppointmentHistory');
}
const updateAppointment = (id,dateObj) =>{
    return http.put('api/Appointment/ResheduleAppointment/'+id, dateObj);
}
const removeAppointment = (appointmentId) => {
    return http.delete('api/Appointment/DeleteAppointment/'+appointmentId);
}
const addNewAppointment = appointmentObj => {
    return http.post('api/Appointment/CreateAppointment', appointmentObj);
}

let PatientService = { getAppointment, updateAppointment, removeAppointment, addNewAppointment };
export default PatientService;