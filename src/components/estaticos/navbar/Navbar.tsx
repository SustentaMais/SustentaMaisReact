import { Box, Typography } from '@mui/material';
import react from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <Box id='navbar'>
                <img src="https://i.imgur.com/zHAbLlb.png" id='logoNavbar' alt="" />
                <Link to='/login'>
                    <Typography>Login</Typography>
                </Link>
            </Box>

        </>
    )
}
export default Navbar;