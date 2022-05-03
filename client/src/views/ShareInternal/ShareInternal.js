// import './ShareForm.css'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Input, Button, UnorderedList, ListItem, FormControl } from "@chakra-ui/react"
import {useEffect, useState} from 'react';
import {shareByEmail} from '../../actions/form'
import {FaPlus, FaTimes, FaTrash} from "react-icons/fa";
import { getUsersByGroup } from "../../actions/user";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

export default function ShareInternal({open, formId, formName, user, handleClose}){

    const [emails, setEmails] = useState([""])
    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        getUsersByGroup(user.group[0]._id || '')
            .then(users => {
                setUsers(users
                    .filter(u => u.name !== user.name)
                    .map(u => ({value: u.email, label: u.email}))
                )
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        console.log("WHAT ARE", users, selectedUsers)
    }, [users, selectedUsers])

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
                        <FormControl>
                            <CUIAutoComplete
                                id={'users'}
                                label="Choose your group(s)"
                                placeholder="User"
                                items={users}
                                selectedItems={selectedUsers}
                                name="user"
                                disableCreateItem={true}
                                onSelectedItemsChange={(changes) =>
                                    setSelectedUsers(changes.selectedItems)
                                }
                                inputStyleProps={{ focusBorderColor:'#2f8886', borderColor: 'gray.200', color: 'black'}}
                                toggleButtonStyleProps={{color: 'gray'}}
                                labelStyleProps={{color: 'black', marginBottom: 0, marginTop: '1rem'}}
                                listStyleProps={{borderColor: 'gray.200', color: 'black'}}
                                tagStyleProps={{bg: 'gray.50', color: 'gray'}}
                                itemRenderer={({value}) => <div>{value}</div>}
                                
                            />
                        </FormControl>
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
