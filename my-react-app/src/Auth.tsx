import React, { createContext, ReactNode } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export interface AuthContextProps {
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
      const response = await axios.post("http://localhost:3030/user/signin", {
        email: email,
        password: password,
      });
      sessionStorage.setItem("token", response.data.token);
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = (): void => {
    sessionStorage.clear();
    history.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
