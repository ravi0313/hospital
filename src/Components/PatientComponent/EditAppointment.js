import {useParams, Link, useNavigate} from 'react-router-dom';
import { useEffect , useState } from 'react';
import AppointmentService from '../../Services/Appointment';

function EditAppointment(props) {
    const {Id} = useParams();
    const [appointmentDetial , setAppointmentDetial] = useState([]);
    const [date, setDate ] = useState("");

    const getAppointment = () => {
        let filterAppointment = appointmentDetial.filter((ap) => ap.id.toString().includes(Id.toString()));
        return filterAppointment;
    }

    useEffect(() => {
        AppointmentService.getAppointment()
           .then(res => {
               setAppointmentDetial(res.data);
            })
           .catch(res => {});
    }, []);

    const nav = useNavigate();

    const handleChange = (ev) => {
        let {value } = ev.target;
        setDate(value);
    }

    const handleUpdate = (ev) => {
        ev.preventDefault();
        let dateObj = new Date(date).toISOString()
        AppointmentService.updateAppointment(Id, dateObj)
            .then(res => {
                alert("Date Updated Successfully!!!");
            })
            .catch(res => {
                alert("Something went Wrong");
            });
        //console.log(dateObj);
        nav('/AppointmentEdit');
        //return <Link to={'/AppointmentEdit'} ></Link>
    }

    return(
        <div  className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
            <h5 className='p-5'>Update Appointment Date</h5>
            <form method='post' onSubmit={handleUpdate} class="needs-validation" >
            <div className='form-group row mx-5 p-2'>
                <label for="dateOfAppointment" class="col-sm-2 col-form-label col-form-label-sm mx-5 font-weight-bold" >Enter New Appointment Date</label>
                <div className='col-sm-6'>
                    <input type="date" onChange={handleChange} name="date" value={date} id="date"  required></input>
                </div>
            </div>
            <div className='col'>
            <button class="btn btn-primary m-3" type="submit">
                update
            </button>
            <button type="button" class="btn btn-warning m-3">
            <Link className='btn' to={'/AppointmentEdit'}>Cancel</Link>
            </button>
            </div>
            
            </form>
            
        </div>
    );
}

export default EditAppointment ;
