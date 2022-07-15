import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PublicIcon from '@mui/icons-material/Public';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(174, 242, 2, 0.20)',
  '&:hover': {
    backgroundColor: 'rgba(174, 242, 2, 0.30)',
  },
  marginRight: theme.spacing(2),
  marginLeft: '40px!important',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/perfil'>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      </Link>
      <Link to='configuracoes'>
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
      </Link>
      <Link to='/login'>
        <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to='/home'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>
      <Link to='/postagem'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <DynamicFeedIcon />
          </IconButton>
          <p>Postagens</p>
        </MenuItem>
      </Link>
      <Link to='/tema'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <ArticleIcon />
          </IconButton>
          <p>Tema</p>
        </MenuItem>
      </Link>
      <Link to='/criarpostagem'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <PostAddIcon />
          </IconButton>
          <p>Criar Postagem</p>
        </MenuItem>
      </Link>
      <Link to='/sobre'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <PublicIcon />
          </IconButton>
          <p>Sobre Nós</p>
        </MenuItem>
      </Link>
      {/*colocar o dark mode na página de configurações
      <MenuItem>
          <IconButton size="large" color="inherit">
            <Brightness4Icon />
          </IconButton>
          <p>Dark Mode</p>
      </MenuItem>
      */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Conta</p>
      </MenuItem>
    </Menu>
  );

  var navbarComponent;
  if (token != "") {
    navbarComponent = <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo-sustenta" src='https://media.discordapp.net/attachments/992082604792750240/992194781851689031/Logopng.png' alt="Logo SustentaMais" />
          <Search className='input-search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/home'>
              <IconButton size="large" color="inherit">
                <HomeIcon />
                <p className="menu-text">Home</p>
              </IconButton>
            </Link>
            <Link to='/postagem'>
              <IconButton size="large" color="inherit">
                <DynamicFeedIcon />
                <p className="menu-text">Postagens</p>
              </IconButton>
            </Link>
            <Link to='/tema'>
              <IconButton size="large" color="inherit">
                <ArticleIcon />
                <p className="menu-text">Tema</p>
              </IconButton>
            </Link>
            <Link to='/criarpostagem'>
              <IconButton size="large" color="inherit">
                <PostAddIcon />
                <p className="menu-text">Criar Postagem</p>
              </IconButton>
            </Link>
            <Link to='/sobre'>
              <IconButton size="large" color="inherit">
                <PublicIcon />
                <p className="menu-text">Sobre Nós</p>
              </IconButton>
            </Link>
            {/*
        <IconButton size="large" color="inherit">
            <Brightness4Icon />
            <p className="menu-text">Dark Mode</p>
        </IconButton>
        */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ textAlign: 'center', width: '65px' }}
            >
              <AccountCircle className="profile-icon" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  }

  return (
    <>
    {navbarComponent}
    </>
  );
}
