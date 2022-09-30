import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../models/UsuarioModel';
import { TokenState } from '../../store/tokens/tokensReducer';
import { buscaId, put } from '../../services/Service';
import { addToken } from '../../store/tokens/actions';
import './Config.css'

function AtualizarUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch();

    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        localidade: ''
    });

    useEffect(() => {
        if (token === "") {
            toast.info('Você precisa estar logado.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (userId !== undefined) {
            findById(userId)
        }
    }, [userId]);

    async function findById(id: string) {
        buscaId(`/usuario/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        user.postagem = null
        if (confirmarSenha === user.senha) {
            put(`/usuario/atualizar`, user, setUser, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Usuário atualizado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            navigate('/perfil')
        } else {
            toast.warn('As senhas devem ser as mesmas.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });

            
        }
        window.location.reload();
    }

    function credenciais() {

        toast.warn('Ao atulizar suas credenciais de acesso, será necessário logar novamente com suas novas credenciais', {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }



    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>

                <Box paddingX={10} marginY={10} className='cardCadastro' id='formAtualizar'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h5' className='inputAtualiza' gutterBottom color='textPrimary' component='h5' align='center'>Editar Perfil</Typography>

                        <TextField value={user.nome} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' variant='outlined' placeholder='Insira o seu nome' name='nome' margin='normal' fullWidth />

                        <TextField value={user.foto} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' placeholder='link da foto' variant='outlined' name='foto' margin='normal' fullWidth />

                        <TextField value={user.localidade} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="local" name="local" variant="outlined" margin="normal" placeholder='Insira a sua localidade' fullWidth />

                        <TextField value={user.usuario} onClick={credenciais} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />

                        <TextField value={user.senha} onClick={credenciais} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' variant='outlined' placeholder='insirir senha' name='senha' margin='normal' type='password' fullWidth />

                        <TextField value={confirmarSenha} className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' placeholder='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to="/perfil" className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnEdit'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='btnEdit'>
                                Atualizar
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>
        </>
    )
}

export default AtualizarUsuario;