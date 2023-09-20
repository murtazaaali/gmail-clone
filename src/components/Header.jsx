import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { gmailLogo } from "../constants/Constant";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledAppbar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 20,
  paddingRight: 20,
  "& > div": {
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",

  "& > svg": {
    margin: 10,
  },
});

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppbar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchWrapper>
          <SearchIcon color="action" />
          <InputBase placeholder="Search mail" />
          <TuneIcon color="action" />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineIcon color="action" />
          <SettingsOutlinedIcon color="action" />
          <AppsOutlinedIcon color="action" />
          <AccountCircleOutlinedIcon color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Header;
