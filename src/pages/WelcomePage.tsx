import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Typography
} from '@mui/material/';

const WelcomePage: React.FC = () => (
  <Box>
    <Box sx={{ textAlign: 'center' }}>
      <Link to="/Signup" style={{ display: 'block', marginBottom: '10px' }}>
        Create
      </Link>
      <Typography variant="h6">OR</Typography>
      <Link to="/LoginForm" style={{ display: 'block' }}>
        Log In
      </Link>
    </Box>
  </Box>
);

export default WelcomePage;
