import './Signup.css';
// import { Container, Box, TextField, Avatar, Button} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import {useState, useEffect} from "react";
import {getAllGroups} from "../../actions/group";
import {Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button} from "@chakra-ui/react";

function Signup(){

    const history = useHistory();
    const [groups, setGroups] = useState([]);

    const [pickerItems, setPickerItems] = useState(groups);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCreateItem = (item) => {
        setPickerItems((curr) => [...curr, item]);
        setSelectedItems((curr) => [...curr, item]);
    };

    const handleSelectedItemsChange = (selectedItems) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

    useEffect(() => {
        getAllGroups().then(res => {
            setGroups(res.groups.map(g => g.name));
        });
    }, [])

    useEffect(() => {
        setPickerItems(prev => [...prev, ...groups.map(g => ({ value: g, label: g }))])
    }, [groups])

    const HandleSubmit = (event) => {
        event.preventDefault();
        const user = event.target.username.value;
        const pass = event.target.password.value;
        const email = event.target.email.value;
        const name = event.target.name.value;
        const group = selectedItems.map(g => g.value);
        signup(user, email, pass, name, group);
        window.location.href = "/login";
    }

    return(
        <div id = "loginCont">
            <Navbar/>

            <Box className = "sign-in-box"
                 w={'40%'}
                 m={'auto'}
                 mt={'8rem'}
                 bg={'white'}
            >
                <form onSubmit={HandleSubmit}>

                    <FormControl isRequired>

                        <Flex p={5}
                              w={'70%'}
                              margin={'auto'}
                              flexDir={'column'}
                        >
                            <HStack my={5}>
                                <Heading
                                    color={'#2F8886'}
                                    fontSize={'1.5em'}>
                                    Sign Up
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
                                _hover={{borderColor:'gray.200'}}
                                _placeholder={{opacity: 0.4, color: 'black' }}
                            />
                            <FormLabel htmlFor='name'
                                       color={'black'}
                            >Name
                            </FormLabel>
                            <Input id={"name"}
                                   name = "name"
                                   placeholder="Name"
                                   w={'60%'}
                                   borderColor={'gray.200'}
                                   focusBorderColor={'#2f8886'}
                                   color={'black'}
                                   _hover={{borderColor:'gray.200'}}
                                   _placeholder={{opacity: 0.4, color: 'black' }}
                            />
                            <FormControl>

                            <CUIAutoComplete
                                id={'groups'}
                                label="Choose your group(s)"
                                placeholder="Group"
                                items={pickerItems}
                                selectedItems={selectedItems}
                                name="group"
                                onSelectedItemsChange={(changes) =>
                                    handleSelectedItemsChange(changes.selectedItems)
                                }
                                inputStyleProps={{ focusBorderColor:'#2f8886', borderColor: 'gray.200', color: 'black'}}
                                toggleButtonStyleProps={{color: 'gray'}}
                                labelStyleProps={{color: 'black', marginBottom: 0, marginTop: '1rem'}}
                                listStyleProps={{borderColor: 'gray.200', color: 'black'}}
                                tagStyleProps={{bg: 'gray.50', color: 'gray'}}
                                itemRenderer={({value}) => <div>{value}</div>}
                                createItemRenderer={(value) => <div>{value}</div>}
                            />

                            </FormControl>

                            <FormLabel htmlFor='username'
                                       color={'black'}
                            >Username
                            </FormLabel>
                            <Input id={"username"}
                                   mb={5}
                                   name = "username"
                                   placeholder="Username"
                                   w={'60%'}
                                   borderColor={'gray.200'}
                                   focusBorderColor={'#2f8886'}
                                   color={'black'}
                                   _hover={{borderColor:'gray.200'}}
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
                                   _hover={{borderColor:'gray.200'}}
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
                                > Sign Up</Button>
                                <br/>
                                <Link to="/login"
                                      style={{color: '#2f8886'}}
                                > {"Already have an account? Sign In"} </Link>
                            </Box>
                        </Flex>


                    </FormControl>

                </form>
            </Box>
        </div>
    )
}

export default Signup;
