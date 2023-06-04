import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import {
  Box, Typography, Grid, Button
} from '@mui/material/';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';
import BackButton from '../components/buttons/BackButton.tsx';
import ReusableAppBar from '../ReusableAppBar.tsx';
import ForwardButton from '../components/buttons/ForwardButton.tsx';

type Listing = {
  id: number;
  city: string;
  images: string[];
  name: string;
  title: string;
};

type PropertyDetails = {
  beds: number;
  bedrooms: number;
  bathrooms: number;
  persons: number;
  price: {
    rate: number;
    currency: string;
    total: number;
  };
  cancelPolicy: string;
  isSuperhost: boolean;
  reviewsCount: number;
  rareFind: boolean;
  previewAmenities: [string];
};

type ListingWithDetails = Listing & PropertyDetails;

const SingleListing: React.FC = () => {
  const location = useLocation<{ listing: ListingWithDetails }>();
  const listing = location.state?.listing;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? listing?.images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === listing?.images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!listing || null || undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ReusableAppBar />
      <Box sx={{ marginTop: '1rem', textAlign: 'center', justifyContent: 'center' }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Box sx={{ justifyContent: 'center', marginTop: '1rem', textAlign: 'center' }}>
              <Typography variant="h6">{listing.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Tooltip title="Add" placement="left">
                <Button onClick={previousImage}><ArrowBackIosIcon /></Button>
              </Tooltip>
              <img
                width="500px"
                height="350px"
                src={listing.images[currentImageIndex]}
                alt={listing.title}
              />
              <Tooltip title="Add" placement="right">
                <Button onClick={nextImage}><ArrowForwardIosIcon /></Button>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h6" align="center">
          Beds:
          {listing.beds}
        </Typography>
        <Typography variant="h6" align="center">
          Bedrooms:
          {listing.bedrooms}
        </Typography>
        <Typography variant="h6" align="center">
          Bathrooms:
          {listing.bathrooms}
        </Typography>
        <Typography variant="h6" align="center">
          Persons:
          {listing.persons}
        </Typography>
        <Typography variant="h6" align="center">
          Persons:
          {listing.persons}
        </Typography>
        <Typography variant="h6" align="center">
          Price: $
          {listing.price.rate}
        </Typography>
        <Typography variant="h6" align="center">
          Cancel Policy: $
          {listing.cancelPolicy}
        </Typography>
        <Typography variant="h6" align="center">
          Superhost:
          {listing.isSuperhost ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="h6" align="center">
          Reviews:
          {listing.reviewsCount}
        </Typography>
        <Typography variant="h6" align="center">
          Rarefind:
          {listing.rareFind ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="h6" align="center">
          {listing.previewAmenities.map((amenity) => (
            <span key={uuidv4()}>{amenity}</span>
          ))}
        </Typography>
      </Box>
      <BackButton to="/dashboard" />
      <Link
        to={{
          pathname: `/confirm-booking/${listing.name}`,
          state: { listing }
        }}
      >
        <ForwardButton to="/confirm-booking/:name" />
      </Link>
    </>
  );
};

export default SingleListing;
