import './Navbar.css'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <div className="nav">

            <div className="navTitle">
                <h2>Health Kit</h2>
            </div>
            <div>
            </div>
            <div className="navIcon">
                <IconButton >
                    <AccountCircleIcon
                        sx={{color: "white", fontSize: '1.5em'}}
                    /></IconButton>
            </div>

        </div>
    );
}

export default Navbar;
