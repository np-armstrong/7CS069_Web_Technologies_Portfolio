import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const[username, setUsername] = useState(null); 
    const[token, setToken] = useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    async function loginAction(data) {
        
        try {
            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if(responseData.data) {
                setUsername(responseData.data.username);
                setToken(responseData.data.token);
                localStorage.setItem('username', responseData.data.username);
                localStorage.setItem('token', responseData.token);
                navigate('/home');
                return;
            }
            throw new Error(responseData.error);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function logoutAction() {
        setUsername(null);
        setToken(null);
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ username, token, loginAction, logoutAction }} >
        {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  return useContext(AuthContext);
}