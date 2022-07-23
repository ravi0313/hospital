import React, { Component } from 'react';
import {appointment, patientUser , appDoctor} from '../../Data';
import {Link } from 'react-router-dom';
import AppointmentService from '../../Services/Appointment';

class MyAppointment extends Component {
  constructor(){
    super();
    this.state ={
      appointments : [],
      appDoctors : [],
      patientUsers : []
    };
  }

  componentDidMount(){
    this.setState({ appointments : appointment , appDoctors: appDoctor, patientUsers : patientUser } );
    this.setState({appointments: appointment, appDoctors: appDoctor, patientUsers : patientUser } );
  }

  getPatientName(Id){
    let patientName = this.state.patientUsers.filter((patient) => patient.Id.toString().includes(Id.toString()));
    let name = patientName.map(m => m.Firstname);
    return name[0]; 
  }

  filterAppointments(){
    let doctorId = this.state.appDoctors.map(m => m.Id);
    let filteredAppointments = this.state.appointments.filter((appointment) => appointment.doctorId.toString().includes(doctorId.toString()));
    return filteredAppointments;
  }

  render() {
    let filterAppointments = this.filterAppointments();
    console.log(filterAppointments);
    let i = 1;
    return (
        <div>
          <div className='card mx-auto mt-5' style={{width: "75%"}} >
          <h5 className='p-3'>My Appointments</h5>
          <table className='table-responsive{-sm|-md|-lg|-xl} '>
        <thead>
          <tr>
                <th>s.no</th>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Consult</th>
          </tr>
        </thead>
        <tbody>
          {
            filterAppointments.map(ap => <tr>
              <td>{i++}</td>
              <td>{this.getPatientName(ap.patientId)}</td>
              <td>{new Date(ap.DateOfAppointment).toLocaleString('en-IN', {day: 'numeric',year: 'numeric', month: 'long',}) }</td>
              <td><button type="button" class="btn btn-warning"><Link to={'/Consult/'+ap.patientId} className='btn'>Consult</Link></button></td>
            </tr>)
          }
        </tbody>
      </table>
          </div>
        </div>
    );
  }
}

export default MyAppointment ;
