import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import { useHistory } from 'react-router-dom'
import {FaPlus} from "react-icons/fa";
import {Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button} from "@chakra-ui/react";

function Dashboard(props) {
    const history = useHistory();
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
                <div className="thumb-list">
                    {props.user.receivedForms.map((form) => {
                        return (<Thumbnail
                            form={form}
                            value={0}
                            date={"Mar 10, 2022"}
                            complete={form.isSubmitted}
                            title={form.name}
                        />)
                    })}

                </div>
                <div className="action-btn-cont">
                    <Button className="action-btn" leftIcon={<FaPlus />}
                            bg={'#2f8886'}
                            _hover={{background: '#278280'}}
                            onClick={() => history.push('/createform')}
                            variant='solid'>
                        Create Form
                    </Button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
