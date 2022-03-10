import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Dashboard(props) {
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
                    {props.user.receivedForms.map((form) => {
                        return (<Thumbnail
                            value={0}
                            date={"Mar 10, 2022"}
                            complete={form.isSubmitted}
                            title={form.name}
                        />)
                    })}

                    {/*<Thumbnail*/}
                    {/*    value={25}*/}
                    {/*    date={"Jan. 3, 2022"}*/}
                    {/*    complete={false}*/}
                    {/*    title={"Handwashing in Hospitals"}*/}
                    {/*/>*/}
                    {/*<Thumbnail*/}
                    {/*    value={55}*/}
                    {/*    date={"Nov. 12, 2021"}*/}
                    {/*    complete={true}*/}
                    {/*    title={"Pediatric Emergency Care Assessment"}*/}
                    {/*/>*/}

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

export default Dashboard;
