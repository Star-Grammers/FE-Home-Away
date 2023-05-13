// import { useLocation } from "react-router-dom";

// interface LocationState {
//   listing: Listing;
// }

// const ListingDetail: React.FC = () => {
//   const location = useLocation<LocationState>();
//   const { listing } = location.state;

//   return (
//     <div>
//       <h2>{listing.name}</h2>
//       <p>{listing.city}</p>
//       <img src={listing.images[0]} alt={listing.title} />
//     </div>
//   );
// };

// export default ListingDetail;

//==========
import React from "react";

const SingleListing: React.FC = () => {
  return <div>Single</div>;
};
export default SingleListing;
//=========
// import React from "react";
// import { useLocation } from "react-router-dom";

// const ListingDetails: React.FC = () => {
//   const location = useLocation();
//   const listing: Listing = location.state.listing;

//   // Render the listing details

//   return (
//     <div>
//       <h2>{listing.name}</h2>
//       {/* Render other details */}
//     </div>
//   );
// };
// export default ListingDetails;
