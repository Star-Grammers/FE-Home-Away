import React, { useState, useContext } from 'react'
import { AuthContext } from './Auth'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSignIn } = useContext(AuthContext);

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
                <button type='submit'>Signin</button>
            </form>
        </div>
    )
}

export default Signin;