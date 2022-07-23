import { useEffect , useState } from 'react';
import { appDoctor} from '../../Data';
import { useParams, Link} from 'react-router-dom';
import DoctorService from '../../Services/Doctor';

function Consult(props){
    const {Id} = useParams();
    const [report , setReport] = useState({
        patientId: "",
        doctorId: "",
        Diagnosis: "",
        Treatment: "",
        Prescription : "",
        Problem: ""
    });

    useEffect(() => {
        setReport({
            patientId: Id,
            doctorId: appDoctor.map( m => m.Id)
        });
    }, []);


    const handleChange = (ev) => {
        
        setReport({...report, doctorId: appDoctor.map( m => m.Id)});
        let {name ,value } = ev.target;
        setReport({...report, [name]:value});
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const reportObj = {
            patientId: parseInt(report.patientId),
            doctorID: report.doctorId[1],
            doctorID: report.doctorId[0],
            diagnosis: report.Diagnosis,
            treatment: report.Treatment,
            prescription: report.Prescription,
            problem: report.Problem
        };
        console.log(reportObj);
        
        DoctorService.addReport(reportObj)
           .then(res => {
               alert("Report Submitted");
           })
           .catch(res => {
               alert("Something went Wrong");
           });
        setReport({
            Diagnosis: "",
            Treatment: "",
            Prescription: "",
            Problem : ""
        });
    }
    
    return(
        <div  className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
            <div className='row'>
              <div className='col-12'>
                  <h5 className='p-5'>Patient Consultation </h5>
                  <form onSubmit={handleSubmit} class="needs-validation" >
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Diagnosis</label>
                          <div className='col-sm-6'>
                              <input type="text" className='form-control form-control-sm' id='Diagnosis' placeholder="Enter Diagnosis" value={report.Diagnosis} onChange={handleChange} name='Diagnosis' />
                              <div class="invalid-feedback"> Please Enter Diagnosis </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Treatment</label>
                          <div className='col-sm-6'>
                              <input type="text" className='form-control form-control-sm' id='Treatment' placeholder="Enter Treatment" value={report.Treatment} onChange={handleChange} name='Treatment' />
                              <div class="invalid-feedback"> Please Enter Treatment </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Prescription</label>
                          <div className='col-sm-6'>
                              <input type="text" className='form-control form-control-sm' id='Prescription' value={report.Prescription} onChange={handleChange} placeholder="Enter Prescription" name='Prescription' />
                              <div class="invalid-feedback"> Please Enter Prescription </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Problem</label>
                          <div className='col-sm-6'>
                              <input type="text" className='form-control form-control-sm' id='Problem' value={report.Problem} onChange={handleChange} placeholder="Enter Problem" name='Problem' />
                              <div class="invalid-feedback"> Please Enter Problem </div>
                          </div>
                      </div>
                      <button class="btn btn-primary m-5" type="submit">Submit Report</button>
                      <button type="button" class="btn btn-danger m-3">
                      <Link className='btn' to={'/MyAppointment'}>Cancel</Link>
                      </button>
                  </form>
              </div>
              </div>
        </div>
    );
}

export default Consult;