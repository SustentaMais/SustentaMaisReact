import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import {useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../services/Service';
import TemaModel from '../../../models/TemaModel';
import PostagemModel from '../../../models/PostagemModel';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Usuario from '../../../models/UsuarioModel';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<TemaModel[]>([])
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

    const [tema, setTema] = useState<TemaModel>(
        {
            id: 0,
            tema: '',
            categoria: ''
        })
    const [postagem, setPostagem] = useState<PostagemModel>({
        id: 0,
        titulo: '',
        conteudo: '',
        anexos: null,
        data: '',
        tema: null,
        usuario: null
    })

    //buscar o ID armazenado no Store do redux
    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    //useState para gerar o usuario
    const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    localidade: ''
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } else {
            console.log(postagem)
            post(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
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
        navigate('/home')
    }

 
    return (
        <Container maxWidth="sm" className="fundo-criarPost topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='titulo-criarPost'>Criar Postagem</Typography>
                <hr style={{marginBottom: "10px"}}/>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.conteudo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="conteudo" label="conteúdo" name="conteudo" variant="outlined" margin="normal" fullWidth multiline rows={3} />
                <TextField value={postagem.anexos} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="anexos" label="link da imagem" name="anexos" variant="outlined" margin="normal" fullWidth />

                <FormControl fullWidth variant='filled' style={{marginTop: "20px"}}>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.categoria}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color='primary' className='btnCriar'>
                        Publicar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;