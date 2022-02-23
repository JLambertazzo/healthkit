import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
    return (
        <div>
        <Navbar/>
        <div className="dashboard">


            <div className="dash-side">
                <Sidebar
                    current="recent"
                />
            </div>
            <div className="dash-main">
                {/*<h1>Dashboard</h1>*/}
                <div className="thumb-list">
                    <Thumbnail
                        value={75}
                        date={"Dec. 28, 2021"}
                        complete={false}
                        title={"Pediatric Emergency Care Assessment"}
                    />
                    <Thumbnail
                        value={25}
                        date={"Jan. 3, 2022"}
                        complete={false}
                        title={"Handwashing in Hospitals"}
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

export default Dashboard;
