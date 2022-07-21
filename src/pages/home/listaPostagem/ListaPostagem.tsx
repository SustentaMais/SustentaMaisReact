import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { busca, buscaId } from '../../../services/Service';
import PostagemModel from '../../../models/PostagemModel';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import ModalDeletePost from '../modaldeletepost/ModalDeletePost'
import { toast } from 'react-toastify';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Menu, MenuItem } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 450,
      color: 'var(--bodyColor) !important',
      background: 'transparent'
      // marginLeft: "250px",
      // marginBottom: "30px"
    },
    media: {
      height: '190px' // 16:9
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
    cardHeader: {
      // color: 'var(--bodyColor) !important'
    },
  }),
);

const ITEM_HEIGHT = 48;

function ListaPostagem() {

  const [posts, setPosts] = useState<PostagemModel[]>([])
  const { id } = useParams();
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
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
    await buscaId(`/postagem`, setPosts, {
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
      <Box height={45} id='navbarFeed'>
        <Typography><strong>Feed</strong></Typography>
      </Box>
      <div style={{ height: "100px" }}></div>
      {
        posts.map(post => (post.anexos != null ? (
          <Box className='renderPost'>

            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar src={post.usuario?.foto} aria-label="recipe" className={classes.avatar}/>
                }

                title={post.usuario?.nome}
                subheader={new Date(post.data).toLocaleDateString()}
                time={new Date(post.data).toLocaleTimeString([], { timeStyle: 'short' })}
                className='textosCard' />
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
                <Typography variant="h6" component="h6">{post.titulo}</Typography>
                <Typography variant="body2" color="textSecondary" className='textosCard' component="p">Tema: {post.tema?.tema}</Typography>
              </Box>

              <CardMedia
                className={classes.media}
                image={post.anexos}
              />
              <CardContent>
                <Typography variant="body2" component="p" className='textosCard'>
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
                  Postado às {new Date(post.data).toLocaleTimeString([], { timeStyle: 'short' })}
                </Typography>
              </CardActions>
            </Card>
          </Box>
        ) : (
          <Box className='renderPost'>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar src={post.usuario?.foto} aria-label="recipe" className={classes.avatar}/>
                }

                title={post.usuario?.nome}
                subheader={new Date(post.data).toLocaleDateString()}
                time={new Date(post.data).toLocaleTimeString([], { timeStyle: 'short' })}
                className='textosCard' />
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
                <Typography variant="h6" component="h6">{post.titulo}</Typography>
                <Typography variant="body2" color="textSecondary" className='textosCard' component="p">Tema: {post.tema?.tema}</Typography>
              </Box>

              <CardContent>
                <Typography variant="body2" component="p" className='textosCard'>
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
                  Postado às {new Date(post.data).toLocaleTimeString([], { timeStyle: 'short' })}
                </Typography>
              </CardActions>
            </Card>
          </Box>
        )))

      }
    </>)
}

export default ListaPostagem;