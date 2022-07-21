import { Grid } from '@mui/material';
import Patrocinados from '../../components/estaticos/patrocinados/Patrocinados';
import SideBar from '../../components/estaticos/sidebar/SideBar';
import ListaPostagem from './listaPostagem/ListaPostagem';
import './Home.css';

function Home() {
  return (
    <Grid display='flex' container id='homeContainer'>
      <Grid sm={3} id='sideBarGrid'>
        <SideBar/>
      </Grid>
      <Grid sm={6} id='feed'>
        <ListaPostagem />
      </Grid>
      <Grid sm={3} id='produtosParceiros'>
        <Patrocinados/>
      </Grid>
    </Grid>
  )
}

export default Home;