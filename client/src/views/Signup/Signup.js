import './Signup.css';
import { Container, Box, TextField, Avatar, Button} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/user';

function Signup(){

    const handleSubmit = (event) => {
        // event.preventDefault();
        // const user = event.target.username;
        // const pass = event.target.password;
        // const email = event.target.email;
        // const group = event.target.group;
        // signup(user, email, pass, group);
    }

    return(
        <div id = "dash">
            <div className="nav">
                <div className="navTitle">
                    <h2>Health Scores</h2>
                </div>
            </div>

            <Container className = "sign-up-box" maxWidth="xs" sx={{ borderRadius: 15 }}>
                <Box onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(21, 82, 126)' }}>
                        <LockOutlined />
                    </Avatar>
                    <h2 id="sign-up">Sign Up</h2>
                    
                    <TextField fullWidth name = "email" margin = 'normal' className = "fields" required label="Email Address"/>
                    <TextField fullWidth name = "username" margin = 'normal' className = "fields" required label="Username"/>
                    <TextField fullWidth name = "password" margin = 'normal' className = "fields" required label="Password" type="password"/>
                    <TextField fullWidth name = "group" margin = 'normal' className = "fields" required label="Group"/>
                    
                    <Button id="sign-up-button" type="submit" fullWidth sx={{mt: 3, mb: 3}}> Sign Up </Button>
                    <Link to="/login"> {"Already have an account? Sign In"} </Link>
                </Box>
            </Container>
        </div>
    )
}

export default Signup;