import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3030/user/login", {
        email,
        password,
      });

      sessionStorage.setItem("token", response.data.token);
      history.push("/dashboard");
    } catch (error) {
      if (error) {
        setErrorMessage(
          "Sorry, we couldn't find your account. You can either create a new account or try logging in again."
        );
      } else {
        history.push("/login");
        console.error(error);
      }
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleLoginSubmit}>
        <h1>Please enter your email and password to login :P</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up now!</Link>
      </p>
    </div>
  );
};

export default LoginForm;
