import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, TextField, Typography, } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/UsuarioModel';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';
import SideBar from '../../components/estaticos/sidebar/SideBar';

function CadastrarUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            localidade: ""

        })
    const [usuarioResult, setUsuarioResult] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            localidade: ""

        })

    useEffect(() => {
        if (usuarioResult.id !== 0) {
            navigate("/login", { replace: true })
        }
    }, [usuarioResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    function implementacoes() {

        toast.info('Implementação futura', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
            progress: undefined,
        });

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuario/cadastrar`, usuario, setUsuarioResult)
                toast.success('Usuario cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {

                //Pode modificar a msg de acordo com o erro 
                toast.error('Usuário já existente', {
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

        } else {
            toast.error('Insira no miníno 8 caracteres na senha.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }



    return (
        <>
            <Grid sm={3}>
                <SideBar />
            </Grid>
            <Grid container className='gridLogin'>


                <Grid item className='centraliza' id='gridCadastro' sm={6} xs={12}>
                    <Box id='boxCadastro'>
                        <img src="https://i.imgur.com/12aTZJR.png" alt="logoSustentaMais" id='logoCadastro' />
                        <Box id='boxFormCadastro'>
                            <form onSubmit={onSubmit}>
                                <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' placeholder='Nome' variant='outlined' name='nome' />
                                <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' placeholder='E-mail' variant='outlined' name='usuario' margin='normal' />
                                {/* <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' placeholder='Foto (Opcional)' variant='outlined' name='foto' margin='normal' /> */}
                                <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' placeholder='Senha' variant='outlined' name='senha' type='password' />
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} className='inputForm' placeholder='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' />
                                <Box marginTop={2}>
                                    <Button type='submit' id='cadastrarButton'>
                                        Cadastrar
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Box textAlign='center'>
                                {/* <Box className='box1'>
                                    <hr style={{ width: "5.5rem" }} />
                                    <Typography id='ouCad'>  ou</Typography>
                                    <hr style={{ width: "5.5rem" }} />
                                </Box> */}
                                <Button id='googleCad' onClick={implementacoes}>
                                    <img className='googleIcon' src={require("../../assets/img/Google.png")} />
                                    Entrar com o Google
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item sm={6} className='centraliza' id='gridSecundario'>
                    <Box className='retangulo4'>
                        <img src="https://i.imgur.com/zW3Yj5R.png" alt="hexagonos" className='hexagonos' />
                        <Box className='texto'>
                            A rede que te inspira a ser mais sustentável!
                        </Box>
                        <img src="https://i.imgur.com/mrfJjEl.png" alt="hexagonos" className='hexagonosBot' />
                    </Box>
                </Grid>

            </Grid>
        </>
    );

    //deixa ele acessível para outros componentes
}

export default CadastrarUsuario;