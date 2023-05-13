import React from "react";
import WelcomePage from "./WelcomePage";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Please log in or create an account.</h1>
      <br />
      <div>
        <WelcomePage />
      </div>
    </div>
  );
};

export default Home;
