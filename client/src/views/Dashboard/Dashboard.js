import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

function Dashboard() {
    return (
        <div>
        <Navbar/>
        <div className="dashboard">


            <div className="dash-side">
            </div>
            <div className="dash-main">
                <h1>Dashboard</h1>
                <div className="thumb-list">
                    <Thumbnail/>
                    <Thumbnail/>
                    <Thumbnail/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
