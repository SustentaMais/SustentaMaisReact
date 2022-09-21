import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./MenuMobile.css";
import { Modal } from "@mui/material";
import ModalPostagem from "../../../pages/home/ModalPostagem";

function MenuMobile() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var menuMobile;
  if (token !== "") {
    menuMobile = (
      <>
        <AppBar
          position="fixed"
          id="menuMobile"
          color="secondary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar id="toolbarMobile">
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <ModalPostagem />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
            {/* <IconButton color="inherit">
            <MoreIcon style={{ color: "white" }} />
          </IconButton> */}
          </Toolbar>
        </AppBar>
      </>
    );
  }
  return <>{menuMobile}</>;
}
export default MenuMobile;
