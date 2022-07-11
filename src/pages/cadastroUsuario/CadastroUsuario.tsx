import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, TextField, } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/UsuarioModel';
import { cadastroUsuario } from '../../services/Service';
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
        if (usuarioResult.id !== 0) {
            navigate("/login")
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
         if (confirmarSenha === usuario.senha) {
             cadastroUsuario(`/usuario/cadastrar`, usuario, setUsuarioResult)
             alert('Usuário Cadastrado Com Sucesso!!!')
         } else {
              alert('Dados Inconsistentes. Favor verificar as informações de cadastro!')
        }
      }
    


    return (
        <Grid container className='gridLogin'>

            <Grid item sm={6} className='centraliza'>

                {/* <img src="https://i.imgur.com/12aTZJR.png" alt="logoSustentaMais" className='logo'/> */}
                <Box className='retangulo3'>
                    <Box className='forms'>
                        <form onSubmit={onSubmit}>
                            <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' />
                            <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' />
                            <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' type='password' />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' />
                            <TextField id='foto' label='Foto (Opcional)' variant='outlined' name='foto' />
                            <TextField id='localidade' label='Localidade (Opcional)' variant='outlined' name='localidade' margin='normal' />
                            <Box marginTop={2} className='button'>
                                <Link to='/visitantes' className='text-decorator-none'>
                                    <Button className='button'>
                                        Cancelar
                                    </Button>
                                </Link>
                                {/* <Link to='/login' className='text-decorator-none'> */}
                                    <Button type='submit' className='button'>
                                        Cadastrar
                                    </Button>
                                {/* </Link> */}
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Grid>

            <Grid item sm={6} className='centraliza'>
                <Box className='retangulo4'>
                    <img src="https://i.imgur.com/zW3Yj5R.png" alt="hexagonos" className='hexagonos' />
                    <Box className='texto'>
                        A rede que te inspira a ser mais sustentável!
                    </Box>
                    <img src="https://i.imgur.com/mrfJjEl.png" alt="hexagonos" className='hexagonosBot' />
                </Box>
            </Grid> 

        </Grid>
    );

    //deixa ele acessível para outros componentes
}

export default CadastrarUsuario;
