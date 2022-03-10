import './Signup.css';
import { Container, Box, TextField, Avatar, Button} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";

function Signup(){

    const history = useHistory();

    const HandleSubmit = (event) => {
        event.preventDefault();
        const user = event.target.username.value;
        const pass = event.target.password.value;
        const email = event.target.email.value;
        const name = event.target.name.value;
        signup(user, email, pass, name, []);
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
                    <h2 id="sign-up">Sign Up</h2>

                    <TextField fullWidth name = "email" margin = 'normal' className = "fields" required label="Email Address"/>
                    <TextField fullWidth name = "name" margin = 'normal' className = "fields" required label="Name"/>
                    <TextField fullWidth name = "username" margin = 'normal' className = "fields" required label="Username"/>
                    <TextField fullWidth name = "password" margin = 'normal' className = "fields" required label="Password" type="password"/>

                    <Button id="sign-up-button" type="submit" fullWidth sx={{mt: 3, mb: 3}}> Sign Up </Button>
                    <Link to="/login"> {"Already have an account? Sign In"} </Link>
                </Box>
            </Container>
        </div>
    )
}

export default Signup;
