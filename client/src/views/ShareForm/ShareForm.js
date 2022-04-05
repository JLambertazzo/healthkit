// import './ShareForm.css'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Input, Button, UnorderedList, ListItem } from "@chakra-ui/react"
import {useState} from 'react';
import {shareByEmail} from '../../actions/form'
import {FaPlus, FaTimes, FaTrash} from "react-icons/fa";

export default function ShareForm({open, formId, formName, user, handleClose}){

    const [emails, setEmails] = useState([""])

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
                    <ModalBody className="share-content"  w={'fit-content'}>
                        <Text>
                            Enter Emails below:
                        </Text>
                        <UnorderedList style={{listStyle: 'none'}}>
                                {
                                    emails.map((email, index) => (
                                        <ListItem my={5}>
                                            <Input type="text" className="email" variant="standard"
                                                   color={'black'}
                                                   w={'fit-content'}
                                                   borderWidth={1}
                                                   borderColor={'gray.200'}
                                                   focusBorderColor={'#2f8886'}
                                                   _placeholder={{opacity: 0.4, color: 'black' }}
                                                   placeholder={"Email"}
                                                   onChange={(e) => emailChange(index, e.target.value)} />
                                        </ListItem>
                                    ))
                                }
                                <Button
                                leftIcon={<FaPlus/>}
                                    style={{width: "max-content", marginBottom:'15px'}}
                                        onClick={() => addNewEmail()}>Add Email</Button>
                        </UnorderedList>
                    </ModalBody>
                    <ModalFooter className="l1">
                        <div className="l2">
                            <Button
                                bg={'#2f8886'}
                                color={'white'}
                                _hover={{background: '#278280'}}
                                onClick={() => sendForm()} className="send">SEND</Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
