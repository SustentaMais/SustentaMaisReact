import { Avatar, Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { api } from '../../services/Service';
import EditIcon from '@material-ui/icons/Edit';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useSelector } from 'react-redux';
import './Config.css';

{/*
function Upload() {


    const [image, setImage] = useState('');
    const [endImg, setEndImg] = useState('./perfil.png');
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const uploadImage = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await api.post("/usuario/id", formData, headers)
        .then((response) => {
            setStatus({
                type: 'success',
                mensagem: response.data.mensagem
            });
        }).catch((err) => {
            if(err.response){
                setStatus({
                    type: 'error',
                    mensagem: err.response.data.mensagem
                });
            } else {
                setStatus({
                    type: 'error',
                    mensagem: "Erro: Tente mais tarde!"
                });
            }
        });
    }

  return (
    <>
 
            <Grid alignItems="center" justifyContent="center" xs={6}>
                <Box className='box-status'>
                    {status.type === 'success' ? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
                    {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p> : ""}
                </Box>
                
                <form className='form-perfil' onSubmit={uploadImage}>
                    <Box className='caixa-foto' width={300} height={300} style={{backgroundColor: "#d7eba5", borderRadius: "15px"}}>
                        {image ? <img src={URL.createObjectURL(image)} alt='foto do usuário' width="200" height="200" className='foto-user'/> : <img src={endImg} alt= 'user picture' width="200" height="200" className='foto-user'/>}
                        
                        <input textAlign='center' type="file" name="image" id="user-img" className="inputfile" onChange={e => setImage(e.target.files[0])} />
                        <button textAlign='center' type='submit' className='btn-save'>Salvar</button>
                        
                    </Box>
                    <Box className='caixa-dark' width={300} height={45} style={{backgroundColor: "#d7eba5", borderRadius: "15px"}}>
                        <p className='texto-dark'>Dark Mode</p>
                        <Brightness4Icon className="dark-icon" />
                    </Box>
                </form>
            </Grid>
    
    </>
  )
}
*/}
export default Upload;