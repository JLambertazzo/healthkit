import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Profile.css';

function Profile(){
    return(
        <div>
            <Navbar/>
            <div className = "dashboard">
                <div className = "dash-side">
                    <Sidebar
                        current=""
                    />
                </div>
                <div className = "dash-main">
                    <div className = "profile">
                        <div className = "profile-pic">
                            <AccountCircleIcon
                                sx={{color: "#8C99A0", fontSize: '15em'}}
                            />
                        </div>
                        <div className = "profile-info">
                            <h2> User's Name </h2>
                            <span className = "user-info"> username </span>
                            <span className = "user-info"> name@email.com </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;