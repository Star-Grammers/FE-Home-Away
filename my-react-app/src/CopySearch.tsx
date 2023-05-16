import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Divider,
} from "@mui/material/";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextProps } from "./Auth";
import HomeIcon from "@mui/icons-material/Home";
import PageviewIcon from "@mui/icons-material/Pageview";

const CopySearchAppBar: React.FC<any> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleLogout } = useContext(AuthContext) as AuthContextProps;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "left",
            }}
            onClick={handleMenuOpen}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
          <HomeIcon />
          <span style={{ marginLeft: "5px" }}>Home</span>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/reservations" onClick={handleMenuClose}>
          <PageviewIcon />
          <span style={{ marginLeft: "5px" }}>Reservations</span>
        </MenuItem>
        <Divider />
        <MenuItem
          component="button"
          onClick={handleLogout}
          style={{ display: "flex", alignItems: "center" }}
        >
          <PowerSettingsNewIcon />
          <span style={{ marginLeft: "5px" }}>Logout</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CopySearchAppBar;
