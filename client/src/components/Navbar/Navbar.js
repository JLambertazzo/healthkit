import './Navbar.css'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav">

            <div className="navTitle">
                <h2><Link to='/' style={{textDecoration: 'none', color:"white"}}> Health Kit</Link></h2>
            </div>
            <div>
            </div>
            <div className="navIcon">
                <Link to='/profile'><IconButton >
                    <AccountCircleIcon
                        sx={{color: "white", fontSize: '1.5em'}}/></IconButton></Link>
            </div>

        </div>
    );
}

export default Navbar;
