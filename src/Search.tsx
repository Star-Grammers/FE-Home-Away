import React, { useState, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Divider,
} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PageviewIcon from '@mui/icons-material/Pageview';
import { AuthContext, AuthContextProps } from './Auth.tsx';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface SearchAppBarProps {
  onSearch: (query: string) => void;
}

const SearchAppBar: React.FC<SearchAppBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleLogout } = useContext(AuthContext) as AuthContextProps;

  const handleSearch = (): void => {
    onSearch(searchQuery);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
              display: { xs: 'none', sm: 'block' },
              textAlign: 'left',
            }}
            onClick={handleMenuOpen}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Dashboard
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by location..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </Search>
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
          <span style={{ marginLeft: '5px' }}>Reservations</span>
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

export default SearchAppBar;
