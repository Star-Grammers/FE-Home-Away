import { createContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const Auth = ({ children }) => {
    const history = useHistory();

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
            sessionStorage.setItem('token', response.data.token)
            history.push("/dashboard");
        } catch (e) {
            console.log(e)
        }

    }

    const handleLogout = () => {
        sessionStorage.clear()
        history.push("/signin")
    }

    return (
        <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default Auth;