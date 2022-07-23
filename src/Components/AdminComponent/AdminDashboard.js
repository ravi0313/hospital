import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import consultantDetails from './consultantDetails';
import PatientService from "../../Services/Appointment";


const AdminDashboard = props =>{
    const [consultants, setConsultnats] = useState([]);
    useEffect(() => {
        PatientService.getAppointment().then(res =>{
            console.log(res.data);
            setConsultnats([...res.data]);
        }).catch(err => {
            alert(err.response.statusText);
        });
    }, [consultants.length])


    
        return <div className="row">
            <div  className='card mx-auto mt-5' style={{width: "75%"}}>
                <h2>consultants Records</h2>
            <table className ='table-responsive{-sm|-md|-lg|-xl '>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>PatientId</th>
                        <th>DoctorId</th>
                        <th>Department Name</th>
                    </tr>
                </thead>
                <tbody>
                   { consultants.map( t=> <tr key = {t.id}>
                    <td>{t.id}</td>
                    <td>{t.dateOfAppointment}</td>
                    <td>{t.patientId}</td>
                    <td>{t.doctorId}</td>
                    <td>{t.departmentName}</td>
                   

                   </tr>)}
                </tbody>
            </table>
        </div>
        </div>
        
    
}


export default AdminDashboard;