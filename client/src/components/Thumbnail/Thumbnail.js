import './Thumbnail.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function Thumbnail(props) {
    return (
        <Box sx={{boxShadow: 1}} className="thumbnail">

            <p className="form-title">Handwashing in Hospitals</p>
            <Box className="progress-cont">
                <LinearProgress variant={"determinate"} value={props.value}
                                sx={{backgroundColor: '#F4F5F6',  height: 8,
                                    borderRadius: 5,}}

                />
                <p style={{fontSize: '12px', margin: '0 10px', color: '#8C99A0'}}>{Math.round(props.value)}%</p>
            </Box>
            <p style={{fontSize: '12px', color: '#8C99A0'}}>Changed Dec. 28, 2021</p>

        </Box>
    );
}

export default Thumbnail;
