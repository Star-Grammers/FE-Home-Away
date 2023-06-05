import React, { ChangeEvent, useContext, useState } from 'react';
import {
  Box, Typography, Button, TextField
} from '@mui/material/';
import axios from 'axios';
import { useLocation, Link, useHistory } from 'react-router-dom';
import ReusableAppBar from '../ReusableAppBar.tsx';
import BackButton from '../components/buttons/BackButton.tsx';
import ForwardButton from '../components/buttons/ForwardButton.tsx';
import { AuthContext, AuthContextProps } from '../store/Auth.tsx';
import { Reservation } from './Reservations/Reservations.tsx';

type Listing = {
  id: number;
  city: string;
  images: string[];
  name: string;
  title: string;
};

interface ConfirmBookingProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (query: string) => void;
}

const ConfirmBooking: React.FC<ConfirmBookingProps> = () => {
  const [guestCount, setGuestCount] = useState('');
  const [petsCount, setPetsCount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const { userId } = useContext(AuthContext) as AuthContextProps;

  const editLocation = useLocation<{ reservation: Reservation }>();
  const editReservation = editLocation.state?.reservation;
  console.log('🚀 ~ file: ConfirmBooking.tsx:35 ~ editReservation:', editReservation);

  const history = useHistory();
  const location = useLocation<{ listing: Listing }>();
  const listing = location.state?.listing;

  if (!listing) {
    return <div>Loading...</div>;
  }

  // if (editReservation) {

  // }

  const handleGuestsChange = (event: ChangeEvent<HTMLInputElement>):
    void => setGuestCount(event.target.value);

  const handlePetsChange = (event: ChangeEvent<HTMLInputElement>):
    void => setPetsCount(event.target.value);

  const handlePhoneNumberChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => setPhoneNumber(event.target.value);

  const handleCheckInDateChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => setCheckInDate(event.target.value);

  const saveReservation = async () => {
    try {
      const reservationData = {
        guestCount,
        petsCount,
        phoneNumber,
        checkInDate,
        userId
      };
      await axios.put('http://localhost:3030/api/reservations/creation', reservationData);
      console.log('Reservation saved successfully');
      history.push('/reservations');
    } catch (error) {
      console.error('Failed to save reservation:', error);
    }
  };

  return (
    <>
      <ReusableAppBar />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <img
            width="500px"
            height="350px"
            src={listing.images[0]}
            alt={listing.title}
          />
        </Box>
      </Box>
      <Link
        to={{
          pathname: `/singleListing/${listing.name}`,
          state: { listing }
        }}
      >
        <BackButton to="/singleListing/:name" />
      </Link>
      <ForwardButton to="/reservations" />
      <Box sx={{ marginTop: '1rem', textAlign: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" align="center">How many guests?</Typography>
        <TextField
          size="small"
          type="number"
          value={guestCount}
          onChange={handleGuestsChange}
        />
        <Typography variant="h6" align="center">Any pets?</Typography>
        <TextField
          size="small"
          type="number"
          value={petsCount}
          onChange={handlePetsChange}
        />
        <Typography variant="h6" align="center">Please enter your phone number</Typography>
        <TextField
          size="small"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <Typography variant="h6" align="center">What dates are you staying?</Typography>
        <TextField
          size="small"
          type="date"
          value={checkInDate}
          onChange={handleCheckInDateChange}
        />
        <Typography variant="h6" align="center">
          <Button variant="outlined" sx={{ marginTop: '30px' }} onClick={saveReservation}>
            Save Reservation
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default ConfirmBooking;
