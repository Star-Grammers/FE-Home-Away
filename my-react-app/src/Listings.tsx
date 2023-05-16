import React, { useEffect, useState } from "react";
import { fetchListings } from "./api";
import "./App.css";
import SearchAppBar from "./Search";
import { Pagination } from "@mui/material/";
import { Link } from "react-router-dom";

interface Listing {
  id: number;
  city: string;
  images: string[];
  name: string;
  title: string;
}

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadListings = async () => {
    const data = await fetchListings();
    setListings(data);
    setFilteredListings(data);
  };

  useEffect(() => {
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

  const indexOfLastListing = currentPage * 8;
  const indexOfFirstListing = indexOfLastListing - 8;
  const currentListings = filteredListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} />
      <div className="listings-grid">
        {currentListings.map((listing: Listing, i: number) => {
          const firstImage = listing.images[0];

          return (
            <div key={i} className="listing-card">
              <h2>{listing.name}</h2>
              <div className="image-container">
                <Link
                  to={{
                    pathname: `/singleListing/${listing.name}`,
                    state: { listing },
                  }}
                >
                  <img src={firstImage} alt={listing.title} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(filteredListings.length / 8)}
          page={currentPage}
          onChange={handlePaginationChange}
          color="secondary"
        />
      </div>
    </>
  );
};
export default Listings;
