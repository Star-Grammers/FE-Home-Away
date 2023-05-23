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
    <>
      <Box sx={{ position: 'absolute', top: 50, left: 1275, p: 2 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowForwardIcon />}
          onClick={handleForward}
        >
          Forward
        </Button>
      </Box>
    </>
  );
};

export default ForwardButton;
