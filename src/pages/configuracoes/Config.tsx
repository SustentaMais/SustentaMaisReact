import { Avatar, Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
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
import ModalAtualizaUsuario from './ModalAtualizaUsuario';

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

  return (
    <>

        <Grid container marginTop={5} className="grid-maior">

            <Grid xs={4} justifyContent='center' alignItems="center">
                <form className='form-perfil'>
                    <Box className='caixa-foto' width={300} height={300} style={{backgroundColor: "#d7eba5", borderRadius: "15px"}}>
                        <img src={users.foto} alt={users.nome} width="200" height="200" className='foto-user'/>
                    </Box>
                    {/* <Box className='caixa-dark' width={300} id='switch'height={45} style={{backgroundColor: "#d7eba5", borderRadius: "15px"}}>
                        <p className='texto-dark'>Dark Mode</p>
                        <Brightness4Icon className="dark-icon" />
                    </Box> */}
                    {/* <label htmlFor="wwitch">
                        <input type="checkbox" id='switch' /> Dark Mode
                    </label> */}
                </form>
            </Grid>
            
            <Grid xs={1} justifyContent='center' alignItems="center">
                <Box width={400} height={460} style={{backgroundColor: "#d7eba5", borderRadius: "15px"}}>
                    <Typography className="user-titulo">Dados do Usuário</Typography>
                    <hr/>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Nome</p>
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.nome}</Typography>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Email</p>
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.usuario}</Typography>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Localidade</p>
                    </Box>
                    <Typography className="user-texto" paddingX={4}>{users.localidade}</Typography>
                    <Box paddingX={4} className='atributos-user'>
                       <p>Senha</p>
                    </Box>
                    <Typography className="user-texto" paddingX={4}>***************</Typography>
                    <Box display="flex" justifyContent="center" marginTop="19px">
                        <ModalAtualizaUsuario/>
                    </Box>  
                </Box>
            </Grid>
        </Grid>

    </>
  )
}

export default Config;