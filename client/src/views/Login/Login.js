import './Login.css';
import { Container, Box, TextField, Avatar, Button} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link , useHistory } from 'react-router-dom';
import { LoginUser } from '../../actions/user';
import Navbar from "../../components/Navbar/Navbar";

function Login(){

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        LoginUser(email, pass, history);
    }

    return(
        <div id = "dash">
            <Navbar/>

            <Container className = "sign-in-box" maxWidth="xs" sx={{ borderRadius: 15 }}>
                <Box component = "form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(21, 82, 126)' }}>
                        <LockOutlined />
                    </Avatar>
                    <h2 id="sign-in">Log In</h2>

                    <TextField fullWidth margin = 'normal' name = "email" id="email" required label="Email Address"/>
                    <TextField fullWidth margin = 'normal' name = "password" id="pass" required label="Password" type="password"/>

                    <Button id="sign-in-button" type="submit" fullWidth sx={{mt: 3, mb: 3}}> Log In</Button>
                    <Link to="/signup"> {"Don't have an account? Sign Up"} </Link>
                </Box>
            </Container>
        </div>
    )
}

export default Login;
