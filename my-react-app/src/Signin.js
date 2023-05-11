import React, { useState, useContext } from 'react'
import { AuthContext } from './Auth'
import { Link, useLocation } from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const error = queryParams.get('error');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignIn(email, password)
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Signin Page</h1>
            {error && (
                <p>
                    {error === 'login'
                        ? "Sorry, we couldn't find your account. You can either create a new account or try logging in again."
                        : ''}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    Email
                </label>
                <br />
                <input id='email' type='email' placeholder='Email' onChange={handleEmail} value={email} />
                <br />
                <label htmlFor='password'>
                    Password
                </label>
                <br />
                <input id='password' type='password' placeholder='Password' onChange={handlePassword} value={password} />
                <br />
                <br />
                <button type='submit'>Create</button>
            </form>
            <p>
                Already have an account?{' '}
                <Link to="/LoginForm">Click here to login!</Link>
            </p>
        </div>
    )
}

export default Signin;