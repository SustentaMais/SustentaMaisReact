import React, { useEffect, useState } from 'react'
import { Typography, Card, CardActions, CardContent } from "@material-ui/core"
import { Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {buscaId, deleteId} from '../../../services/Service';
import PostagemModel from '../../../models/PostagemModel';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



function DeletarPostagem() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<PostagemModel>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    


    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/postagem/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/postagem')
        deleteId(`/postagem/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Postagem deletada com sucesso')
    }

    function nao() {
        navigate('/postagem')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography color="textSecondary">
                            {post?.titulo}
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
                            <Box>
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

export default DeletarPostagem;