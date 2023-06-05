import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Box, Typography, Button, TextField
} from '@mui/material/';
import axios from 'axios';
import { AuthContext, AuthContextProps } from '../store/Auth.tsx';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  // const [, setUserId] = useState('');
  const { setUserId } = useContext(AuthContext) as AuthContextProps;

  // console.log(userId, 'LOGIN FORM ID');
  const handleLogin = async (loginEmail: string, loginPassword: string) => {
    try {
      const response = await axios.post('http://localhost:3030/user/login', {
        email: loginEmail,
        password: loginPassword
      });
      const { _id: foundUserId } = response.data;
      setUserId(foundUserId);
      sessionStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      if (error) {
        setErrorMessage(
          "Sorry, we couldn't find your account. You can either create a new account or try logging in again."
        );
      }
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <form onSubmit={handleLoginSubmit}>
        <Typography variant="h2">Please enter your email and password to login :P</Typography>
        {errorMessage && <p>{errorMessage}</p>}
        <Typography variant="h6">Email</Typography>
        <Box
          sx={{ p: 1 }}
        >
          <TextField
            size="small"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Typography variant="h6">Password</Typography>
        <Box
          sx={{ p: 1 }}
        >
          <TextField
            size="small"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{ p: 1 }}
        >
          <Button type="submit" variant="outlined">Login</Button>
        </Box>
      </form>
      <Typography>
        Don&apos;t have an account?
        {' '}
        <Link to="/signup">Sign up now!</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
