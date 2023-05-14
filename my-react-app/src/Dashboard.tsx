import React from "react";
import Listings from "./Listings";
// import { Pagination } from "@mui/material/";

const Dashboard: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Away</h1>
      <Listings />
      {/* <Pagination count={10} color="secondary" /> */}
    </div>
  );
};

export default Dashboard;
