import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";

function MyForms() {
    return (
        <div>
            <Navbar/>
            <div className="dashboard">

                <div className="dash-side">
                    <Sidebar
                    current="myforms"
                    />
                </div>
                <div className="dash-main">
                    <div className="thumb-list">
                        <Thumbnail
                            value={75}
                            date={"Dec. 28, 2021"}
                            complete={false}
                            title={"Poop Frequency at Hospitals"}
                        />
                        <Thumbnail
                            value={55}
                            date={"Nov. 12, 2021"}
                            complete={true}
                            title={"Pediatric Emergency Care Assessment"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyForms;
