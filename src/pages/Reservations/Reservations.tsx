import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box, Paper, Typography, Button
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { v4 } from 'uuid';
import ReusableAppBar from '../../ReusableAppBar.tsx';
import { AuthContext, AuthContextProps } from '../../store/Auth.tsx';
import ReservationButton from '../../components/buttons/ReservationButton.tsx';

export interface Reservation {
  checkInDate: string;
  guestCount: number;
  petsCount: number;
  phoneNumber: string;
  reservationId: string;
// TODO: add image later!
  // image: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 300
}));

const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { userId } = useContext(AuthContext) as AuthContextProps;

  const fetchReservations = async () => {
    try {
      const response = await axios.post('http://localhost:3030/api/reservations/', { userId });
      console.log('🚀 ~ file: Reservations.tsx:35 ~ fetchReservations ~ response:', response);
      setReservations(response.data);
    } catch (error) {
      console.error('Failed to get reservations');
    }
  };

  const deleteReservation = async (reservationId: string) => {
    const reservation = { userId, reservationId };
    console.log(reservation, 'reservation123');
    try {
      const response = await axios.put('http://localhost:3030/reservations/delete', reservation);
      if (response.status === 200) {
        fetchReservations();
      }
      console.log('Reservation deleted successfully');
    } catch (error) {
      console.error('Failed to delete reservation');
    }
  };

  // const editReservation = async (reservation: Reservation) => {

  // };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Box>
      <ReusableAppBar />
      <Box sx={{
        marginTop: '2rem', marginLeft: '3rem'
      }}
      >
        {!reservations
          && (<Box>You currently dont have any reservations...</Box>
          )}
        {reservations.length >= 0
          && reservations.map((reservation: Reservation) => {
            const {
              reservationId, checkInDate, petsCount, phoneNumber, guestCount
            } = reservation;
            return (
              <Item key={v4()}>
                <Typography variant="h6">
                  Number of pets:
                  {' '}
                  {petsCount}
                </Typography>
                <Typography variant="h6">
                  Check in date:
                  {' '}
                  {checkInDate}
                </Typography>
                <Typography variant="h6">
                  Number of guests:
                  {' '}
                  {guestCount}
                </Typography>
                <Typography variant="h6">
                  Guest contact number:
                  {' '}
                  {phoneNumber}
                </Typography>
                <Typography><Button variant="outlined" onClick={() => deleteReservation(reservationId)}>Cancel</Button></Typography>
                <Typography>
                  <Link
                    to={{
                      pathname: '/confirm-booking/:name',
                      state: { reservation }
                    }}
                  >
                    <ReservationButton to="/confirm-booking/:name" />
                  </Link>
                </Typography>
              </Item>
            );
          })}
      </Box>
    </Box>
  );
};
export default Reservations;
