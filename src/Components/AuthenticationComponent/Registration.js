import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from '../../Services/Auth';

class Registration extends Component {
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            gender: "",
            phone_number: "",
            age: "",
            dob: "",
            education: "",
            specializationinDepartment: "",
            experience: "",
            address: "",
            email_Id: "",
            username: "",
            password: "",
            role: ""
        };
    }

    handleChange(event){
        let { name , value , type } = event.target ;
        this.setState({[name]:value});
    }


    handleSubmit(event){
        event.preventDefault();
        const myObj = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            gender: this.state.gender,
            phone_number: this.state.phone_number,
            age: this.state.age,
            dob: this.state.dob,
            education: this.state.education,
            specializationinDepartment: this.state.specializationinDepartment,
            experience: this.state.experience,
            address: this.state.address,
            email_Id: this.state.email_Id,
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        };
        console.log(myObj);
        LoginService.doRegister(myObj)
          .then(res => {
            alert("User Registered Successfully...");
          })
          .catch(res => {
            alert("Username or email already registered");
          });
        this.setState({
            firstName : "",
            lastName : "",
            gender: "",
            phone_number: "",
            age: "",
            dob: "",
            education: "",
            specializationinDepartment: "",
            experience: "",
            address: "",
            email_Id: "",
            username: "",
            password: "",
            role: ""
        });
    }
    
    render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
                  <h4 className='p-5'>
                        <b>Registration</b>
                 </h4>
                  <form method="post" onSubmit={this.handleSubmit.bind(this)} className="needs-validation" novalidate >
                  <div className='form-group row m-3'>
                          <label for="firstName" className="col-sm-2 col-form-label col-form-label-sm" ><b>First Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Enter firstname" required/>
                          </div>
                      </div>

                  <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Last Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Enter lastname" required/>
                          </div>
                 </div>
                      
                 <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Gender</b></label>
                          <div className='col-sm-6'>
                          <div class="dropdown">
            
                                <select name="gender" id="gender" value={this.state.gender} onChange={this.handleChange.bind(this)} className="form-select" aria-label="Default select example">
                                    <option selected>select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            
                        </div>
                  </div>
             </div>


                  <div className='form-group row m-3'>
                          <label htmlFor="dob" class="col-sm-2 col-form-label col-form-label-sm" ><b>Date of Birth</b></label>
                          <div className='col-sm-6'>
                              <input name="dob" id="dob" value={this.state.dob} onChange={this.handleChange.bind(this)} type="date" className="form-control form-control-sm" required />
                              <div class="invalid-feedback"> Please Provide Date of Birth </div>
                          </div>
                      </div>


                 <div className='form-group row m-3'>
                          <label htmlFor="age" class="col-sm-2 col-form-label col-form-label-sm" ><b>Age</b></label>
                          <div className='col-sm-6'>
                              <input name="age" id="age" value={this.state.age} onChange={this.handleChange.bind(this)} type="number" className="form-control form-control-sm" placeholder="Enter age" required/>
                              <div class="invalid-feedback"> Please enter age </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label htmlFor="address" class="col-sm-2 col-form-label col-form-label-sm" ><b>Address</b></label>
                          <div className='col-sm-6'>
                            <textarea name="address" id="address" value={this.state.address} onChange={this.handleChange.bind(this)} className="form-control" rows="1" placeholder="Enter address"></textarea>
                              <div class="invalid-feedback"> Please enter address </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="phonenumber" class="col-sm-2 col-form-label col-form-label-sm" ><b>Phone Number</b></label>
                          <div className='col-sm-6'>
                              <input name="phone_number" id="phone_number" value={this.state.phone_number} onChange={this.handleChange.bind(this)} type="text" className="form-control form-control-sm" placeholder="Enter phone number" required/>
                              <div class="invalid-feedback"> Please enter Phone Number </div>
                          </div>
                </div>

                <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Role</b></label>
                          <div className='col-sm-6'>
                          <div class="dropdown">
                            
                                <select name="role" id="role" value={this.state.role} onChange={this.handleChange.bind(this)} className="form-select" aria-label="Default select example">
                                    <option selected>select Role</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Doctor">Doctor</option>
                                    </select>
                                  
                                    </div>
                                    </div>
                                    </div>
                                    
                {
                    this.state.role === 'Doctor' && <>
                    <div className='form-group row m-3'>
                          <label for="education" class="col-sm-2 col-form-label col-form-label-sm" ><b>Education</b></label>
                          <div className='col-sm-6'>
                              <input name="education" id="education" value={this.state.education} onChange={this.handleChange.bind(this)} type="text" class="form-control form-control-sm" placeholder="Education" required/>
                              <div class="invalid-feedback"> Please enter Education </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="experienceInYears" class="col-sm-2 col-form-label col-form-label-sm" ><b>Experience</b></label>
                          <div className='col-sm-6'>
                              <input name="experience" id="experience" value={this.state.experience} onChange={this.handleChange.bind(this)} type="number" class="form-control form-control-sm" placeholder="Experience in Years" required/>
                              <div class="invalid-feedback"> Please enter Experience </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="specializationindepartment" class="col-sm-2 col-form-label col-form-label-sm" ><b>Specialization In Department</b></label>
                          <div className='col-sm-6'>
                              <input name="specializationinDepartment" id="specializationinDepartment" value={this.state.specializationinDepartment} onChange={this.handleChange.bind(this)} type="text" class="form-control form-control-sm" placeholder="Enter specialization" required/>
                              <div class="invalid-feedback"> Please enter specializationInDepartment </div>
                          </div>
                </div>
                    </>
                }                    



                <div className='form-group row m-3'>
                          <label for="emailid" className="col-sm-2 col-form-label col-form-label-sm" ><b>Email Id</b></label>
                          <div className='col-sm-6'>
                              <input name="email_Id" id="email_Id" value={this.state.email_Id} onChange={this.handleChange.bind(this)} type="email" className="form-control form-control-sm" placeholder="Enter Email id" required/>
                              <div class="invalid-feedback"> Please enter Email </div>
                          </div>
                 </div>


                <div className='form-group row m-3'>
                          <label for="username" class="col-sm-2 col-form-label col-form-label-sm" ><b>Username</b></label>
                          <div className='col-sm-6'>
                              <input name="username" id="username" value={this.state.username} onChange={this.handleChange.bind(this)} type="text" class="form-control form-control-sm" placeholder="Enter Username" required/>
                              <div class="invalid-feedback"> Please enter username </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" className="col-sm-2 col-form-label col-form-label-sm" ><b>Password</b></label>
                          <div className='col-sm-6'>
                              <input name="password" id="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" className="form-control form-control-sm" placeholder="Enter password" required/>
                              <div class="invalid-feedback"> Please enter password </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" class="col-sm-2 col-form-label col-form-label-sm" ><b>Confirm Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" className="form-control form-control-sm" placeholder="confirm password" required/>
                              <div class="invalid-feedback"> Please enter confirm password </div>
                          </div>
                </div>
                <button className="btn btn-dark m-5" type="submit" onSubmit={this.handleSubmit} style={{backgroundColor:'#70718D'}}>Register</button>
                  <p> Already Registered? </p>
                  <p><span className='line'><a href='./'><b>Click here to Login </b></a></span></p>

                      </form>
                      </div>
                      </div>
    );
}
}

export default Registration;