import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../models/UsuarioModel';
import { busca, buscaId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css'

function Perfil() {

  const { id } = useParams<{ id: string }>();
    
    const [users, setUsers] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        localidade: ''
    })

    const [endImg, setEndImg] = useState('./perfil.png');
  
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

    return(
        <>
          <Box className="profileImageContainer">
            {users.foto ? <img className="profileImage" src={ users.foto } alt={users.nome} /> : <img className='profileImage' src={endImg}/>}
            <Typography className="profile-name">{users.nome}</Typography>
            <Typography className="profile-email">{users.usuario}</Typography>
            <Typography className="profile-local">{users.localidade}</Typography>
            <hr className='linha-perfil' />
          </Box>

        </>
    );
}

export default Perfil;