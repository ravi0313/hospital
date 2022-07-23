import React, {Component} from 'react';
//import {appointments, doctors, patients} from '../../Data';


class consultantDetails extends Component{
//     constructor(){
//         super();
//         this.state ={
//             appointments:[],
//             doctors:[],
//             patients:[]
//         };
//     }

//    filterDoctorIds(){
//     let userId = this.state.user.map(a => a.Id);
//     let filteredDoctorIds = this. state.doctors.filter((doctor) =>doctor.doctorId.toString().includes(userId.toString()));
//     return filteredDoctorIds;
//    }

//    getPatientId(ptid){
//     let pid = this.state.appointments.filter((appointment) => appointment.patientId.includes(ptid)).map((a=> a.patientId));
//     return pid[0];
//    }

//    getDoctorName(DId){
//     let name = this.state.doctors.filter((doctor) =>doctor.Id.toString().includes(DId)).map((a=> a.Firstname));
//     return name[0];
//    }

    render(){
        return(
            <div>
            <div className= 'card mx-auto mt-5 text-uppercase' style={{width: "50%"}}>
            <table className ='table-responsive{-sm|-md|-lg|-xl text uppercase'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>PatientId</th>
                        <th>DoctorId</th>
                        <th>Doctor Name</th>
                    </tr>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>07/07/2022</td>
                    <td>101</td>
                    <td>1001</td>
                    <td>Nicky</td>
                </tbody>
            </table>
        </div>
        </div>
        );
    }
}

export default consultantDetails;