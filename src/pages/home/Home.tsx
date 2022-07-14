import { Box, Grid } from '@mui/material';
import React from 'react'
import Navbar from '../../components/estaticos/navbar/Navbar';
import SideBar from '../../components/estaticos/sidebar/SideBar';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';

function Home() {
  return (
    <Grid display='flex' container id='homeContainer'>
      <Grid sm={3}>
      </Grid>
      <Grid sm={9} id='feed'>
        <ListaPostagem />
      </Grid>
    </Grid>
  )
}

export default Home;