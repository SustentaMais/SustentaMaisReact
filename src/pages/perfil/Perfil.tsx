import Usuario from "../../models/UsuarioModel";
import "./Perfil.css";
// atuais
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {Grid,Box,Typography,Card,CardMedia,CardContent,CardActions,} from "@mui/material";
import { TokenState } from "../../store/tokens/tokensReducer";
import { buscaId } from "../../services/Service";
import MeusPosts from "../home/meusposts/MeusPosts";
import SideBar from "../../components/estaticos/sidebar/SideBar";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 550,
      color: 'var(--bodyColor) !important',
      marginLeft: "250px",
      marginBottom: "30px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: green[500],
    },
  })
);



function Perfil() {
  const { id } = useParams<{ id: string }>();

  const [users, setUsers] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    localidade: "",
  });

  const [user, setUser] = useState<Usuario | any>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    localidade: "",
    postagem: null,
  });

  const [endImg, setEndImg] = useState("./perfil.png");

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //buscar o ID armazenado no Store do redux
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getUserId() {
    await buscaId(`/usuario/${userId}`, setUsers, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
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
    <>
      <Grid container>
        <SideBar />

        <Card>
          <CardMedia
            component="img"
            height="140"
            src="https://i.imgur.com/WJMDTiu.jpg"
            alt=""
          />
          <CardContent className="card-container">
            <Box>
              <img className="profileImage" src={users.foto} alt="" />
            </Box>
            <Typography gutterBottom variant="h5" component="div">
              {users.nome}
            </Typography>
            <Typography variant="subtitle1" color="InfoText">
              {users.usuario}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {users.localidade}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
        <Box className="hover">
          <MeusPosts/>
        </Box>
    </>
  );
}

export default Perfil;
