import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='gridLogin'>
            <Grid item sm={6} className='centraliza'>
                <Box className='retangulo1'>
                    <img src="https://i.imgur.com/zW3Yj5R.png" alt="hexagonos" className='hexagonos'/>
                    <Box className='texto'>
                        A rede que te inspira a ser mais sustentável!
                    </Box>
                    <img src="https://i.imgur.com/mrfJjEl.png" alt="hexagonos" className='hexagonosBot'/>
                </Box>
            </Grid>

            <Grid item className='centraliza' sm={6}>
                <img src="https://i.imgur.com/12aTZJR.png" alt="logoSustentaMais" className='logo'/>
                <Box className='retangulo2'>
                    <Box className='forms'>
                        <form>
                            <TextField id='usuario' label='E-mail ou nome de usuário' variant='outlined' name='usuario'  />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password'/>
                            <Box marginTop={2} className='button'>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' id='entrarButton'>
                                        Entrar
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box textAlign='center'>
                            <Box className='box1'>
                                <hr style={{ width: "5.5rem" }} />
                                <Typography id='ou'>  ou</Typography>
                                <hr style={{ width: "5.5rem" }} />
                            </Box>
                            <Button id='google'>
                                <img className='googleIcon' src={require("../../assets/img/Google.png")} />
                                Entrar com o Google
                            </Button>
                            <Box id='esqueci'>
                                <Box>
                                    <Button id='conta'> Criar conta</Button>
                                </Box>
                                <Button id='novaSenha'>Esqueci minha senha</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Login;