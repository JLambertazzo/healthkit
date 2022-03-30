import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import OwnThumbnail from "../../components/Thumbnail/OwnThumbnail";
import SentThumbnail from "../../components/Thumbnail/SentThumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
import './MyForms.css'
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import { checkLoggedIn } from "../../actions/user";
import { deleteForm } from "../../actions/form";

function MyForms(props) {
    const history = useHistory();
    const [user, setUser] = useState(null) // seperate from user so it reloads every visit

    useEffect(() => {
        checkLoggedIn(setUser);
    }, [])

    const handleDelete = (id) => {
        deleteForm(id)
            .then(_ => {
                setUser(prev => {
                    const copy = {...prev}
                    copy.sentForms = copy.sentForms.filter(form => form._id.toString() !== id.toString())
                    return copy;
                })
            })
            .catch(console.error)
    }

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
                        {user && user.sentForms.map((form) => {
                            return (!form.isSubmitted && <OwnThumbnail
                                title={form.name}
                                date={"Dec. 28, 2021"}
                                onDelete={() => handleDelete(form._id)}
                                id={form._id}
                            />)
                        })}

                    </div>
                    <h2>Sent Forms</h2>
                    <div className="thumb-list myforms">
                        {user && user.sentForms.map((form) => {
                            return (form.isSubmitted && <SentThumbnail
                                title={form.name}
                                org={"SickKids"}
                                complete={form.isSubmitted}
                            />)
                        })}
                    </div>
                    <div className="action-btn-cont">
                        <Fab className="action-btn" variant="extended" onClick={() => history.push('/createform')}>
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
