import './Login.css';
import { Link , useHistory } from 'react-router-dom';
import {
    Button, Box,
    Flex,
    Input, FormControl, FormLabel,
    HStack, Heading,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { LoginUser } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";
import {useState} from "react";

function Login(){

    const history = useHistory();
    const [success, setSuccess] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        LoginUser(email, pass, history).then(res => res.user === null ? setSuccess(false) : null)
    }

    return(
        <div id = "loginCont" >
            <Navbar/>

            <Box className = "sign-in-box"
                  w={'40%'}
                 m={'auto'}
                 mt={'8rem'}
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
                        _hover={{borderColor:'gray.200'}}
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
                           _hover={{borderColor:'gray.200'}}
                           _placeholder={{opacity: 0.4, color: 'black' }}
                    />
                        {!success && (
                            <Alert
                                mt={'1rem'}
                                status='error'>
                                <AlertIcon />
                                Login failed, your email or password are incorrect.
                            </Alert>
                        )}

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
