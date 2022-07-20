import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Grid, Container } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token === "") {
        footerComponent = 
        <Box px={{ xs: 2, sm: 9}} py={{ xs: 4, sm: 9}} className='box-footer'>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1} className='titulo-footer'>Sobre</Box>
                        <Box>
                            <Link to='/sobre' className='texto-footer'>
                                Sobre Nós
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/' className='texto-footer'>
                                Equipe
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/' className='texto-footer'>
                                Conquistas
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1} className='titulo-footer'>Conta</Box>
                        <Box>
                            <Link to='/login' className='texto-footer'>
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/cadastro' className='texto-footer'>
                                Cadastro
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1} className='titulo-footer'>Ajuda e Suporte</Box>
                        <Box>
                            <Link to='/' className='texto-footer'>
                                Dúvidas frequentes
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/' className='texto-footer'>
                                Contato
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/' className='texto-footer'>
                                Sugestões
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1} className='titulo-footer'>Social</Box>
                        <Box className='icon-footer'>
                            <a href="https://github.com/SustentaMais" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                        <Box className='icon-footer'>
                            <a href="mailto:sustentamais52@gmail.com" target="_blank">
                                <EmailIcon className='redes' />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 4, sm: 9}} pb={{ xs: 4, sm: 0}}>
                    © 2022 Copyright: <a href='/' className='texto-footer'>Sustenta+</a>
                </Box>
            </Container>
        </Box>
    }

    return (
        <>
            {footerComponent}
        {/*
            <Grid justifyContent="center" alignItems="center" item sm={12} className='footer'>
                <Box className='box2'>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/SustentaMais" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="mailto:sustentamais52@gmail.com" target="_blank">
                            <EmailIcon className='redes' />
                        </a>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        <a className='textoCor' target="_blank" href="https://github.com/SustentaMais">
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Sustenta+</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        */}
        </>
    )
}

export default Footer;