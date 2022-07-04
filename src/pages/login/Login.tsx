import React from 'react';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import { Box } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center'>
             <Grid xs={6}> 
                    <Box className='retangulo1'>
                        {/* <Box className='test'> */}
                            <Box className='comeia1'></Box>
                            {/* <Box className='comeia2'></Box>  */}
                        {/* </Box>  */}
                        <Box className='texto'>
                             A rede que te inspira a ser mais sustentável!
                        </Box>
                        {/* <Box className='comeia3'></Box>
                        <Box className='comeia4'></Box> */}
                    </Box>               
             </Grid>

            <Grid alignItems='center' xs={6}>
                    <Box className='logo'></Box>
                    <Box padding={8} className='retangulo2'>
                        <form>
                            <TextField id='usuario' label='E-mail ou nome de usuário' variant='outlined' name='usuario' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} className='button'>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit'>
                                        Entrar
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                            <Box display='flex' justifyContent='center'>
                                <Box>     
                                    <Box className='box1'>
                                        <hr style={{width:"100px"}}/>
                                         <Typography id='ou'>  ou</Typography>
                                        <hr style={{width:"100px"}}/>
                                    </Box>
                                    <Button id='google'>
                                        <img className='googleIcon' src={require ("../../assets/img/Google.png")} />
                                        Entrar com o Google
                                    </Button>
                                    <Box className='box2'>
                                        <Button id='conta'> Criar conta</Button>
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