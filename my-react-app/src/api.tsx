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

// this is the fetch from rapidapi.com to get the data directly from airbnb third party api
// export const fetchListings = async () => {
//     const url =
//         "https://airbnb13.p.rapidapi.com/search-location?location=New%20York&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Key": "b834de40a8msh7232a820d79af51p1e2406jsn02ce7244c33c",
//             "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//         },
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data.results;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// };
