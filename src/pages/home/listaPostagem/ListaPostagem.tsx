import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import PostagemModel from '../../../models/PostagemModel';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import ModalDeletePost from '../modaldeletepost/ModalDeletePost'
import { toast } from 'react-toastify';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { findByLabelText } from '@testing-library/react';
import { Menu, MenuItem } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 550,
      marginLeft: "250px",
      marginBottom: "30px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: green[500],
    },
  }),
);

const ITEM_HEIGHT = 48;

function ListaPostagem() {

  const [posts, setPosts] = useState<PostagemModel[]>([])
  const {id} = useParams();
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

  async function getPost() {
    await busca("/postagem", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
    
  }, [posts.length])

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

    <div style={{height:"100px"}}></div>
    
    {
      posts.map(post => (
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {post.usuario?.foto}
            </Avatar>
          }
          action={
            <IconButton 
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>            
          }
          title={post.usuario?.nome}
          subheader={new Date(post.data).toLocaleDateString()}
          time={new Date(post.data).toLocaleTimeString([],{timeStyle:'short'})}
        />
        <Menu 
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '10ch',
            color: '#000000',
            textAlign: 'center'
          },
        }}>
          <Link to={`/criarpostagem/${post.id}`} className="text-decorator-none btnModal" >
            <MenuItem onClick={handleClose} className='btnModal'>Editar</MenuItem>
          </Link>
          <div onClick={handleClose}><ModalDeletePost /></div>
        </Menu>
        <Box className='titulo-tema'>
          <Typography variant="h5" component="h2">{post.titulo}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Tema: {post.tema?.tema}</Typography>
        </Box>
        
        <CardMedia
          className={classes.media}
          image={post.anexos}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {post.conteudo}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" >
            <ShareIcon />
          </IconButton>
          <Typography className='time-post' variant="body2" component="p" color="textSecondary">
            Postado às {new Date(post.data).toLocaleTimeString([],{timeStyle:'short'})}
          </Typography>
        </CardActions>
      </Card>
      ))
    }
    </>)
}

export default ListaPostagem;