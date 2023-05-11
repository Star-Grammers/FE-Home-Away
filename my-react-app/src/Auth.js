import { createContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import LoginForm from './LoginForm';

export const AuthContext = createContext();

const Auth = ({ children }) => {
    const history = useHistory();
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignIn = async (email, password) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3030/user/signin',
                data: {
                    email: `${email}`,
                    password: `${password}`
                }
            })
            sessionStorage.setItem('token', response.data.token);
            setSuccessMessage('Sign-in successful!');
            history.push("/dashboard");
        } catch (e) {
            console.log(e)
        }

    }

    const handleLogout = () => {
        sessionStorage.clear()
        history.push("/signin")
    }

    // return (
    //     <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
    //         {children}
    //     </AuthContext.Provider>
    // )
    return (
        <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
            {successMessage && <div>{successMessage}</div>}
            <LoginForm />
            {children}
        </AuthContext.Provider>
    );


}

export default Auth;