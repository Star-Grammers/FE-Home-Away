import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useLocation, Link, useHistory } from 'react-router-dom';
import Bar from './Bar.tsx';
import BackButton from './BackButton.tsx';
import ForwardButton from './ForwardButton.tsx';

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

// const ConfirmBooking: React.FC<ConfirmBookingProps> = ({ onChange }) => {
const ConfirmBooking: React.FC<ConfirmBookingProps> = () => {
  const [guestCount, setGuestCount] = useState('');
  const [petsCount, setPetsCount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState('');

  const history = useHistory();
  const location = useLocation<{ listing: Listing }>();
  const listing = location.state?.listing;

  if (!listing) {
    return <div>Loading...</div>;
  }

  const handleGuestsChange = (event: ChangeEvent<HTMLInputElement>): void => setGuestCount(event.target.value);

  const handlePetsChange = (event: ChangeEvent<HTMLInputElement>): void => setPetsCount(event.target.value);

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
        checkInDate
      };

      await axios.post('http://localhost:3030/api/reservations', reservationData);

      console.log('Reservation saved successfully');
      history.push('/reservations');
    } catch (error) {
      console.error('Failed to save reservation:', error);
    }
  };

  return (
    <>
      <Bar />
      <div className="listing-details">
        <div className="image-gallery">
          <img
            className="gallery-image"
            src={listing.images[0]}
            alt={listing.title}
          />
        </div>
      </div>
      <Link
        to={{
          pathname: `/singleListing/${listing.name}`,
          state: { listing }
        }}
      >
        <BackButton to="/singleListing/:name" />
      </Link>
      <ForwardButton to="/reservations" />
      <div className="questionnaire">
        <span>How many guests?</span>
        <input
          type="number"
          min="0"
          value={guestCount}
          onChange={handleGuestsChange}
        />
        <span>Any pets?</span>
        <input
          type="number"
          min="0"
          value={petsCount}
          onChange={handlePetsChange}
        />
        <span>Please enter your phone number</span>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <span>What dates are you staying?</span>
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInDateChange}
        />
        <button type="button" onClick={saveReservation}>
          Save Reservation
        </button>
      </div>
    </>
  );
};

export default ConfirmBooking;
