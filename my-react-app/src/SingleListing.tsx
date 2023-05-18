import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Bar from "./Bar";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import { Link } from "react-router-dom";

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
  rareFind: Boolean;
  previewAmenities: [string];
};

type ListingWithDetails = Listing & PropertyDetails;

const SingleListing: React.FC = () => {
  const location = useLocation<{ listing: ListingWithDetails }>();
  const listing = location.state?.listing;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? listing?.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === listing?.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!listing || null || undefined) {
    console.log(listing, "this is the listing");
    return <div>Loading...</div>;
  }

  return (
    <>
      <Bar />
      <div className="listing-details">
        <h2>{listing.name}</h2>
        <div className="image-gallery">
          <ArrowBackIosIcon className="arrow-icon" onClick={previousImage} />
          <img
            className="gallery-image"
            src={listing.images[currentImageIndex]}
            alt={listing.title}
          />
          <ArrowForwardIosIcon className="arrow-icon" onClick={nextImage} />
        </div>
        <p>Beds: {listing.beds}</p>
        <p>Bedrooms: {listing.bedrooms}</p>
        <p>Bathrooms: {listing.bathrooms}</p>
        <p>Persons: {listing.persons}</p>
        <p>Price: ${listing.price.rate}</p>
        <p>Cancel Policy: ${listing.cancelPolicy}</p>
        <p>Superhost: {listing.isSuperhost ? "Yes" : "No"}</p>
        <p>Reviews: {listing.reviewsCount}</p>
        <p>Rarefind: {listing.rareFind ? "Yes" : "No"}</p>
        <p>
          {listing.previewAmenities.map((amenity, index) => (
            <span key={index}>
              {amenity}
              {index !== listing.previewAmenities.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
      <BackButton to="/dashboard" />
      <Link
        to={{
          pathname: `/confirm-booking/${listing.name}`,
          state: { listing },
        }}
      >
        <ForwardButton to="/confirm-booking/:name" />
      </Link>
    </>
  );
};

export default SingleListing;
