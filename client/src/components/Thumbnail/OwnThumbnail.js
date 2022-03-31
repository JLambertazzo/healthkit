import './Thumbnail.css'
import { Button, Box, IconButton, Flex, Spacer, Center, Tooltip, VStack, HStack} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import { deleteForm } from '../../actions/form';
import {FaEye, FaPen, FaTrash, FaShareAlt} from "react-icons/fa";


function OwnThumbnail(props) {
    const history = useHistory()
    return (
        <VStack boxShadow={'sm'}
                paddingY={10}
                paddingX={15} className="thumbnail own-thumbnail">

            <p className="form-title" style={{marginBottom: '0.5rem', marginTop: 0}}>{props.title}</p>
           <Box>
                    <p style={{fontSize: '12px', textAlign: 'center', color: '#8C99A0', margin: 0}}>Created {props.date}</p>
               <HStack>
                    <Tooltip label={"Preview"}>
                    <IconButton variant={'ghost'}
                                icon={
                        <FaEye
                    color={'#a9a9a9'}
                    />}/>
                    </Tooltip>
                    <Tooltip label={"Edit"}>
                    <IconButton variant={'ghost'} onClick={() => history.push(`/editform/${props.id}`)}
                    icon={<FaPen
                        color={'#a9a9a9'}
                    />}/>
                    </Tooltip>
                    <Tooltip label={"Delete"}>
                    <IconButton variant={'ghost'} onClick={props.onDelete}
                    icon={<FaTrash
                        color={'#a9a9a9'}
                    />}
                    />
                    </Tooltip>
                    <Tooltip label={"Share"}>
                    <IconButton variant={'ghost'} onClick={() => props.handleOpen(props.form)}
                    icon={<FaShareAlt
                        color={'#a9a9a9'}
                    />} />
                    </Tooltip>
               </HStack>
           </Box>


        </VStack>
    );
}

export default OwnThumbnail;
