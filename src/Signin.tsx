import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextProps } from './Auth.tsx';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useContext(AuthContext) as AuthContextProps;
  const [errorMessage, setErrorMessage] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      handleSignIn(email, password);
      setErrorMessage(true);
    } catch (error) {
      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Create Account</h1>
      {errorMessage && <p>User already exists</p>}
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
        Already have an account?
        {' '}
        <Link to="/LoginForm">Click here to login!</Link>
      </p>
    </div>
  );
};

export default Signin;
