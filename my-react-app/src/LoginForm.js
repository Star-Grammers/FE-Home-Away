import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleLogin = async (email, password) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3030/user/login',
                data: {
                    email: `${email}`,
                    password: `${password}`,
                },
            });

            sessionStorage.setItem('token', response.data.token);
            setShowSuccessMessage(true);
            history.push('/dashboard');
        } catch (e) {
            console.log(e);
        }
    };



    const handleLoginSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    // return (
    //     <form onSubmit={handleLoginSubmit}>
    //         <input
    //             type="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <button type="submit">Login</button>
    //     </form>
    // );
    return (
        <form onSubmit={handleLoginSubmit}>
            {showSuccessMessage && <p>Login successful!</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};
export default LoginForm;