import './ShareForm.css'
import {Dialog, TextField, Button, DialogTitle, DialogContentText, List} from '@mui/material';
import {useState} from 'react';
import {shareByEmail} from '../../actions/form'

export default function ShareForm({open, formId, formName, user, handleClose}){

    const [emails, setEmails] = useState([])

    const addNewEmail = () => {
        setEmails(prev => {
            return prev.concat("")
        })
    }

    const emailChange = (index, email) => {
        setEmails(prev => {
            const copy = [...prev];
            copy[index] = email;
            return copy;
        })
    }

    const sendForm = () => {
        shareByEmail(formId, user.username, emails);
        handleClose();
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => handleClose()}
                className="share"
            >
                <DialogTitle className="dialog-title">Share {formName}</DialogTitle>
                <div className="share-content">
                <DialogContentText>
                    Enter Emails below:
                </DialogContentText>
                <List sx={{overflowY: "scroll !important"}}>
                        {
                            emails.map((email, index) => (
                                <div>
                                    <TextField className="email" variant="standard" onChange={(e) => emailChange(index, e.target.value)} />
                                </div>
                            ))
                        }
                        <Button sx={{width: "max-content", marginBottom:'15px'}} variant="contained" onClick={() => addNewEmail()}>Add Email</Button>
                    </List>
                </div>
                <div className="l1">
                    <div className="l2">
                        <Button onClick={() => sendForm()} className="send">SEND</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}