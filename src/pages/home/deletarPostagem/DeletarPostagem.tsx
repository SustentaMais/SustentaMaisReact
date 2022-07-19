import React, { useEffect, useState } from 'react'
import { Typography, Card, CardActions, CardContent } from "@material-ui/core"
import { Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {buscaId, deleteId} from '../../../services/Service';
import PostagemModel from '../../../models/PostagemModel';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';



function DeletarPostagem(idPost: any) {

    let navigate = useNavigate();
    const id = idPost.idPost.id;
    const [post, setPosts] = useState<PostagemModel>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    


    useEffect(() => {
        if (token == "") {
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
        navigate('/home')
        deleteId(`/postagem/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Postagem deletada com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    }

    function nao() {
        navigate('/home')
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