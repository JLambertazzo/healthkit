import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import OwnThumbnail from "../../components/Thumbnail/OwnThumbnail";
import SentThumbnail from "../../components/Thumbnail/SentThumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
import './MyForms.css'
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function MyForms(props) {
    return (
        <div>
            <Navbar/>
            <div className="dashboard">

                <div className="dash-side">
                    <Sidebar
                    current="myforms"
                    />
                </div>
                <div className="dash-main myforms">
                    <h2>Created Forms</h2>
                    <div className="thumb-list myforms">
                        {props.user.sentForms.map((form) => {
                            return (<OwnThumbnail
                                title={form.name}
                                date={"Dec. 28, 2021"}
                            />)
                        })}

                    </div>
                    <h2>Sent Forms</h2>
                    <div className="thumb-list myforms">
                        {props.user.sentForms.map((form) => {
                            return (<SentThumbnail
                                title={form.name}
                                org={"SickKids"}
                                complete={form.isSubmitted}
                            />)
                        })}
                    </div>
                    <div className="action-btn-cont">
                        <Fab className="action-btn" variant="extended">
                            <AddIcon sx={{ mr: 1 }} />
                            Create Form
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyForms;
