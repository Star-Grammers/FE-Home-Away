import React, { useContext } from 'react'
import { AuthContext } from './Auth'

function Dashboard() {
    const { handleLogout } = useContext(AuthContext)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> This  is the protected dashboard Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;