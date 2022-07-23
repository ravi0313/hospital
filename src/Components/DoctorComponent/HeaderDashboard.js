import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardDoctor from './DashboardDoctor';
import ProfileDoctor from './ProfileDoctor';
import AccountIcon from '../../Images/account_circle.png'; 
import MyAppointment from './MyAppointment';
import ConsultForm from './Consult';


class HeaderDashboard extends Component {
    render (){
        return(
            <Router>
                <div className='text-uppercase'>
                    <nav className='navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between'>
                    <nav class="navbar navbar-light">
                            <span className="navbar-brand mb-0 h1">hospital management system</span>
                        </nav>
                        <ul className="nav" >
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Dashboard </Link></li>
                            
                            <li className='nav-item'><Link to={'/MyAppointment'} className="nav-link">Appointment </Link></li>
                            
                            <li className='nav-item'><Link to={'/ProfileDoctor'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                       
                        </ul> 
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<DashboardDoctor />} />
                        
                        <Route path='/ProfileDoctor' element={<ProfileDoctor />} />
                        
                        <Route path='/MyAppointment' element={<MyAppointment />} />
                        
                        <Route path='/consult/:Id' element={<ConsultForm /> } />
                    </Routes>
                </div>
                
                </Router>
        )
    }
}
export default HeaderDashboard;