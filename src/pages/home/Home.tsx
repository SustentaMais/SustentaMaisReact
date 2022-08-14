import Patrocinados from '../../components/estaticos/patrocinados/Patrocinados';
import SideBar from '../../components/estaticos/sidebar/SideBar';
import ListaPostagem from './listaPostagem/ListaPostagem';
import './Home.css';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import { Grid } from '@mui/material';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});
function Home() {

  return (
    <Grid display='flex' className='scroll' container id='homeContainer'>
      <Grid sm={3} id='sideBarGrid'>
        <SideBar />
      </Grid>
      <Grid sm={6} className='scroll' id='feed'>
        <ListaPostagem />
      </Grid>
      <Grid sm={3} className='scroll' id='produtosParceiros'>
        <Patrocinados />
      </Grid>
    </Grid >
  )
}

export default Home;