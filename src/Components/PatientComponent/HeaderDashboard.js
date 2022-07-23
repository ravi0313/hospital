import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPatient from './DashboardPatient';
import AppointmentPatient from './AppointmentHistory';
import AccountIcon from '../../Images/account_circle.png'; 
import ProfilePatient from './ProfilePatient';
import BookAppointment from './BookAppointment';
import AppointmentEdit from './AppointmentEdit';
import EditAppointment from './EditAppointment';


class HeaderDashboard extends Component{
    render(){
        return(
            <Router>
                <div className='text-uppercase'>
                    <nav className="navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between "  >
                        <nav class="navbar navbar-light">
                            <span class="navbar-brand mb-0 h1">hospital management system</span>
                        </nav>
                        <ul className="nav" >
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Dashboard </Link></li>
                            <li className='nav-item'><Link to={'/bookAppointment'} className="nav-link">Book Appointment </Link></li>
                            <li className='nav-item'><Link to={'/AppointmentEdit'} className="nav-link"> Appointment Change</Link></li>
                            <li className='nav-item'><Link to={'/Appointment'} className="nav-link"> Appointment History </Link></li>
                            <li className='nav-item'><Link to={'/ProfilePatient'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<DashboardPatient />} />
                        <Route path='/Appointment' element={<AppointmentPatient />} />
                        <Route path='/ProfilePatient' element={<ProfilePatient />} />
                        <Route path='/bookAppointment' element={<BookAppointment />} />
                        <Route path='/AppointmentEdit' element={<AppointmentEdit />} />
                        <Route path='/EditAppointment/:Id' element={<EditAppointment />} />
                    </Routes>
                </div>
            </Router> 
        );
    }
}
  
  export default HeaderDashboard;
  