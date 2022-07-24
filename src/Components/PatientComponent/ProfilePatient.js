import React, { Component } from 'react';
import { appUser} from '../../Data';

class ProfilePatient extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : this.props.loggedUser
    };
  }


  render() {
    return(
      <div className='card mx-auto mt-5' style={{width: "75%"}}>
          <h2>Profile Details </h2>
          <table>
            <thead>
              <th>Name </th>
              <th>Age </th>
              <th>Address </th>
              <th>Phone Number</th>
              <th>Email</th>
            </thead>
            <tbody>
              <td>{this.state.user.firstName}</td>
              <td>{this.state.user.age}</td>
              <td>{this.state.user.phonenumber}</td>
              <td>{this.state.user.email}</td>
              <td>{appUser.map(m => m.Firstname)}</td>
              <td>{appUser.map(m => m.Address)}</td>
              <td>{appUser.map(m => m.Phonenumber)}</td>
              <td>{appUser.map(m => m.Email)}</td>
            </tbody>
          </table>
      </div>
  );
  }
}

export default ProfilePatient ;