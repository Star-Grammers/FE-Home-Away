import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

type BackButtonProps = {
  to: string;
};

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const history = useHistory();

  const handleBack = () => history.push(to);

  return (

    <Box
      sx={{
        position: 'absolute',
        top: 80,
        left: 0,
        p: 2
      }}
    >
      <Button
        variant="outlined"
        onClick={handleBack}
      >
        <ArrowBackIcon />
        Back
      </Button>
    </Box>
  );
};

export default BackButton;
