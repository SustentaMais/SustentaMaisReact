import { Grid } from '@mui/material';
import * as React from 'react';
import SideBar from '../../sidebar/SideBar';
import NavbarMain from '../NavbarMain';

function Side_Navbar(){
    return(
        <>
        <Grid container>
            <Grid item sm={3}>
                <SideBar/>
            </Grid>
            <Grid item sm={9}>
                <NavbarMain/>
            </Grid>
        </Grid>
        </>
    );
}

export default Side_Navbar;