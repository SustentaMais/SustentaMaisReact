import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { buscaId, deleteId } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import TemaModel from '../../../models/TemaModel';
import { Box } from '@mui/material';



function DeletarTema() {
  
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [tema, setTema] = useState<TemaModel>();
  const [token, setToken] = useLocalStorage('token');
  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login");
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/tema/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          navigate('/tema')
          deleteId(`/tema/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          alert('Tema deletado com sucesso');
        }
      
        function nao() {
          navigate('/tema')
        }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.tema}
              </Typography>
              <Typography color="textSecondary">
                {tema?.categoria}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;