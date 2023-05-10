import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> This is Home Page of the Application.</h1>
      <h2>This is publically accessible Page.</h2>
      <br />
      <div>
        <button style={{ cursor: 'pointer', marginRight: '10px' }}>
          <Link to='/signin' style={{ textDecoration: 'none' }}>
            Signin
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home



