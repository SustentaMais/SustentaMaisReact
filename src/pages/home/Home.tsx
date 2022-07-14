import { Box, Grid } from '@mui/material';
import React from 'react'
import ListaPostagem from './listaPostagem/ListaPostagem';


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