import React, {Component} from 'react';

class AdminProfile extends Component{
    render(){
        return(
            <div className='card mx-auto mt-5' style={{width: '75%'}}>
                <h2> Admin Profile</h2>
                <table className='table-responsive{-sm|-md|-lg|-xl} '>
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Hospital Name</th>
                            <th>Phone Number</th>
                            <th>Email Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> John</td>
                            <td>Kingsway Hospital</td>
                            <td> 9875241630</td>
                            <td>john002@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminProfile;