import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './SideBar.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FeedIcon from '@mui/icons-material/Feed';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Usuario from '../../../models/UsuarioModel';
import { buscaId } from '../../../services/Service';
import { useEffect, useState } from 'react';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function SideBar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const [users, setUsers] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        localidade: ''
    })

    //buscar o ID armazenado no Store do redux


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

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/visitante')
    }


    var sidebar;
    if (token !== '') {
        sidebar = <Grid container sm={3} id='sidebarRender'>
            <Grid id='sidebarContainer'>
                <Box id='navSidebar' height={45}>
                    <img src="https://i.imgur.com/zHAbLlb.png" height={40} id='profilePic' alt="" />
                </Box>
                <Grid item >
                    <Box display='flex' id='DadosDoUsuario'>
                        <Box display='flex' alignItems={'center'}>
                            <img src={users.foto} alt='' className='fotosidebar' />
                            <Typography paddingLeft={1}>{users.nome}</Typography>
                        </Box>

                        {/* <Typography>oo</Typography> */}
                    </Box>
                </Grid>
                {/* <hr id='divisor'/> */}
                <Grid item >
                    <Box id='menuOptions'>
                        <ul id='menuSidebar'>
                                <Link to='/perfil'>
                            <li className='listedItem'>
                                    <Box className='iconsUl' >
                                        <PermIdentityIcon className='iconsUl' />
                                         Perfil
                                    </Box>

                            </li>
                                </Link>


                                <Link to='/home'>
                            <li className='listedItem'>
                                    <Box className='iconsUl' >
                                        <FeedIcon className='iconsUl' />
                                        Feed
                                    </Box>

                            </li>
                                </Link>


                                <Link to='/home'>
                            <li className='listedItem'>
                                    <Box className='iconsUl' >
                                        <EventAvailableIcon className='iconsUl' />
                                        Eventos
                                    </Box>

                            </li>
                                </Link>
                                <Link to='/configuracoes'>
                            <li className='listedItem'>
                                    <Box className='iconsUl' >
                                        <SettingsIcon className='iconsUl' />
                                        Configurações
                                    </Box>

                            </li>
                                </Link>
                                <Link to='/sobre'>
                            <li className='listedItem'>
                                    <Box className='iconsUl' >
                                        <PeopleAltIcon className='iconsUl' />
                                        Sobre Nós
                                    </Box>

                            </li>
                                </Link>

                            <li className='listedItem' onClick={goLogout}>

                                <Box className='iconsUl' >
                                    <LogoutIcon className='iconsUl' />
                                    Sair
                                </Box>


                            </li>
                        </ul>
                    </Box>

                </Grid >
            </Grid >

        </Grid >
    }
    return (
        <>
        { sidebar }
        </>
    )
}
export default SideBar;