import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import './NavbarMain.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import SideBar from '../sidebar/SideBar';

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

export default function NavbarMain() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    var mainNavbarComponent;
    if (token != "") {
        mainNavbarComponent = <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <img className="logo-sustenta" src='https://media.discordapp.net/attachments/992082604792750240/992194781851689031/Logopng.png' alt="Logo SustentaMais" />
                    {/* <Search className='input-search'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} /> */}
                </Toolbar>
            </AppBar>

        </Box>
    }

    return (
        <>
        <Grid >
            <Grid >
                {mainNavbarComponent}
            </Grid>
        </Grid>
        
            
        </>
    );
}
