import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

type ForwardButtonProps = {
  to: string;
};

const ForwardButton: React.FC<ForwardButtonProps> = ({ to }) => {
  const history = useHistory();

  const handleForward = () => {
    history.push(to);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 80,
        left: 1750,
        p: 2
      }}
    >
      <Button
        variant="outlined"
        onClick={handleForward}
      >
        Forward
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default ForwardButton;
