import './Navbar.css'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <div className="nav">
            <div className="navTitle">
                <h2>Health Scores</h2>
            </div>
            <div className="navIcon">
                <IconButton >
                    <AccountCircleIcon
                        sx={{color: "#8C99A0", fontSize: '1.5em'}}
                    /></IconButton>
            </div>

        </div>
    );
}

export default Navbar;
