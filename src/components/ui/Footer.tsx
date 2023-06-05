import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ p: 2 }}>
    <Typography variant="body2" align="center">
      Footer content
    </Typography>
    <Divider sx={{ my: 1 }} />
  </Box>
);
export default Footer;
