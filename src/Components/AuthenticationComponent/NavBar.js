import { Link } from 'react-router-dom';
import AccountIcon from '../../Images/account_circle.png'; 

const NavBar = props => {
    const onLogout = () =>{
        props.handleLogout();
    }
    return <div className='text-uppercase'>
    <nav className="navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between "  >
        <nav className="navbar navbar-light">
            <h2>HOSPITAL MANAGEMENT SYSTEM</h2>
        </nav>
        <ul className="nav" >
            
             {props.isLoggedIn === false &&
            <><li className='nav-item'><Link to={'/'} className="nav-link"> Login </Link></li>
            <li className='nav-item'><Link to={'/Registration'} className="nav-link"> Register </Link></li>
            
            <li className='nav-item'><Link to={'/'} className="nav-link"> Login </Link></li>
            </>
            }
             
            
            {props.role === 'Patient' &&
                        <><li className="nav-item">
                            <Link to='/PatientDashboard' className='nav-link'>Dashboard</Link>
                        </li>
                            <li className="nav-item">
                                <Link to='/bookAppointment' className='nav-link'>Book Appointment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/AppointmentEdit' className='nav-link'>Appointment Change</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Appointment' className='nav-link'>Appointment History</Link>
                            </li>
                            <li className='nav-item'><Link to={'/ProfilePatient'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                        </>
            }
            {props.role === 'Doctor' &&
                        <><li className="nav-item">
                            <Link to='/DoctorDashboard' className='nav-link'>Dashboard</Link>
                        </li>
                            <li className="nav-item">
                                <Link to='/MyAppointment' className='nav-link'>Appointment</Link>
                            </li>
                            <li className='nav-item'><Link to={'/ProfileDoctor'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                        </>
            }
            {props.role === 'Admin' &&
                        <><li className="nav-item">
                            <Link to='/AdminDashboard' className='nav-link'>Dashboard</Link>
                        </li>
                            <li className="nav-item">
                                <Link to='/AddDepartment' className='nav-link'>Create Department</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/DepartmentList' className='nav-link'>Department Details</Link>
                            </li>
                            <li className='nav-item'><Link to={'/AdminProfile'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                        </>
            }
            {props.isLoggedIn === true &&
               <li className='nav-item'><Link to={'/logout'} className="nav-link" onClick={onLogout}> Logout </Link></li>
            }
            
        </ul>
    </nav>
    </div>
}
export default NavBar;