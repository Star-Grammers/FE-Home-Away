import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useState
} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export interface AuthContextProps {
  // eslint-disable-next-line no-unused-vars
  handleSignIn: (email: string, password: string) => void;
  handleLogout: () => void;
  setUserId: Dispatch<SetStateAction<undefined>>
  userId: string | undefined;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthProps = {
  children: ReactNode;
};

const Auth: React.FC<AuthProps> = ({ children }) => {
  const [userId, setUserId] = useState<undefined>(undefined);
  const history = useHistory();
  console.log('🚀 ~ file: Auth.tsx:23 ~ userId:', userId);

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      await axios.post('http://localhost:3030/user/signup', {
        email,
        password
      });
      history.push('/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = (): void => {
    history.push('/signup');
  };

  return (
    <AuthContext.Provider value={{
      handleSignIn,
      handleLogout,
      setUserId,
      userId
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
