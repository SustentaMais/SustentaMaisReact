import { Avatar, Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import './Config.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Upload from './Upload';
import Usuario from '../../models/UsuarioModel';
import { buscaId, put } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

function Config() {

    const { id } = useParams<{ id: string }>();
    
    const [users, setUsers] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        localidade: ''
    })
  
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

     //buscar o ID armazenado no Store do redux
     const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

  useEffect(() => {
    if(token == ''){
        toast.error('Você precisa estar logado', {
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
  }, [token])

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

{/*
    //useState para gerar o usuario
    const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    localidade: ''
    })


//para atualizar o usuário
async function findByIdUsuario(id: string) {
    await buscaId(`usuario/${id}`, setUsuario, {
        headers: {
            'Authorization': token
        }
    })
}

function updatedUsuario(e: ChangeEvent<HTMLInputElement>) {

    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })

}

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/usuario`, usuario, setUsuario, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Usuário atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } 
        back()
    }

    function back() {
        navigate('/configuracoes')
    }
*/}

  return (
    <>

        <Grid container marginTop={5} className="grid-maior">
            
            <Upload />
            
            <Grid xs={6} justifyContent='center' alignItems="center">
                <Box width={500} height={450} style={{backgroundColor: "#d7eba5"}}>
                    <Typography className="user-titulo">Dados do Usuário</Typography>
                    <hr/>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Nome</p>
                        <EditIcon /> 
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.nome}</Typography>
                   {/*value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}*/}
                    <Box paddingX={4} className='atributos-user'>
                       <p>Email</p>
                        <EditIcon /> 
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.usuario}</Typography>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Localidade</p>
                        <EditIcon /> 
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.localidade}</Typography>
                    <Typography className='trocar-senha' paddingX={4}>Alterar Senha <EditIcon /> </Typography>
                </Box>
            </Grid>
            
        </Grid>

    </>
  )
}

export default Config;