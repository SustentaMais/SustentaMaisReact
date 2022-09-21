
import Usuario from '../../models/UsuarioModel';
import './Perfil.css'
// atuais
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Grid, Box, Typography} from '@mui/material';
import { TokenState } from '../../store/tokens/tokensReducer';
import { buscaId } from '../../services/Service';
import MeusPosts from '../home/meusposts/MeusPosts';
import SideBar from '../../components/estaticos/sidebar/SideBar';


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

function Perfil() {

  const { id } = useParams<{ id: string }>();

  const [users, setUsers] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    localidade: ''

  })

  const [user, setUser] = useState<Usuario | any>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    localidade: '',
    postagem: null
  });

  const [endImg, setEndImg] = useState('./perfil.png');

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //buscar o ID armazenado no Store do redux
  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

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

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token]);

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
    <Grid container id='containerProfile'>
      <Grid sm={3}>
        <SideBar />
      </Grid>
      <Box className="profileImageContainer">
        <img src={users.foto} alt={users.nome} className="profileImage" width="200" height="200" />
        <Typography className="profile-name">{users.nome}</Typography>
        <Typography className="profile-email">{users.usuario}</Typography>
        <Typography className="profile-local">{users.localidade}</Typography>
        <hr className='linha-perfil' />

      </Box>


      <Grid className='caixa'>
        <div id='minhasPostagens'>
          <h3>Minhas postagens</h3>
        </div>
        <Box id='renderMeusPosts'>
          <MeusPosts />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Perfil;