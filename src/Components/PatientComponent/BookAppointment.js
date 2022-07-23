import React, { Component } from 'react';
import { department, doctorUser, appUser} from '../../Data';
import AppointmentService from '../../Services/Appointment';
import {useNavigate} from 'react-router-dom';

class BookAppointment extends Component {
    constructor(){
        super();
        this.state = {
            category : "",
            departmentName: "",
            doctorName: "",
            dateOfAppointment: ""
        };
    }

    getPatientId(){
        let patientId = appUser.map(p => p.Id);
        return patientId[0];
    }

    getDoctorId(){
        let doctorName = this.state.doctorName;
        let doctorId = doctorUser.filter((doc) => doc.Firstname.includes(doctorName)).map(d => d.Id);
        return doctorId[0];
    }

    filterDepartment(){
        let category = this.state.category;
        let filteredDepartment = department.filter((dep) => dep.Category.includes(category));
        return filteredDepartment;
    }

    filterDoctor(){
        let department = this.state.departmentName;
        let filteredDoctor = doctorUser.filter((doc) => doc.SpecificationInDepartment.includes(department));
        return filteredDoctor;
    }

    changeHandler(event){
        let { name, value } = event.target;
        this.setState({[name]:value});
    }

    

    submitHandler(event){
        event.preventDefault();
        const newAppointment = {
            patientId: this.getPatientId(),
            doctorId: this.getDoctorId(),
            DepartmentName: this.state.departmentName,
            dateOfAppointment: new Date(this.state.dateOfAppointment).toISOString()
        };
        AppointmentService.addNewAppointment(newAppointment)
                .then(res => {
                    alert("Appointment Booked!!!");
                })
                .catch(res => {
                    alert("Something went wrong");
                });
        console.log(newAppointment);
        this.setState({
            category: "",
            departmentName : "",
            doctorName: "",
            dateOfAppointment: ""
        });
        
    }

  render() {
      let filteredDepartment = this.filterDepartment();
      let filteredDoctor = this.filterDoctor();
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h5 className='p-5'>Book My New Appointment</h5>
                  <form onSubmit={this.submitHandler.bind(this)} class="needs-validation" >
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Category</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="category" name="category" value={this.state.category} onChange={this.changeHandler.bind(this)} placeholder="col-form-label-sm" required>
                                  <option value="">Select Category</option>
                                  <option value={"General"}>General</option>
                                  <option value={"Private"}>Private</option>
                              </select>
                              <div class="invalid-feedback"> Please Select Category </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Department</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="Department" name='departmentName' value={this.state.departmentName} onChange={this.changeHandler.bind(this)} placeholder="col-form-label-sm" required>
                                  <option value="" >Select Department</option>
                                  {
                                      filteredDepartment.map(dep => <option value={dep.DepartmentName}>{dep.DepartmentName}</option>)
                                  }
                              </select>
                              <div class="invalid-feedback"> Please Select Department </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="doctorName" class="col-sm-2 col-form-label col-form-label-sm" >Doctor Name</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="doctorName" name='doctorName' value={this.state.doctorName} onChange={this.changeHandler.bind(this)} placeholder="col-form-label-sm" required>
                                  <option value="" >Select Doctor</option>
                                  {
                                      filteredDoctor.map(doc => <option value={doc.Firstname}>{doc.Firstname +","+doc.Lastname}</option>)
                                  }
                              </select>
                              <div class="invalid-feedback"> Please Select Doctor Name </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="dateOfAppointment" class="col-sm-2 col-form-label col-form-label-sm" >Date Of Appointment</label>
                          <div className='col-sm-6'>
                              <input type="date" id='dateOfAppointment' name='dateOfAppointment' value={this.state.dateOfAppointment} min="2022-07-05" onChange={this.changeHandler.bind(this)} placeholder="Enter Date Of Appointment" required />
                              <div class="invalid-feedback"> Please Provide Date </div>
                          </div>
                      </div>
                      <button class="btn btn-primary m-5" type="submit">Book Now</button>
                  </form>
              </div>
          </div>
          </div>
        </div>
    );
  }
}

export default BookAppointment ;