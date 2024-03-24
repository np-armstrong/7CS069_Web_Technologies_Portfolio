import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const[user, setUser] = useState(localStorage.getItem('user') || ""); 
    const[token, setToken] = useState(localStorage.getItem('site') || "");
    const navigate = useNavigate();

    async function loginAction(data) {
        
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if(response.status !== 401) { // This is a way to determine status. Go use it in other requests with error handling issues 
                setUser(responseData.username);
                setToken(responseData.token);
                localStorage.setItem('site', responseData.token);
                localStorage.setItem('user', responseData.username);
                navigate('/home');
                return;
            }
            throw new Error(responseData.message);
        } catch (error) {
            alert(error)
        }

    }

    async function logoutAction() {

        try {
            const response = await fetch('api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify()
            });
            const responseData = await response.json();
            if(response.status !== 401 && response.status !== 500) {
                setUser(null);
                setToken("");
                localStorage.removeItem('site');
                localStorage.removeItem('user');
                navigate('/login');
                return;
            }
            throw new Error('Error logging out');
        } catch (error) {
            alert(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, loginAction, logoutAction }} >
        {children}
        </AuthContext.Provider>
    );
    
}

export function useAuth() {
  return useContext(AuthContext);
}
