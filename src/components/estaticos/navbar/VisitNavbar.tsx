import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import InputIcon from '@mui/icons-material/Input';
import PublicIcon from '@mui/icons-material/Public';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Link } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import './Navbar.css';


export default function VisitNavbar() {
 
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

      <Link to='/visitante'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <DirectionsRunOutlinedIcon />
          </IconButton>
          <p>Visitante</p>
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
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Brightness4Icon />
        </IconButton>
        <p>Dark Mode</p>
      </MenuItem>
      <Link to='/sobre'>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <InputIcon/>
          </IconButton>
          <p>Login</p>
        </MenuItem>
      </Link>
      
    </Menu>
  );

  var navbarComponent;

  if (token === "") {
    navbarComponent =
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{}}>
          <Toolbar>
            <img className="logo-sustenta" src='https://media.discordapp.net/attachments/992082604792750240/992194781851689031/Logopng.png
  ' alt="Logo SustentaMais" />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='/visitante'>
                <IconButton size="large" color="inherit">
                  <DirectionsRunOutlinedIcon />
                  <p className="menu-text">Visitante</p>
                </IconButton>
              </Link>

              <Link to='/sobre'>
                <IconButton size="large" color="inherit">
                  <PublicIcon />
                  <p className="menu-text">Sobre Nós</p>
                </IconButton>
              </Link>
              <IconButton size="large" color="inherit">
                <Brightness4Icon />
                <p className="menu-text">Dark Mode</p>
              </IconButton>
              <Link to='/login'>
                <IconButton size="large" color="inherit">
                  <InputIcon />
                  <p className="menu-text">Login</p>
                </IconButton>
              </Link>
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
