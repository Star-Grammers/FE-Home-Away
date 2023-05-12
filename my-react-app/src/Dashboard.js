import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import Listings from "./Listings"

const Dashboard = () => {
    const { handleLogout } = useContext(AuthContext)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Home Away</h1>
            <button onClick={handleLogout}>Logout</button>
          <Listings/>
        </div>
    )
}

export default Dashboard;