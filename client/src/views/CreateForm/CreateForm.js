import './CreateForm.css'
import { Button, List, Paper, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, Checkbox, IconButton } from '@mui/material'
import { Delete, Close, Add } from '@mui/icons-material'
import Navbar from "../../components/Navbar/Navbar";
import { useState } from 'react'
import { createForm } from '../../actions/form'
import { useHistory } from 'react-router-dom';

const types = [
    "text",
    "multiple",
    "single",
    "date",
    "time",
    "date-range",
    "time-range",
    "number",
    // "address" // not implemented
]

// Page to create a new form
function CreateForm(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [fields, setFields] = useState([])
    const [focused, setFocused] = useState("")
    const history = useHistory()

    const submitForm = () => {
        createForm(title, desc, fields, props.user.username)
            .then(form => {
                history.push('/myforms')
            })
            .catch(console.error)
    }

    const newField = () => {
        setFields(prev => {
            return prev.concat({
                label: "",
                type: "text",
                options: []
            })
        })
    }

    const newFieldAfter = (index) => {
        setFields(prev => {
            const copy = [...prev];
            copy.splice(index + 1, 0, {
                label: "",
                type: "text",
                options: []
            });
            return copy;
        })
    }

    const setFieldLabel = (index, label) => {
        setFields(prev => {
            const copy = [...prev];
            copy[index].label = label;
            return copy;
        })
    }

    const setFieldType = (index, type) => {
        setFields(prev => {
            const copy = [...prev];
            copy[index].type = type;
            return copy;
        })
    }

    const removeField = (index) => {
        setFields(prev => prev.filter((_,i) => i !== index));
    }

    const addOpt = (questionIndex, option) => {
        setFields(prev => {
            const copy = [...prev]
            copy[questionIndex].options = copy[questionIndex].options.concat(option)
            return copy
        })
    }

    const setOpt = (questionIndex, optIndex, value) => {
        setFields(prev => {
            const copy = [...prev]
            copy[questionIndex].options[optIndex] = value
            return copy 
        })
    }

    const delOpt = (questionIndex, optIndex) => {
        setFields(prev => {
            const copy = [...prev];
            copy[questionIndex].options = copy[questionIndex].options.filter((_,i) => i !== optIndex);
            return copy;
        })
    }

    const getOptions = (type, options, qindex) => {
        if (!["multiple", "single"].includes(type)) return
        let opts = []
        if (type === "multiple") {
            opts = options.map((opt, index) => <div><IconButton onClick={() => delOpt(qindex, index)}><Close /></IconButton><FormControlLabel
                                        key={`${qindex}-${index}-${opt}`}
                                        label={<TextField autoFocus={focused === `${qindex}-${index}`} onFocus={() => setFocused(`${qindex}-${index}`)} variant="standard" value={opt} onChange={(e) => setOpt(qindex, index, e.target.value)} />}
                                        control={<Checkbox checked={false} disabled={true} />}
                                        /></div>)
        } else {
            opts = options.map((opt, index) => <div><IconButton onClick={() => delOpt(qindex, index)}><Close /></IconButton><FormControlLabel
                                        key={`${qindex}-${index}-${opt}`}
                                        label={<TextField autoFocus={focused === `${qindex}-${index}`} onFocus={() => setFocused(`${qindex}-${index}`)} variant="standard" value={opt} onChange={(e) => setOpt(qindex, index, e.target.value)} />}
                                        control={<Radio checked={false} disabled={true} />} 
                                        /></div>)
        }
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                {opts}
                <Button sx={{width: "max-content"}} variant="contained" onClick={() => addOpt(qindex, "")}>Add Option</Button>
            </div>
        )
    }

    return (
        <div>
            <Navbar/>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <div className="createform-cont">
                    <h2>New Form</h2>
                    <div className="form-info">
                    <p>Form Title</p>
                    <TextField id="outlined-basic" className="form-field" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <p>Form Description</p>
                        <TextField
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            className={"form-field"}
                        />
                    </div>
                    <Button variant="contained" onClick={submitForm} sx={{marginTop: 2}}>Create</Button>
                </div>
                <div>
                    <List sx={{overflowY: "scroll !important"}}>
                        {
                            fields.map((field, index) => (
                                <Paper key={`q${index}-${field.label}`} sx={{marginTop: '2rem'}} elevation={2}>
                                    <Paper elevation={3}>
                                        <IconButton aria-label='add after' onClick={() => newFieldAfter(index)}><Add /></IconButton>
                                        <IconButton aria-label='delete' onClick={() => removeField(index)}><Delete /></IconButton>
                                        <TextField variant="standard" autoFocus={focused === `${index}-`} onFocus={() => setFocused(`${index}-`)} value={field.label} onChange={(e) => setFieldLabel(index, e.target.value)} />
                                        <FormControl>
                                            <Select
                                                variant="standard"
                                                labelId={"type-label-" + index}
                                                value={field.type}
                                                onChange={(e) => setFieldType(index, e.target.value)}
                                            >
                                                {types.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Paper>
                                    {getOptions(field.type, field.options, index)}
                                </Paper>
                            ))
                        }
                        <Button sx={{width: "max-content"}} variant="contained" onClick={() => newField()}>Add Field</Button>
                    </List>
                </div>
            </div>
        </div>

    );
}

export default CreateForm;
