// import './ShareForm.css'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, Button, FormControl, useToast } from "@chakra-ui/react"
import {useEffect, useState} from 'react';
import { shareByEmail } from '../../actions/form'
import { getUsersByGroup } from "../../actions/user";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

export default function ShareInternal({open, formId, formName, user, handleClose: propHandleClose}){
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    const toast = useToast();

    const handleClose = () => {
        setSelectedUsers([])
        propHandleClose()
    }

    useEffect(() => {
        getUsersByGroup(user.group[0]._id || '')
            .then(users => {
                const notCurrent = users.filter(u => u.username !== user.username)
                setAllUsers(notCurrent)
                setUsers(notCurrent.map(u => ({value: u.email, label: u.email})))
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (allUsers.length > 0 && formId) { // should indicate first fetch is done
            setUsers(allUsers
                .filter(u => !u.receivedForms.includes(formId))
                .map(u => ({value: u.email, label: u.email}))
            )
        }
    }, [formId])

    const sendForm = () => {
        if (selectedUsers.length === 0) {
            toast({
                title: "No Recipients",
                description: "Please specify at least one person to receive this form.",
                status: 'error',
                isClosable: true
            })
            return
        }
        
        shareByEmail(formId, user.username, selectedUsers.map(u => u.value), true)
            .then(res => {
                console.log("what do we get as res??", res)
                toast({
                    title: "Form Sent",
                    status: 'success',
                    isClosable: true
                })
                setAllUsers(allUsers.filter(u => !selectedUsers.map(us => us.value).includes(u.email)))
            })
            .catch((e) => {
                console.error(e)
                toast({
                    title: "Error",
                    description: "Unexpected error sharing form",
                    status: 'error',
                    isClosable: true
                })
            })
            .finally(handleClose)
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
