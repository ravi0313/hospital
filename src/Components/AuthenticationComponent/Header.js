import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useNavigate } from 'react-router-dom';
import Login from "./Login";
import LoginService from '../../Services/Auth';

const Header = props => {

    const [userDetails, setUserDetails] = useState({
        user: [],
        isLoggedIn: false
      });

    //const nav = useNavigate();
    const handleLogin = credentials => {
    LoginService.doLogin(credentials).then(obj => {
      setUserDetails({ user: obj.data, isLoggedIn: true });
      window.localStorage.setItem('apitoken', obj.data.token);
      alert("Loged In");
      //nav('/trainers');
    }).catch(obj => {
      alert(obj.response.statusText);
    });
  }

  console.log(userDetails);
    
        return(
        <Router>
                <div className='text-uppercase'>
                    <nav className="navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between "  >
                        <nav className="navbar navbar-light">
                        <span class="navbar-brand mb-0 h1">hospital management system</span>
                        </nav>
                        <ul className="nav" >
                            {props.isLoggedIn === false &&
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Login </Link></li>
                            }
                            <li className='nav-item'><Link to={'/Dashboard'} className="nav-link"> Dashboard </Link></li>
                            <li className='nav-item'><Link to={'/Registration'} className="nav-link">Registration </Link></li>
                            {props.isLoggedIn === true &&
                               <li className='nav-item'><Link to={'/logout'} className="nav-link" onClick={onLogout}> Logout </Link></li>
                            }
                            
                        </ul>
                            {/* <li className='nav-item'><Link to={'/Registration'} className="nav-link">Registration </Link></li>
                        </ul> 
                            <li className='nav-item'><Link to={'/'} className="nav-link">Registration </Link></li>
                        </ul>  */}
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Login handleLogin={handleLogin} />} />
                    </Routes>
                    </div>
                </Router>    
        );
    }
  
  export default Header;
  