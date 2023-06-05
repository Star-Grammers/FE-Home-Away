import React, { useEffect, useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material/';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fetchListings from '../api-helper-functions/api.tsx';
import SearchAppBar from '../Search.tsx';

interface Listing {
  id: number;
  city: string;
  images: string[];
  name: string;
  title: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 300
}));

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

  const filterListings = (query: string): void => {
    const filtered = listings.filter((listing) => {
      if (listing.city) {
        return listing.city.toLowerCase().includes(query.toLowerCase());
      }
      return null;
    });
    setFilteredListings(filtered);
  };

  const handleSearch = (query: string) => {
    filterListings(query);
  };

  const indexOfLastListing = currentPage * 8;
  const indexOfFirstListing = indexOfLastListing - 8;
  const currentListings = filteredListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const handlePaginationChange = (
    event: React.ChangeEvent<any>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1, font: '' }}
      >
        {currentListings.map((listing: Listing, index: number) => {
          const firstImage = listing.images[0];
          return (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
              xs={2}
              sm={4}
              md={3}
            >
              <Item>
                <Typography variant="h6">{listing.name}</Typography>
                <Box sx={{ height: '100%' }}>
                  <Link
                    to={{
                      pathname: `/singleListing/${encodeURIComponent(
                        listing.name
                      )}`,
                      state: { listing }
                    }}
                  >
                    <ImageList
                      cols={2}
                      rowHeight={164}
                    >
                      <ImageListItem>
                        <img
                          src={firstImage}
                          alt={listing.title}
                        />
                      </ImageListItem>
                    </ImageList>
                  </Link>
                </Box>
              </Item>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Pagination
          count={Math.ceil(filteredListings.length / 8)}
          page={currentPage}
          onChange={handlePaginationChange}
          color="secondary"
        />
      </Box>
    </>
  );
};
export default Listings;
