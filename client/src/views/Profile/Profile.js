import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Profile.css';
import {logout} from "../../actions/user";
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Box,
    Button,
    Center,
    VStack,
    Text, IconButton
} from "@chakra-ui/react";
import { MdOutlineEmail} from "react-icons/md";

function Profile(props){
    return(
        <div>
            <Navbar/>
            <div className = "dashboard">
                <div className = "dash-side">
                    <Sidebar
                        current=""
                    />
                </div>
                <Box className = "dash-main profile-main">
                    <Button
                            mt={'5rem'}
                            alignSelf={'flex-start'}
                            ml={'20%'}
                            mb={'1rem'}
                            bg={'gray.200'}
                            color={'gray.500'}
                            onClick={() => {logout()}}>Log out
                    </Button>
                    <Center boxShadow={'sm'}
                            p={'1rem'}
                            bg={'white'}
                            mr={'20%'}
                            w={'40%'}

                    >

                            <Box w={'100%'}>
                                <VStack>
                                    <IconButton
                                        alignSelf={'flex-end'}
                                        aria-label={''}>
                                        <MdOutlineEmail/>
                                    </IconButton>
                                    <Center
                                    background={'#CEE0E0'}
                                    borderRadius={'50%'}
                                    mt={'0 !important'}
                                    padding={5}
                                    w={'5rem'}
                                    h={'5rem'}
                                    >
                                        <Heading
                                        color={'#2F8886'}

                                        >{props.user.name.split(' ').length > 1 && (props.user.name.split(' ')[0][0]+props.user.name.split(' ')[1][0])}
                                            {props.user.name.split(' ').length === 1 && (props.user.name.split(' ')[0][0])}

                                        </Heading>
                                    </Center>
                                    <Text fontWeight={500}
                                    fontSize={24}
                                    >{props.user.name}</Text>
                                    <Text
                                        mt={'0 !important'}
                                    color={'gray.400'}
                                    >
                                        @{props.user.username || 'judy'}
                                    </Text>
                                    <HStack
                                    mb={'1rem !important'}
                                    >
                                        {(props.user.group || []).map((el) => {
                                                            return(<Text
                                                                color={'#2F8886'}
                                                                bg={'#CEE0E0'}
                                                                paddingX={3}
                                                                borderRadius={20}
                                                            >{el.name}</Text>)
                                                   }) || 'Boston Childrens Hospital'}
                                    </HStack>

                                </VStack>
                            </Box>
                    </Center>
                    </Box>
            </div>
        </div>
    )
}

export default Profile;
