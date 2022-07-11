import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import PostagemModel from '../../../models/PostagemModel';
import useLocalStorage from 'react-use-localstorage';

function ListaPostagem() {

  const [posts, setPosts] = useState<PostagemModel[]>([])
  
  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if(token == ''){
      alert("Você precisa estar logado")
      navigate('/login')
    }
  }, [token])

  async function getPost() {
    await busca("/postagem", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
    {
      posts.map(post => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.conteudo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.anexos}
            </Typography>
            <Typography variant="body2" component="p">
              Tema: {post.tema?.tema}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              Postado por: {post.usuario?.nome}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {post.data}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/criarpostagem/${post.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft btn-update" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarpostagem/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button className='btn-delete' variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>)
}

export default ListaPostagem;