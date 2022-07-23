import React, { Component } from 'react';
import { appDoctor} from '../../Data';

class WelcomeDashboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(appDoctor);
    return (
        <div>
          <table className='table-responsive{-sm|-md|-lg|-xl} text-uppercase'>
              <thead>
                  <tr>
                      <th className='p-3 px-5' style={{letterSpacing:"5px"}} >welcome back!</th>
                  </tr>
              </thead>
          </table>
          <div class="d-flex justify-content-around p-4">
              <h6>Doctor Id : {this.props.appUser.id}</h6>
              <h6>Name : {this.props.appUser.firstName},{this.props.appUser.lastName}</h6>
              <h6>Gender : {this.props.appUser.gender}</h6>
              <h6>Age : {this.props.appUser.age }</h6>
              <h6>Doctor Id : {appDoctor.map(m => m.Id)}</h6>
              <h6>Name : {appDoctor.map(m => m.FirstName)},{appDoctor.map( m => m.Lastname)}</h6>
              <h6>Gender : {appDoctor.map(m => m.Gender)}</h6>
              <h6>Age : {appDoctor.map(m => m.Age) }</h6>
          </div>
        </div>
    )};
  }



export default WelcomeDashboard ;