import './Thumbnail.css'
import {Flex, FormControl, FormLabel, Heading, VStack, Input, Box, Button, Progress} from "@chakra-ui/react";
// import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';
import {FaRegChartBar} from "react-icons/fa"

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
                <p style={{fontSize: '12px', margin: '0 10px', color: '#8C99A0', width: 'fit-content'}}>{Math.round(props.value)}%</p>
                    <p style={{fontSize: '12px', color: '#8C99A0'}}>Changed {props.date}</p>
            </Box>
            )}
            </Link>
            </Box>
            {props.complete && (<Box>
                <Button rightIcon={<FaRegChartBar />}
                        bg={'#cce3e3'} color={'#2a5555'}
                _hover={{bg: '#bad5d5'}}
                >
                    Results
                </Button>
            </Box>)}


        </VStack>
    );
}

export default Thumbnail;
