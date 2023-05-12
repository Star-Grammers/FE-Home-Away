import React, { useEffect, useState } from "react";
import { fetchListings } from "./api";
import "./App.css";

const Listings = () => {
    const [listings, setListings] = useState([]);


    useEffect(() => {
        const loadListings = async () => {
            const data = await fetchListings();
            setListings(data);
          console.log(data, 'data')
        };

        loadListings();
    }, []);

    return (
        <div className="listings-grid">
            {listings.map((listing, i) => {
                // console.log(listing);
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
    );
};

export default Listings;


