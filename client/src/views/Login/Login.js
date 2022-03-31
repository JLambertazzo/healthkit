import './Login.css';
import { LockOutlined } from '@mui/icons-material';
import { Link , useHistory } from 'react-router-dom';
import {
    Button, Box,
    IconButton, Flex, Spacer,
    Center, Input, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText,
    HStack, Heading, VStack
} from '@chakra-ui/react';
import { LoginUser } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";

function Login(){

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        LoginUser(email, pass, history);
    }

    return(
        <div id = "loginCont" >
            <Navbar/>

            <Box className = "sign-in-box"
                  w={'40%'}
                 m={'auto'}
                 mt={20}
                 bg={'white'}
                 >
                <form onSubmit={handleSubmit}>

                <FormControl isRequired >

                    <Flex p={5}
                          w={'70%'}
                          margin={'auto'}
                          flexDir={'column'}
                    >
                        <HStack my={5}>
                            <Heading
                                color={'#2F8886'}
                                fontSize={'1.5em'}>
                                Log In
                            </Heading>
                            {/*<FaUserCircle*/}
                            {/*    m={1}*/}
                            {/*    bg={'rgb(21, 82, 126)'}*/}
                            {/*/>*/}
                        </HStack>
                    <FormLabel
                        htmlFor='email'
                    color={'black'}
                    >Email Address</FormLabel>
                    <Input
                        mb={5}
                        id="email" type={'email'}
                           placeholder="Email"
                        name={'email'}
                           color={'black'}
                           w={'60%'}
                        borderColor={'gray.200'}
                        focusBorderColor={'#2f8886'}
                        _placeholder={{opacity: 0.4, color: 'black' }}
                        />
                    <FormLabel htmlFor='pass'
                               color={'black'}
                    >Password
                    </FormLabel>
                    <Input id="pass" placeholder="Password" type="password"
                           w={'60%'}
                           name={'password'}
                           borderColor={'gray.200'}
                           focusBorderColor={'#2f8886'}
                           color={'black'}
                           _placeholder={{opacity: 0.4, color: 'black' }}
                    />

                        <Box
                            mt={10}
                        >

                            <Button type="submit"
                                    bg='#2f8886'
                                    _hover={{bg: '#267876'}}
                                    mb={5}
                                    color={'white'}
                            > Log In</Button>
                            <br/>
                            <Link to="/signup"
                            style={{color: '#2f8886'}}

                            > {"Don't have an account? Sign Up"} </Link>
                        </Box>
                    </Flex>


                </FormControl>

                </form>
            </Box>
        </div>
    )
}

export default Login;
