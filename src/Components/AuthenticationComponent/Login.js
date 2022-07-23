import React from 'react';
import { useState } from 'react';

const Login = props => {

    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const handleChange = (e) => {
        let { name, value} = e.target;
        setCredentials({ ...credentials, [name]: value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.handleLogin({ ...credentials });
    }
  
    return ( <form method ="post" onSubmit={handleSubmit}>
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "70%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h4 className='p-5'><b>Login</b></h4>
            
                      <div className='form-group row m-3'>
                          <label for="username" class="col-sm-2 col-form-label col-form-label-sm" ><b>Username</b></label>
                          <div className='col-sm-6'>
                              <input type="text" id="username" name = 'username' value={credentials.username} placeholder="abc@example.com" required onChange={handleChange} />
                              <div className="invalid-feedback"> Please enter Username </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="password" class="col-sm-2 col-form-label col-form-label-sm" ><b>Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" id='password' name='password' value={credentials.password} placeholder="abc$@123" required onChange={handleChange} />
                              <div className="invalid-feedback"> Please Provide Password </div>
                         </div>
                     </div>
                     <button className="btn btn-dark m-5" type="submit" style={{backgroundColor:'#70718D'}}>Log In</button>   
                  <p> Need an Account? </p>
                  <p><span className='line'><a href='/Registration'><b>Click here to Register </b></a></span></p>

              </div>
          </div>
          </div>
        </div>
        </form>
    );
  }


export default Login ;