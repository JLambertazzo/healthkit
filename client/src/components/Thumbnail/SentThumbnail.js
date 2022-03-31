import './Thumbnail.css'
import { Button, Box, IconButton, Flex, Spacer, Center, VStack} from '@chakra-ui/react'
import {FaRegChartBar, FaRegClock} from "react-icons/fa"
import { useHistory } from 'react-router-dom';

function SentThumbnail(props) {
    const history = useHistory()
    return (
        <VStack boxShadow={'sm'}
                paddingY={10}
                paddingX={15} className="thumbnail sent-thumbnail">

            <p className="form-title" style={{marginBottom: '0.5rem', marginTop: 0}}>{props.title}</p>
            <hr/>
            <p className="form-title org-title">{props.org}</p>
                {props.complete && (<Box>
                    <Button rightIcon={<FaRegChartBar />}
                            bg={'#cce3e3'} color={'#2a5555'}
                            _hover={{bg: '#bad5d5'}}
                            onClick={() => history.push(`/report/${props.id}`)}
                    >
                        Results
                    </Button>
                </Box>)}
            {!props.complete && (<Box>
                <p className="progressText">In progress <FaRegClock/></p>
            </Box>)}



        </VStack>
    );
}

export default SentThumbnail;
