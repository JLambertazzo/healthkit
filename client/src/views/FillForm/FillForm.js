import './FillForm.css'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import { Card, Button } from '@mui/material';
import {Flex, FormControl, FormLabel, Heading, HStack, Box, Button} from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { getField } from '../../actions/field';
import { useState, useEffect } from 'react';
import Input from '../../components/Inputs/Input';
import { getForm, submitForm, updateFields } from '../../actions/form';
import { useHistory } from 'react-router-dom';


function FillForm(){
    const history = useHistory();
    const location = useLocation()
    const form = location.state.form;
    const [formFields, setFormFields] = useState([]);

    useEffect(() => {
        getForm(form._id).then(res => {
            if (res.form) {
                setFormFields(res.form.fields);
            }
        }).catch(console.error)
    },[form])

    const handleChange = (id, v) => {
        const ff = formFields.map((field) => {
            if (field._id == id){
                return {...field, value: v};
            }
            return field
        })
        setFormFields(ff);
    }

    const handleSubmit = () => {
        updateFields(form._id, formFields)
        submitForm(form._id, formFields)
        history.push('/home')
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
                        {formFields.map(field =>
                            <Box className="question">
                                <Input
                                    handleChange={handleChange}
                                    value={field.value}
                                    id={field._id}
                                    type={field.type}
                                    options={field.options}
                                    label={field.label}
                                />
                            </Box>
                        )}
                        <Button
                            className="submit"
                            color='#2f8886'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillForm;
