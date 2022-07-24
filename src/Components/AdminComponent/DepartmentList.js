import React, {Component, useEffect, useState} from "react";
import DepartmentService from "../../Services/Department";


const DepartmentList = props => {
    const[departments, setDepartments] = useState([]);
    useEffect(() =>{
        DepartmentService.getDepartment().then(res => {
            console.log(res.data);
            setDepartments([...res.data]);
        }).catch(err => {
            alert(err.response.statusText);
        });
    }, [departments.length])

    const handleDelete = ev =>{
        ev.preventDefault();
        const result = window.confirm('Are you sure you want to delete: ' +ev.target.value);
        if (result) {

            DepartmentService.removeDepartment(ev.target.value)
            .then(res => {
                    alert("deleted successfully");
            })
            .catch(res =>{alert("Something went wrong")});
        }
    }

    return <div className="row">
        <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}}>
            <h3 className='p-5'> Department List</h3>
            <table className='table-responsive{-sm|-md|-lg|-xl} '>
                <thead>
                    <th>Id</th>
                    <th>Department Name</th>
                    <th>Doctor Name</th>
                    <th>Category</th>
                    
                </thead>
                <tbody>
                    {departments.map(t => <tr key = {t.id}>
                        <td>{t.id}</td>
                        <td>{t.departmentName}</td>
                        <td>{t.consultant}</td>
                        <td>{t.category}</td>
                        <td><button type="button" class="btn btn-danger" value={t.id} 
                        onClick={handleDelete}>Delete</button></td>
                    </tr>)  
                    }
                </tbody>
            </table>
        </div>

    </div>
}

export default DepartmentList; 