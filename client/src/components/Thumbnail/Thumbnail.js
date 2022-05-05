import './Thumbnail.css'
import { VStack, Box, Button, Progress, HStack, Tooltip, IconButton } from "@chakra-ui/react";
// import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';
import {FaRegChartBar, FaRegEdit, FaShareAlt} from "react-icons/fa"

function Thumbnail(props) {
    return (
        <VStack boxShadow={'sm'}
             paddingY={10}
                paddingX={15}
             className="thumbnail">

            <Box>
            <Link to={{pathname: "/form", state:{form:props.form}}} style={{ textDecoration: 'none' }}>
            <p className="form-title">{props.title}</p>
            {!props.complete && (<Box className="progress-cont">
                <Progress value={props.value}
                          size={'sm'}
                          colorScheme={'teal'}
                          borderRadius={'sm'}

                />
                <p style={{fontSize: '12px', margin: '0 10px', color: '#8C99A0', width: 'fit-content'}}>
                    {Math.round(props.value)}%
                </p>
                <p style={{fontSize: '12px', color: '#8C99A0'}}>
                    Changed {props.date}
                </p>
            </Box>
            )}
            </Link>
            </Box>
            {props.complete && (<Box>
                <Link to={{pathname: "/form", state:{form:props.form}}} style={{ textDecoration: 'none' }}>
                    <Button rightIcon={<FaRegEdit />} bg={'#cce3e3'} color={'#2a5555'} _hover={{bg: '#bad5d5'}}>
                        Edit
                    </Button>
                </Link>
            </Box>)}
            <HStack>
                <Tooltip label={"Share"}>
                    <IconButton
                        onClick={props.handleOpen}
                        variant={'ghost'}
                        icon={<FaShareAlt color={'#a9a9a9'}/>}
                    />
                </Tooltip>
            </HStack>
        </VStack>
    );
}

export default Thumbnail;
