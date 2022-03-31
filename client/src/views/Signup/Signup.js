import './Signup.css';
import { Container, Box, TextField, Avatar, Button} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";
import Autocomplete from '@mui/material/Autocomplete';
import {useState, useEffect} from "react";
import {getAllGroups} from "../../actions/group";

function Signup(){

    const history = useHistory();
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getAllGroups().then(res => {
            setGroups(res.groups.map(g => g.name));
        });
    }, [])

    const HandleSubmit = (event) => {
        event.preventDefault();
        const user = event.target.username.value;
        const pass = event.target.password.value;
        const email = event.target.email.value;
        const name = event.target.name.value;
        const group = event.target.group.value;
        signup(user, email, pass, name, [group]);
        window.location.href = "/login";
    }

    return(
        <div id = "dash">
            <Navbar/>

            <Container className = "sign-up-box" maxWidth="xs" sx={{ borderRadius: 15 }}>
                <Box component = "form" onSubmit={HandleSubmit} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(21, 82, 126)' }}>
                        <LockOutlined />
                    </Avatar>
                    <h2 id="sign-up">Sign up</h2>

                    <TextField fullWidth name = "email" margin = 'normal' className = "fields email" required label="Email Address"
                               sx={{backgroundColor: 'white', borderRadius: '4px'}}/>
                    <TextField fullWidth name = "name" margin = 'normal' className = "fields" required label="Name"
                               sx={{backgroundColor: 'white', borderRadius: '4px'}} />
                    <Autocomplete
                        className="fields"
                        disablePortal
                        id="combo-box-demo"
                        options={groups || []}
                        fullWidth
                        required
                        freeSolo
                        name="group"
                        sx={{backgroundColor: 'white', borderRadius: '4px'}}
                        renderInput={(params) => <TextField {...params} required name="group" label={"Group"}/>}
                    />

                    <TextField fullWidth name = "username" margin = 'normal' className = "fields" required label="Username"
                               sx={{backgroundColor: 'white', borderRadius: '4px'}}/>
                    <TextField fullWidth name = "password" margin = 'normal' className = "fields" required label="Password" type="password"
                               sx={{backgroundColor: 'white', borderRadius: '4px'}}/>

                    <Button id="sign-up-button" type="submit" fullWidth sx={{mt: 3, mb: 3}}> Sign Up </Button>
                    <Link to="/login"> {"Already have an account? Sign In"} </Link>
                </Box>
            </Container>
        </div>
    )
}

export default Signup;
