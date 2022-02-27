import './Thumbnail.css'
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function SentThumbnail(props) {
    return (
        <Box sx={{boxShadow: 1}} className="thumbnail sent-thumbnail">

            <p className="form-title" style={{marginBottom: '0.5rem', marginTop: 0}}>{props.title}</p>
            <hr/>
            <p className="form-title org-title" style={{marginBottom: '1rem', marginTop: 0}}>{props.org}</p>
                {props.complete && (<Box>
                    <Button className="dash-results" variant="contained" disableElevation>
                        Results <BarChartIcon/>
                    </Button>
                </Box>)}
            {!props.complete && (<Box>
                <p className="progressText">In progress <AccessTimeIcon/></p>
            </Box>)}



        </Box>
    );
}

export default SentThumbnail;
