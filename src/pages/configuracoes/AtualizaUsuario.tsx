import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../models/UsuarioModel';
import { TokenState } from '../../store/tokens/tokensReducer';
import { buscaId, put } from '../../services/Service';
import { addToken } from '../../store/tokens/actions';

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
        user.postagem=null
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

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário atualizado, por favor use suas credenciais atualizadas', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item alignItems='center' >
                    <Box paddingX={10} marginY={10} className='cardCadastro'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h4' align='center' className="textos1">Editar Perfil</Typography>

                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Link da Foto' variant='outlined' name='foto' margin='normal' fullWidth />

                            <TextField value={user.localidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="local" label="localidade" name="local" variant="outlined" margin="normal" placeholder='Insira a sua localidade' fullWidth />

                        {/*    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />*/}

                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <Box marginTop={2} textAlign='center'>
                                <Link to="/perfil" className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
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
            </Grid>
        </>
    )
}

export default AtualizarUsuario;