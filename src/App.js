import './App.css';
import Main from './Components/Main';
import {BrowserRouter as Router} from 'react-router-dom';
//import HeaderDashboard from './Components/PatientComponent/HeaderDashboard';
//import HeaderDashboard from './Components/DoctorComponent/HeaderDashboard';
import HeaderDashboard from './Components/AdminComponent/AdminHeader';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Main />
      </Router>
       */}
       <HeaderDashboard/>
    </div>
  );
}

export default App;
