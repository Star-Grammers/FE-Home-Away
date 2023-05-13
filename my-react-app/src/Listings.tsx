import React, { useEffect, useState } from "react";
import { fetchListings } from "./api";
import "./App.css";
import SearchAppBar from "./Search";
import { Pagination } from "@mui/material/";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

interface Listing {
  city: string;
  images: string[];
  name: string;
  title: string;
}

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  // const [listing, setListing] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const listingsPerPage = 8;

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

  const handleClick = (listing: Listing) => {
    console.log("Clicked listing:", listing);
    // setListing(listing)
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

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
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
                {/* <img src={firstImage} alt={listing.title} /> */}
                <Link
                  to={`/listings/${listing.name}`}
                  onClick={() => handleClick(listing)}
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
          count={Math.ceil(filteredListings.length / listingsPerPage)}
          page={currentPage}
          onChange={handlePaginationChange}
          color="secondary"
        />
      </div>
    </>
  );
};

export default Listings;
