import React, { useState, useContext } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  MenuItem,
  Menu,
  Divider
} from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PageviewIcon from '@mui/icons-material/Pageview';
import { AuthContext, AuthContextProps } from './store/Auth.tsx';

const ReusableAppBar: React.FC<any> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleLogout } = useContext(AuthContext) as AuthContextProps ?? {};

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
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            Dashboard
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
          <HomeIcon />
          <span style={{ marginLeft: '5px' }}>Home</span>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/reservations" onClick={handleMenuClose}>
          <PageviewIcon />
          <span style={{ marginLeft: '5px' }}>My Reservations</span>
        </MenuItem>
        <Divider />
        <MenuItem
          component="button"
          onClick={handleLogout}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <PowerSettingsNewIcon />
          <span style={{ marginLeft: '5px' }}>Logout</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ReusableAppBar;
