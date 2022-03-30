import './FillForm.css'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Card, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getField } from '../../actions/field';
import { useState, useEffect } from 'react';
import Input from '../../components/Inputs/Input';
import { submitForm, updateFields } from '../../actions/form';
import { useHistory } from 'react-router-dom';


function FillForm(){
    const history = useHistory();
    const location = useLocation()
    const form = location.state.form;
    const [formFields, setFormFields] = useState([]);
    

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

    const handleChange = (id, v) => {
        console.log(v)
        var ff = formFields;
        ff.forEach((field) => {
            if (field._id == id){
                console.log(field)
                field.value = v;
                console.log(field)
            }
        })
        setFormFields(ff);
        console.log(formFields)
    }

    const handleSubmit = () => {
        updateFields(form._id, formFields)
        submitForm(form._id)
        history.push('/')
    }
    
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
                                {/* <Typography className="q-label">{field.label}</Typography> */}
                                <Input handleChange={handleChange} props={{id: field._id, type:field.type, options:field.options, label:field.label}}/>
                                {/* {(field.type === "text") && (
                                    <TextField className="input"></TextField>
                                )}
                                {(field.type === "multiple") && (
                                    <FormGroup>
                                    {field.options.map(o =>
                                        <FormControlLabel control={<Checkbox/>} label={o}/>
                                    )}
                                    </FormGroup>
                                )}
                                {(field.type === "single") && (
                                    <RadioGroup>
                                    {field.options.map(o =>
                                        <FormControlLabel value={o} control={<Radio />} label={o}/>
                                    )}
                                    </RadioGroup>
                                )}
                                {(field.type === "number") && (
                                    <RadioGroup>
                                    <TextField type="number" className="input2"></TextField>
                                    </RadioGroup>
                                )}
                                {(field.type === "date") && (
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
                                )} */}
                                </Card>})}
                                <Button onClick={() => handleSubmit()}className="submit">Submit</Button>
                                </div>
                    </div>
            </div>
        </div>
    )
}

export default FillForm;