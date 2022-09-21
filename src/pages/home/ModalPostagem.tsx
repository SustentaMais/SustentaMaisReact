import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import { Box, Modal } from '@mui/material';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import CadastroPost from './cadastroPost/CadastroPost';
import AddIcon from '@material-ui/icons/Add';
import './Home.css'

function getModalStyle(){

    const top=50;
    const left=50;

    return{

    top:`${top}%`,
    left:`${left}%`,
    transform:`translate(-${top}%,-${left}%)`

    };
}

const useStyles=makeStyles((theme:Theme)=>
    createStyles({
        paper:{
            position:'absolute',
            width:500,
            backgroundColor: theme.palette.background.paper,
            border:'2px solid #4b9e1b',
            boxShadow:theme.shadows[5],
            padding:theme.spacing(2,4,3)
        },
        fab: {
            margin: theme.spacing(2),
        },
        fixed: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    })

);

function ModalPostagem(){
    const classes = useStyles();
    const[modalStyle] = React.useState(getModalStyle);
    const[open,setOpen] = React.useState(false);

    const handleOpen =()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const body=(
        <div style={modalStyle} className={classes.paper}>
            <Box display='flex' justifyContent='flex-end' className='cursor'>
                <CloseIcon onClick={handleClose}/>
            </Box>
            <CadastroPost/>
        </div>
    );

    return(
    <div>
        <div onClick={handleOpen}>
        <Tooltip title="Criar Postagem" id='criarPost-Button' aria-label="add">
          <Fab color="secondary" className={classes.fixed}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </div>
    );
}


export default ModalPostagem;