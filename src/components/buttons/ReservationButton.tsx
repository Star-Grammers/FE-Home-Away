import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type ReservationButtonProps = {
  to: string;
};

const ReservationButton: React.FC<ReservationButtonProps> = ({ to }) => {
  const history = useHistory();

  const handleBack = () => history.push(to);

  return (

    <Box>
      <Button
        variant="outlined"
        onClick={handleBack}
      >
        Edit
      </Button>
    </Box>
  );
};

export default ReservationButton;
