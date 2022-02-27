import './Thumbnail.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';

function Thumbnail(props) {
    return (
        <Box sx={{boxShadow: 1}} className="thumbnail">

            <p className="form-title">{props.title}</p>
            {!props.complete && (<Box className="progress-cont">
                <LinearProgress variant={"determinate"} value={props.value}
                                sx={{backgroundColor: '#F4F5F6',  height: 8,
                                    borderRadius: 5,}}

                />
                <p style={{fontSize: '12px', margin: '0 10px', color: '#8C99A0'}}>{Math.round(props.value)}%</p>
                    <p style={{fontSize: '12px', color: '#8C99A0'}}>Changed {props.date}</p>
            </Box>
            )}
            {props.complete && (<Box>
                <Button className="dash-results" variant="contained" disableElevation>
                    Results <BarChartIcon/>
                </Button>
            </Box>)}


        </Box>
    );
}

export default Thumbnail;
