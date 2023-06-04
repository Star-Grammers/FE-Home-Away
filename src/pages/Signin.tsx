import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Typography,
  Button, TextField
} from '@mui/material/';
import { AuthContext, AuthContextProps } from '../store/Auth.tsx';

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
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">Create Account</Typography>
      {errorMessage && <p>User already exists</p>}
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Email</Typography>
        <Box
          sx={{ p: 1 }}
        >
          <TextField
            size="small"
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
        </Box>
        <Typography variant="h6">Password</Typography>
        <Box
          sx={{ p: 1 }}
        >
          <TextField
            size="small"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />
        </Box>

        <Box
          sx={{ p: 1 }}
        >
          <Button type="submit" variant="outlined">Create</Button>
        </Box>
      </form>
      <Box
        sx={{ p: 1 }}
      >
        <Typography>
          Already have an account?
          {' '}
          <Link to="/LoginForm">Click here to login!</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signin;
