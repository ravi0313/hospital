import React, { Component } from 'react';
import { appointment, doctorUser, appUser} from '../../Data';
import { Link } from 'react-router-dom';
import AppointmentService from '../../Services/Appointment';

class AppointmentEdit extends Component {
  constructor(){
    super();
    this.state = {
      appointments: [],
      doctorUsers : [],
      user : []
    };
  }

  componentDidMount(){
    AppointmentService.getAppointment()
      .then(res => {
        this.setState({appointments: res.data });
      })
      .catch(res => {});
    this.setState({ doctorUsers: doctorUser, user: appUser });
  }

  filterAppointments(){
    let userId = this.state.user.map(a => a.Id);
    let filteredAppointments = this.state.appointments.filter((appointment) => appointment.patientId.toString().includes(userId.toString()));
    return filteredAppointments;
  }

  getDoctorName(DId){
    let name = this.state.doctorUsers.filter((doctor) => doctor.Id.toString().includes(DId)).map((a => a.Firstname));
    return name[0];
  } 

  componentDidUpdate(){
    AppointmentService.getAppointment()
      .then(res => {
        this.setState({appointments: res.data });
      })
      .catch(res => {});
  }

  handleDelete(event){
    event.preventDefault();
    const result = window.confirm('Are you sure you want to delete : '+ event.target.value);
    if(result){
        //props.onProductDelete(props.prod.id);
        AppointmentService.removeAppointment(event.target.value)
           .then(res => {
             alert("deleted Successfully");
            })
           .catch(res => {alert("Something Went Wrong")});
    }
}

  render() {
    //console.log(this.state.appointments);
    let filteredAppointments = this.filterAppointments();
    let i=1;
    return (
        <div> 
          <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
          <h5 className='p-3'> List of Appointments</h5>
          <table className='table-responsive{-sm|-md|-lg|-xl} '>
            <thead>
              <tr>
                <th>s.no</th>
                <th>Department</th>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
                <th>Change Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredAppointments.map((ap) => <tr key={ap.id}>
                  <td>{i++}</td>
                  <td>{ap.departmentName}</td>
                  <td>{this.getDoctorName(ap.doctorId)}</td>
                  <td>{new Date(ap.dateOfAppointment).toLocaleString('en-IN', {day: 'numeric',year: 'numeric', month: 'long'})}</td>
                  <td><button type="button" class="btn btn-warning"><Link to={'/EditAppointment/'+ap.id} className='btn'>Edit</Link></button></td>
                  <td><button type="button" class="btn btn-danger" value={ap.id} onClick={this.handleDelete.bind(this)}>Delete</button></td>
                </tr>)
              }
            </tbody>
          </table>
          </div>
        </div>
    );
  }
}

export default AppointmentEdit ;