import './ShareForm.css'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Input, Button, UnorderedList, ListItem } from "@chakra-ui/react"
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
            <Modal
                isOpen={open}
                onClose={() => handleClose()}
                className="share"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className="dialog-title">Share {formName}</ModalHeader>
                    <ModalBody className="share-content">
                        <Text>
                            Enter Emails below:
                        </Text>
                        <UnorderedList sx={{overflowY: "scroll !important"}}>
                                {
                                    emails.map((email, index) => (
                                        <ListItem>
                                            <Input type="text" className="email" variant="standard" onChange={(e) => emailChange(index, e.target.value)} />
                                        </ListItem>
                                    ))
                                }
                                <Button sx={{width: "max-content", marginBottom:'15px'}} variant="contained" onClick={() => addNewEmail()}>Add Email</Button>
                        </UnorderedList>
                    </ModalBody>
                    <ModalFooter className="l1">
                        <div className="l2">
                            <Button onClick={() => sendForm()} className="send">SEND</Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}