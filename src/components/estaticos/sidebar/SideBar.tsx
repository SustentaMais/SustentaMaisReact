import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './SideBar.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FeedIcon from '@mui/icons-material/Feed';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Usuario from '../../../models/UsuarioModel';
import { buscaId } from '../../../services/Service';
import { useEffect, useState } from 'react';

function SideBar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [users, setUsers] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        localidade: ''
    })

    //buscar o ID armazenado no Store do redux
    const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
    )

  async function getUserId() {
    await buscaId(`/usuario/${userId}`, setUsers, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getUserId()
  }, [])
      
    var sidebar;
    if(token!=''){
    sidebar = <Grid container sm={3} id='sidebarRender'>
        <Grid id='sidebarContainer'>
            <Grid item >
                <Box display='flex' id='DadosDoUsuario'>
                    <Box>
                        <img src="https://i.imgur.com/SZFQZVj.png" alt="ProfilePic" />
                        <Typography>{users.nome}</Typography>
                    </Box>

                    <Typography>oo</Typography>
                </Box>
            </Grid>
            <hr id='divisor' />
            <Grid item >
                <Box id='menuOptions'>
                    <ul>
                        <li >
                            <Link to='/perfil'>
                                <Box className='iconsUl' >
                                    <PermIdentityIcon className='iconsUl' />
                                    Perfil
                                </Box>
                            </Link>
                            
                        </li>


                        <li>
                            <Link to='/home'>
                                <Box className='iconsUl' >
                                    <FeedIcon className='iconsUl' />
                                    Feed
                                </Box>
                            </Link>
                            
                        </li>


                        <li>
                            <Link to='/eventos'>
                                <Box className='iconsUl' >
                                    <EventAvailableIcon className='iconsUl' />
                                    Eventos
                                </Box>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to='/configuracoes'>
                                <Box className='iconsUl' >
                                    <SettingsIcon className='iconsUl' />
                                    Configurações
                                </Box>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to='/sobre'>
                                <Box className='iconsUl' >
                                    <PeopleAltIcon className='iconsUl' />
                                    Sobre Nós
                                </Box>
                            </Link>
                            
                        </li>
                    </ul>
                </Box>

            </Grid >
        </Grid >

    </Grid >
    }
    return (
        <>
            <Box padding='5px'>
                {sidebar}
            </Box>

        </>
    )
}
export default SideBar;