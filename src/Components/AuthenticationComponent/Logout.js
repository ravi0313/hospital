import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h4 className='p-5'>You've been logged out Successfully!...</h4>
                  <p> To login</p>
                  <p><span className='line'><a href='./'>Click here </a></span></p>

              </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Logout ;