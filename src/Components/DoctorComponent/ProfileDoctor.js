import React, {Component} from "react";

class ProfileDoctor extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='card mx-auto mt-5' style={{width: "75%"}}>
                <h2>Profile Details </h2>
                <table className='table-responsive{-sm|-md|-lg|-xl} '>
                <thead>
                        <tr>
                            <th>Doctor Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Email Id</th>
                            <th>Experience</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.appUser.id}</td>
                            <td>{this.props.appUser.firstName},{this.props.appUser.lastName}</td>
                            <td>{this.props.appUser.gender}</td>
                            <td>{this.props.appUser.age}</td>
                            <td>{this.props.appUser.phoneNumber}</td>
                            <td>{this.props.appUser.email}</td>
                            <td>{this.props.appUser.experience}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ProfileDoctor;