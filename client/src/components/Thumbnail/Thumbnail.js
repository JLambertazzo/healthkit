import './Thumbnail.css'
import Box from '@mui/material/Box';

function Thumbnail() {
    return (
        <Box sx={{boxShadow: 1}} className="thumbnail">

            <p>Handwashing in Hospitals</p>
            <p>~Progress bar~</p>
            <p>Changed Dec. 28, 2021</p>

        </Box>
    );
}

export default Thumbnail;
