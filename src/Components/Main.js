import {Link , useNavigate , Route , Routes, Router } from 'react-router-dom';
import {useState} from 'react';
import NavBar from "./AuthenticationComponent/NavBar";
import LoginService from '../Services/Auth';
import Login from './AuthenticationComponent/Login';
import Registration from './AuthenticationComponent/Registration';
import DashboardPatient from './PatientComponent/DashboardPatient';
import AppointmentPatient from './PatientComponent/AppointmentHistory';
import ProfilePatient from './PatientComponent/ProfilePatient';
import BookAppointment from './PatientComponent/BookAppointment';
import AppointmentEdit from './PatientComponent/AppointmentEdit';
import EditAppointment from './PatientComponent/EditAppointment';
import DashboardDoctor from './DoctorComponent/DashboardDoctor';
import ProfileDoctor from './DoctorComponent/ProfileDoctor';
import MyAppointment from './DoctorComponent/MyAppointment';
import ConsultForm from './DoctorComponent/Consult';
import {appUser} from '../Data';
import AdminDashboard  from './AdminComponent/AdminDashboard';
import CreateDepartment from './AdminComponent/AddDepartment';
import DepartmentList from './AdminComponent/DepartmentList';
import consultantDetails from './AdminComponent/consultantDetails';
import AdminProfile from './AdminComponent/AdminProfile';

function Main(){
    const [userDetails, setUserDetails] = useState({
    user: [],
    user: appUser,
    isLoggedIn: false
  });

    const nav = useNavigate();

    const handleLogin = credentials => {
        LoginService.doLogin(credentials).then(obj => {
          setUserDetails({ user: obj.data, isLoggedIn: true });
          window.localStorage.setItem('apitoken', obj.data.token);
          alert("Logged In");
          if(userDetails.user.role === "Patient" ){
            nav('/PatientDashboard');
          }
          else {
            nav('/DoctorDashboard');
          }

          alert("Loged In");
          if(userDetails.user.role === "Patient" ){
            nav('/PatientDashboard');
          }
          else{
            nav('/DoctorDashboard');
          }
        }).catch(obj => {
          alert(obj.response.statusText);
        });
      }
    const handleLogout = () => {
        const obj = {
          user: [],
          isLoggedIn: false
        };
        setUserDetails(obj);
        window.localStorage.removeItem('apitoken');
        nav('/');
      }

      //<NavBar role={userDetails.user.role} isLoggedIn={userDetails.isLoggedIn} handleLogout={handleLogout} /> 

    return(
        <div>
           <NavBar role={userDetails.user.role} isLoggedIn={userDetails.isLoggedIn} handleLogout={handleLogout} /> 
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Routes>
                            <Route exact path='/' element={<Login handleLogin={handleLogin} />} />
                            <Route path='/Registration' element={<Registration />} />
                            <Route path='/PatientDashboard' element={<DashboardPatient loggedUser = {userDetails} />} />
                            <Route path='/Appointment' element={<AppointmentPatient loggedUser = {userDetails}  />} />
                            <Route path='/ProfilePatient' element={<ProfilePatient  loggedUser = {userDetails.user} />} />
                            <Route path='/bookAppointment' element={<BookAppointment loggedUser = {userDetails}  />} />
                            <Route path='/AppointmentEdit' element={<AppointmentEdit loggedUser = {userDetails}  />} />
                            <Route path='/EditAppointment/:Id' element={<EditAppointment loggedUser = {userDetails} />} />
                            <Route path='/DoctorDashboard' element={<DashboardDoctor loggedUser = {userDetails.user}  />} />
                            <Route path='/ProfileDoctor' element={<ProfileDoctor loggedUser = {userDetails.user}  />} />           
                            <Route path='/MyAppointment' element={<MyAppointment />} />                     
                            <Route path='/consult/:Id' element={<ConsultForm  /> } />
                            <Route path='/AdminDashboard' element={<AdminDashboard /> } />
                            <Route path='/AdminProfile' element={<AdminProfile />} />                  
                            <Route path='/DepartmentList' element={<DepartmentList />} /> 
                            <Route path='/AddDepartment' element={<CreateDepartment/>} />
                            <Route path='/PatientDashboard' element={<DashboardPatient  />} />
                            <Route path='/Appointment' element={<AppointmentPatient  />} />
                            <Route path='/ProfilePatient' element={<ProfilePatient  />} />
                            <Route path='/bookAppointment' element={<BookAppointment  />} />
                            <Route path='/AppointmentEdit' element={<AppointmentEdit  />} />
                            <Route path='/EditAppointment/:Id' element={<EditAppointment />} />
                            <Route path='/DoctorDashboard' element={<DashboardDoctor  />} />
                            <Route path='/ProfileDoctor' element={<ProfileDoctor  />} />           
                            <Route path='/MyAppointment' element={<MyAppointment />} />                     
                            <Route path='/consult/:Id' element={<ConsultForm  /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main ;