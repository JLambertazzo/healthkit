import './FillForm.css'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Card, Button, Typography, TextField, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useLocation } from 'react-router-dom';
import { getField } from '../../actions/field';
import { useState, useEffect } from 'react';
import { submitForm } from '../../actions/form';
import Input from '../../components/Inputs/Input'


function FillForm(){
    const location = useLocation()
    const form = location.state.form;
    const [formFields, setFormFields] = useState([]);
    const [value, setValue] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            var fs = []
            form.fields.map((fID) => getField(fID).then(field => {
                    fs.push(field.field)
                    return fs
                    }).then(fs=>{
                        setFormFields([...formFields, ...fs])}
                        ));
        }
        fetchData();
    },[])
    
    return(
        <div>
            <Navbar/>
            <div className="fill-form-dash">
                <div className="dash-side">
                    <Sidebar
                        current=""
                    />
                </div>
                    <div className="form">
                        <div className="form2">
                        <h1>{form.name}</h1>
                            {formFields.map(field => {
                            return <Card className="question">
                                <Input label={field.label} type={field.type} value={field.value} options={field.options} />
                                </Card>})}
                                <Button className="submit" onClick={() => submitForm(form._id)}>Submit</Button>
                                </div>
                    </div>
            </div>
        </div>
    )
}

export default FillForm;