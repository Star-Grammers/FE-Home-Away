import React, { useContext } from 'react'
import { AuthContext } from './Auth'

const Dashboard = () => {
    const { handleLogout } = useContext(AuthContext)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Home Away</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;