import React, { Component } from 'react';
import { doctorConsultant , appUser} from '../../Data';


class HealthDetial extends Component {
  constructor(){
    super();
    this.state = {
      reportDetails : [],
      user: []
    };
  }

  filteredReport(){
    let patientId = this.state.user.map(m => m.Id);
    let reports = this.state.reportDetails.filter((rep) => rep.PatientId.toString().includes(patientId.toString()));
    return reports;
  }

  componentDidMount(){
    this.setState({ reportDetails: doctorConsultant, user: appUser});
  }
  render() {
    let filteredReports = this.filteredReport();
    let i =1;
    return (
        <div>
          {filteredReports.length === 0 && <h6 className='text-warning'>No more Appointments consulted , Please Book Appointment and Consult a Doctor </h6>}
          <table className='table-responsive{-sm|-md|-lg|-xl} '>
              <thead className='text-uppercase'>
                  <th className='px-5 p-4' style={{letterSpacing:"2px"}} >Health Detials</th>
              </thead>
                <tbody>
                  <tr>
                      <th>S.No</th>
                      <th  scope="col">Problem</th>
                      <th className='px-5'  scope="col">Diagnosis</th>
                      <th className='px-5' scope="col">Treatment</th>
                      <th className='px-5' scope="col">Prescription</th>
                  </tr>
                  {
                    filteredReports.map((re) => <tr key={re.Id}>
                    <td>{i++}</td>
                    <td>{re.Problem}</td>
                    <td>{re.Diagnosis}</td>
                    <td>{re.Treatment}</td>
                    <td>{re.Prescription}</td>
                  </tr>
                  )
                
                }
                  
              </tbody>
          </table>
        </div>
    );
  }
}

export default HealthDetial;