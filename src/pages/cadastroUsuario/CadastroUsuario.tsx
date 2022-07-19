import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, TextField, Typography, } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/UsuarioModel';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

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
        if (usuarioResult.id != 0) {
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
    
    function implementacoes() {

        toast.info('Função em Andamento', {
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


    return (
        <Grid sm={12} container direction='row' justifyContent='center' alignItems='center' className='gridLogin'>
            <Box display="flex" flexDirection="row" className='boxCadastroTotal'>
                    <Grid item className='centraliza' sm={6}>
                    <img src="https://i.imgur.com/12aTZJR.png" alt="logoSustentaMais" id='logoCadastro'/>
                    <Box className='boxCadastro centraliza'>
                        <Box className='boxFormCadastro'>
                            <form className='form-login' onSubmit={onSubmit}>
                                <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' label='Nome*' variant='outlined' placeholder='Insira seu nome' name='nome' fullWidth/>
                                <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' label='E-mail*' variant='outlined' placeholder='Insira seu e-mail' name='usuario' margin='normal' fullWidth/>
                                <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='inputForm' label='Foto (opcional)' variant='outlined' placeholder='Insira o link da foto' name='foto' margin='normal' fullWidth/>
                                <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}className='inputForm' label='Senha*' variant='outlined' placeholder='Senha maior de 8 caracteres' name='senha' type='password' fullWidth/>
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} className='inputForm' label='Confirmar Senha*' variant='outlined' placeholder='Confirme sua senha' name='confirmarSenha' margin='normal' type='password' fullWidth/>
                                <Box marginTop={2}>
                                    <Button type='submit' id='entrarButton'>Cadastrar</Button>
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
                                    <Button id='google' onClick={implementacoes}>
                                        <img className='googleIcon' src={require("../../assets/img/Google.png")} />
                                        Usar o Google
                                    </Button>
                                    <Link to='/'>
                                        <Typography id='cancelar'>Cancelar</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                <Grid item sm={5} className='centraliza'>
                        <Box className='retangulo1'>
                            <img src="https://i.imgur.com/zW3Yj5R.png" alt="hexagonos" className='hexagonos'/>
                            <Box className='texto'>
                                A rede que te inspira a ser mais sustentável!
                            </Box>
                            <img src="https://i.imgur.com/mrfJjEl.png" alt="hexagonos" className='hexagonosBot'/>
                        </Box>
                </Grid>
            </Box>
            

        </Grid>
    );

    //deixa ele acessível para outros componentes
}

export default CadastrarUsuario;