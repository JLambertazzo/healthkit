import './Thumbnail.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router-dom';
import { deleteForm } from '../../actions/form';

function OwnThumbnail(props) {
    const history = useHistory()
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
                    <IconButton sx={{padding: '5px'}} onClick={() => history.push(`/editform/${props.id}`)}>
                        <EditIcon sx={{color: '#a9a9a9'}}/>
                    </IconButton>
                    </Tooltip>
                    <Tooltip title={"Delete"}>
                    <IconButton sx={{padding: '5px'}} onClick={props.onDelete}>
                        <DeleteIcon sx={{color: '#a9a9a9'}}/>
                    </IconButton>
                    </Tooltip>
           </Box>


        </Box>
    );
}

export default OwnThumbnail;
