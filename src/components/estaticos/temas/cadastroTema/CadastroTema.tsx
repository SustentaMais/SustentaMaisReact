import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/tokensReducer';
import { buscaId, post, put } from '../../../../services/Service';
import TemaModel from '../../../../models/TemaModel';



function CadastroTema() {
    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [temas, setTema] = useState<TemaModel>({
        id: 0,
        tema: '',
        categoria: ''
    })

    useEffect(() => {
        if(token == ''){
            alert('Você precisa estar logado')
            navigate('/login');
        }
    },[token])

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    },[id])

    async function findById(id:string) {
        buscaId(`/tema/${id}`, setTema,{
            headers:{
                'Authorization': token
            }
        })
        
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>){
        setTema({
            ...temas,
            [e.target.name]:e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(temas))

        if (id !== undefined) {
            console.log(temas)
            put(`/tema`, temas, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/tema`, temas, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate ('/tema')
    }

   
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={temas.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="tema" variant="outlined" name="tema" margin="normal" fullWidth />
                <TextField value={temas.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="categoria" label="categoria" variant="outlined" name="categoria" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}
export default CadastroTema;