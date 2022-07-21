import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, post, put } from '../../../services/Service';
import TemaModel from '../../../models/TemaModel';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';



function CadastroTema() {
    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    const [temasTeste, setTema] = useState<TemaModel>({
        id: 0,
        tema: '',
        categoria: ''
    })

    useEffect(() => {
        if(token ===''){
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
            ...temasTeste,
            [e.target.name]:e.target.value,
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>){
        setTema({
            ...temasTeste,
            [e.target.name]:e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(temasTeste))

        if (id !== undefined) {
            console.log(temasTeste)
            put(`/tema`, temasTeste, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/tema`, temasTeste, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
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
        back()

    }

    function back() {
        navigate ('/tema')
    }

   
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={temasTeste.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="tema" variant="outlined" name="tema" margin="normal" fullWidth />
                <TextField value={temasTeste.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="categoria" label="categoria" variant="outlined" name="categoria" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}
export default CadastroTema;