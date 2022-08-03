import Patrocinados from '../../components/estaticos/patrocinados/Patrocinados';
import SideBar from '../../components/estaticos/sidebar/SideBar';
import ListaPostagem from './listaPostagem/ListaPostagem';
import './Home.css';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
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
      <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon  style={{ color: "white" }}/>
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon style={{ color: "white" }}/>
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon style={{ color: "white" }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid >
  )
}

export default Home;