import React from "react";
import { useLocation } from "react-router-dom";

interface Listing {
  id: number;
  city: string;
  images: string[];
  name: string;
  title: string;
}

interface LocationState {
  listing: Listing;
}

const SingleListing: React.FC = () => {
  const location = useLocation<LocationState>();
  const listing = location.state?.listing;

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-details">
      <h2>{listing.name}</h2>
      <p>{listing.city}</p>
      <div className="image-gallery">
        {listing.images.map((image, i) => (
          <img key={i} src={image} alt={listing.title} />
        ))}
      </div>
    </div>
  );
};

export default SingleListing;
