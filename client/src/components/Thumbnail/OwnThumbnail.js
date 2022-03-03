import './Thumbnail.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

function OwnThumbnail(props) {
    return (
        <Box sx={{boxShadow: 1}} className="thumbnail own-thumbnail">

            <p className="form-title" style={{marginBottom: '0.5rem', marginTop: 0}}>{props.title}</p>
           <Box>
                    <p style={{fontSize: '12px', color: '#8C99A0', margin: 0}}>Created {props.date}</p>
                    <Tooltip title={"Preview"}>
                    <IconButton sx={{padding: '5px', marginRight: '5px'}}>
                        <VisibilityIcon sx={{color: '#a9a9a9'}}/>
                    </IconButton>
                    </Tooltip>
                    <Tooltip title={"Edit"}>
                    <IconButton sx={{padding: '5px'}}>
                        <EditIcon sx={{color: '#a9a9a9'}}/>
                    </IconButton>
                    </Tooltip>
           </Box>


        </Box>
    );
}

export default OwnThumbnail;