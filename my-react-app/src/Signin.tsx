import React, { useState, useContext } from "react";
import { AuthContext, AuthContextProps } from "./Auth";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn } = useContext(AuthContext) as AuthContextProps;
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSignIn(email, password);
    } catch (error) {
      setErrorMessage("User already exists");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Create Account</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handlePassword}
          value={password}
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/LoginForm">Click here to login!</Link>
      </p>
    </div>
  );
};

export default Signin;
