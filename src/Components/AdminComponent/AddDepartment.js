import React,{Component, useState} from "react";
import DepartmentService from "../../Services/Department";

const CreateDepartment =props =>{
    
    const[department,setDepartment]= useState({
        departmentName: '',
        consultant:'',
        category:''
    })
    const changeHandler = ev =>{
        let{name, value} = ev.target;
        setDepartment({  ...department,[name]:value
        });

       
    }
    console.log(department);

     const  submitHandler = ev =>{
                    ev.preventDefault();
                   DepartmentService.addNewDeaprtment(department)
                   .then(res =>{
                    alert("Department created!!");
                   })
                   .catch(res => { });  
        }
    

   
        return(
            <div>
                <div className='card mx-auto mt-5 justify-content-center' style={{width: "55%"}}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="p-5">
                                Create a new Department
                            </h4>
                            <form method="post" onSubmit={submitHandler} className="form-group row m-3">
                            <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Category</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter Category"
                              id="category"
                              name="category"
                              value={department.category}
                              onChange = {changeHandler}
                              required/>
                             </div>
                      </div>
                      <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Department Name</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter department name"
                              id="departmentName"
                              name="departmentName"
                              value={department.departmentName}
                              onChange = {changeHandler}
                              required/>
                             </div>
                      </div>
                      <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Doctor Name</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter doctor name"
                              id="consultant"
                              name="consultant"
                              value={department.consultant}
                              onChange = {changeHandler}
                              required/>
                             </div>
                      </div>

                      <button class="btn btn-primary " type="submit">Create Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default CreateDepartment;