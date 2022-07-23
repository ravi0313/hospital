import React, {Component} from "react";
import WelcomeDashboard from './WelcomeDashboard';

class DashboardDoctor extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="justify-content-center">
                <div className="card mx-auto mt-5" style={{width: "75%"}}>
                <WelcomeDashboard appUser = {this.props.loggedUser} />
                <WelcomeDashboard appUser = {this.props.appUser} />
                    
                </div>
            </div>
        )
    }
}

export default DashboardDoctor;