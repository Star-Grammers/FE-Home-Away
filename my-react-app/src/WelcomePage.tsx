import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/Signin" style={{ display: "block", marginBottom: "10px" }}>
          Create
        </Link>
        <span style={{ display: "block", marginBottom: "10px" }}>OR</span>
        <Link to="/LoginForm" style={{ display: "block" }}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
