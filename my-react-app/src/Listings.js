import React, { useEffect, useState } from "react";
import { fetchListings } from "./api";
import "./App.css";
import SearchAppBar from "./Search";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  console.log(listings, "listings");

  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings();
      setListings(data);
      setFilteredListings(data);
    };
    loadListings();
  }, []);

  const handleSearch = (query) => {
    filterListings(query);
  };

  const filterListings = (query) => {
    const filtered = listings.filter((listing) => {
      if (listing.city) {
        return listing.city.toLowerCase().includes(query.toLowerCase());
      } else {
        return null;
      }
    });
    setFilteredListings(filtered);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} />
      <div className="listings-grid">
        {filteredListings.map((listing, i) => {
          const firstImage = listing.images[0];

          return (
            <div key={i} className="listing-card">
              <h2>{listing.name}</h2>
              <div className="image-container">
                <img src={firstImage} alt={listing.title} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listings;
