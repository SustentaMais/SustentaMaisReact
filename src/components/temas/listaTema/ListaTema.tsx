import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import './ListaTema.css';
import {busca} from '../../../services/Service'
import TemaModel from '../../../models/TemaModel';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<TemaModel[]>([])
  
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


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

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Categoria: {tema.categoria}
            </Typography>
            <Typography variant="h5" component="h2">
              Tema: {tema.tema}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/cadastrotema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft btn-update" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletartema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="btn-delete" size='small' color="secondary">
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
    </>
  );
}


export default ListaTema;