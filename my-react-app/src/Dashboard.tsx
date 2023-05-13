import React from "react";
import Listings from "./Listings";

const Dashboard: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Away</h1>
      <Listings />
    </div>
  );
};

export default Dashboard;
