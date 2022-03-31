import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import './Profile.css';
import {logout} from "../../actions/user";
import Button from "@mui/material/Button";
import GroupIcon from '@mui/icons-material/Group'
import EmailIcon from '@mui/icons-material/Email'

function Profile(props){
    return(
        <div>
            <Navbar/>
            <div className = "dashboard">
                <div className = "dash-side">
                    <Sidebar
                        current=""
                    />
                </div>
                <div className = "dash-main profile-main">
                    <Button variant="contained" disableElevation className={"logout-btn"}
                            onClick={() => {logout()}}>Log out</Button>
                    <Box sx={{boxShadow: 1}} className = "profile">
                            {/*<div className = "profile-pic">*/}

                            {/*</div>*/}
                            <div className = "profile-info">
                                <AccountCircleIcon
                                    sx={{color: "#8C99A0", fontSize: '10em'}}
                                />
                                <div className="user-info-cont" style={{rowGap: '1rem'}}>
                                    <div className="user-info-cont">
                                    <h2 style={{marginBottom: 0}}>{props.user.name}</h2>
                                    <span className="profile-username">@{props.user.username || 'judy'} / <span className = "profile-email">{props.user.email || 'judy@hotmail.com'}</span>  </span>
                                        <div className="profile-group">
                                            <GroupIcon
                                                sx={{fontSize: '2em'}}
                                            />
                                            <p>{(props.user.group || []).map((el) => {
                                                return(<p>{el.name}</p>)
                                            }) || 'Boston Childrens Hospital'}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Profile;
