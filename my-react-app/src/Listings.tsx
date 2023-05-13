import React, { useEffect, useState } from "react";
import { fetchListings } from "./api";
import "./App.css";
import SearchAppBar from "./Search";

type Listing = {
  city: string;
  images: string[];
  name: string;
  title: string;
};

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings();
      setListings(data);
      setFilteredListings(data);
    };
    loadListings();
  }, []);

  const handleSearch = (query: string) => {
    filterListings(query);
  };

  const filterListings = (query: string): void => {
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
        {filteredListings.map((listing: Listing, i: number) => {
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
