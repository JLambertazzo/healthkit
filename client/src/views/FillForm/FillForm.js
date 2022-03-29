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
                                <Typography className="q-label">{field.label}</Typography>
                                {(field.type == "text") && (
                                    <TextField className="input"></TextField>
                                )}
                                {(field.type == "multiple") && (
                                    <FormGroup>
                                    {field.options.map(o =>
                                        <FormControlLabel control={<Checkbox/>} label={o}/>
                                    )}
                                    </FormGroup>
                                )}
                                {(field.type == "select") && (
                                    <RadioGroup>
                                    {field.options.map(o =>
                                        <FormControlLabel value={o} control={<Radio />} label={o}/>
                                    )}
                                    </RadioGroup>
                                )}
                                {(field.type == "number") && (
                                    <RadioGroup>
                                    <TextField type="number" className="input2"></TextField>
                                    </RadioGroup>
                                )}
                                {(field.type == "date") && (
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="dd/MM/yyyy"
                                        value={value}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                )}
                                </Card>})}
                                <Button className="submit">Submit</Button>
                                </div>
                    </div>
            </div>
        </div>
    )
}

export default FillForm;