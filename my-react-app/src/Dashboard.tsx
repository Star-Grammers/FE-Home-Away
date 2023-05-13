import React, { useContext } from "react";
import { AuthContext, AuthContextProps } from "./Auth";
import Listings from "./Listings";

const Dashboard: React.FC = () => {
  const { handleLogout } = useContext(AuthContext) as AuthContextProps;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Away</h1>
      <button onClick={handleLogout}>Logout</button>
      <Listings />
    </div>
  );
};

export default Dashboard;
