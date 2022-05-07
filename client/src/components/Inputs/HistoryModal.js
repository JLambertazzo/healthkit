// history modal
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import date from 'date-and-time'

export default function HistoryModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Question History</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <UnorderedList> 
                {props.history.map(entry => {
                    const ts = date.format(new Date(entry.timestamp), "HH:mm, MMM D YYYY")
                    const oldVal = entry.old[0] || '""'
                    const newVal = entry.new[0] || '""'
                    return (<Box>
                        <ListItem>{entry.author}({ts}): {oldVal} -&gt; {newVal}</ListItem>
                    </Box>)
                })}
                </UnorderedList>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
