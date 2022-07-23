import React, { Component } from 'react';
import {appointment, department, doctorUser, appUser} from '../../Data';
import AppointmentService from '../../Services/Appointment';

class AppointmentHistory extends Component {
  constructor(){
    super();
    this.state = {
      appointments: [],
      departments: [],
      doctorUsers : [],
      user : []
    };
  }

  componentDidMount(){
    AppointmentService.getAppointment()
        .then(res => {
          this.setState({appointments: res.data});
        }).catch(res => {});
    this.setState({ departments: department, doctorUsers: doctorUser, user: appUser });
  }
  

  filterAppointments(){
    let patientId = this.state.user.map(m => m.Id);
    let filteredAppointments = this.state.appointments.filter((appointment) => appointment.patientId.toString().includes(patientId.toString()));
    return filteredAppointments;
  }

  getDoctorName(DId){
    let name = this.state.doctorUsers.filter((doctor) => doctor.Id.toString().includes(DId)).map((a => a.Firstname));
    return name[0];
  } 

  getCategoryName(departname){
    let category = this.state.departments.filter((department) => department.DepartmentName.includes(departname)).map((a => a.Category));
    return category[0];
  }


  render() {
    let filteredAppointments = this.filterAppointments();
    
    let i = 1;
    return (
      <div> 
      <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
      <h5 className='p-3'>History Of Appointments</h5>
      <table className='table-responsive{-sm|-md|-lg|-xl} '>
        <thead>
          <tr>
            <th>s.no</th>
            <th>Category</th>
            <th>Department</th>
            <th>Doctor Name</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
        {filteredAppointments.map(ap => <tr key={ap.Id}>
              <td>{i++}</td>
              <td>{this.getCategoryName(ap.departmentName)}</td>
              <td>{ap.departmentName}</td>
              <td>{this.getDoctorName(ap.doctorId)}</td>
              <td>{new Date(ap.dateOfAppointment).toLocaleString('en-IN', {day: 'numeric',year: 'numeric', month: 'long'})}</td>
                    </tr>)}
        </tbody>
      </table>
      </div>
    </div>
    );
  }
}

export default AppointmentHistory;