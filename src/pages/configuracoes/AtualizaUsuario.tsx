import { Button, Container, FormControl, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Usuario from "../../models/UsuarioModel";
import { buscaId, put } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Config.css'

function AtualizaUsuario() {

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

    return(
        <>
            <Container maxWidth="sm" id='formAtualizar'>
                <form onSubmit={onSubmit}>
                    <Typography variant="h5"  className='inputAtualiza'  color="textSecondary" component="h5" align="center" >Editar Usuário</Typography>
                    <TextField value={users.foto} className='inputAtualiza'  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} variant="outlined" name="foto" placeholder='Insira o link da foto' margin="normal" fullWidth />
                    <TextField value={users.nome} className='inputAtualiza'  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} name="nome"  variant="outlined" margin="normal" placeholder='Insira o seu nome' required fullWidth />
                    <TextField value={users.usuario} className='inputAtualiza'  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}  name="email" variant="outlined" margin="normal" placeholder='Insira o seu email' required fullWidth />
                    <TextField value={users.localidade} className='inputAtualiza'  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}  name="local" variant="outlined" margin="normal" placeholder='Insira a sua localidade' fullWidth />
                    <TextField value={users.senha} id='ultimoInput' className='inputAtualiza' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}   name="senha" variant="outlined" margin="normal" placeholder='Altere a sua senha' required fullWidth />

                    <Button type="submit" variant="contained" color="primary" className='btnEdit'>
                        Salvar
                    </Button>
                </form>
            </Container>
        </>
    );
}

export default AtualizaUsuario;