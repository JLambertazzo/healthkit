import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className={props.current === 'recent' ? "current" : ""}><Link to='/home'>Recent Forms</Link></li>
                <li className={props.current === 'myforms' ? "current" : ""}><Link to='/myforms'>My Forms</Link></li>
            </ul>

        </div>
    );
}

export default Sidebar;
