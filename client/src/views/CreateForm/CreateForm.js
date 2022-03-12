import './CreateForm.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Navbar from "../../components/Navbar/Navbar";

// Page to create a new form
function CreateForm() {

    return (
        <div>

            <Navbar/>
        <div className="createform-cont">
            <h2>New Form</h2>
            <div className="form-info">
            <p>Form Title</p>
            <TextField id="outlined-basic" className="form-field" label="Title" variant="outlined" />
                <p>Form Description</p>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    className={"form-field"}
                />
            </div>
        </div>

        </div>

    );
}

export default CreateForm;
