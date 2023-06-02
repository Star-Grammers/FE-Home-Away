import React, { createContext, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export interface AuthContextProps {
  // eslint-disable-next-line no-unused-vars
  handleSignIn: (email: string, password: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthProps = {
  children: ReactNode;
};

const Auth: React.FC<AuthProps> = ({ children }) => {
  const history = useHistory();

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:3030/user/signup', {
        email,
        password
      });
      sessionStorage.setItem('token', response.data.token);
      console.log(response.data.token, 'TOKEN1234');
      history.push('/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = (): void => {
    history.push('/signup');
  };

  return (
    <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
