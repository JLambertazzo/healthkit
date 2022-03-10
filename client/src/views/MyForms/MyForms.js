import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import OwnThumbnail from "../../components/Thumbnail/OwnThumbnail";
import SentThumbnail from "../../components/Thumbnail/SentThumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
import './MyForms.css'

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
                </div>
            </div>
        </div>
    );
}

export default MyForms;
