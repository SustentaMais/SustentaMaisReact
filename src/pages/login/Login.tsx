import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('')
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            localidade:'',
            token:''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home', {replace: true});
                }
            }, [token])

            async function onSubmit(e: ChangeEvent<HTMLFormElement>){
                e.preventDefault();
                try{
                    await login(`/usuario/logar`, userLogin, setToken)
    
                    toast.success('Usuário logado com sucesso!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                        progress: undefined,
                        });
                }catch(error){
                    toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                        progress: undefined,
                        });
                }
            }

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
                        <form onSubmit={onSubmit}>
                            <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail ou nome de usuário' variant='outlined' name='usuario'  />
                            <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password'/>
                            <Box marginTop={2}>
                                    <Button type='submit' id='entrarButton'>
                                        Entrar
                                    </Button>
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
                                <Link to='/cadastro' className='text-decorator-none'>
                                    <Button id='conta'> Criar conta</Button>
                                </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Login;