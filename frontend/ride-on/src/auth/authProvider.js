import { useContext, createContext, useState } from 'react';
import { useNavigate } from react-router-dom;

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
            if(responseData.token) {
                localStorage.setItem('token', responseData.token);
                setToken(responseData.token);
                navigate('/home');
            }
        
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <AuthContext.Provider>
        {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  return useContext(AuthContext);
}