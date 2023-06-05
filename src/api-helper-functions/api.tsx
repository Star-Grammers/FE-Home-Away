const fetchListings = async () => {
  try {
    const response = await fetch('http://localhost:3030/api/listings');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default fetchListings;
