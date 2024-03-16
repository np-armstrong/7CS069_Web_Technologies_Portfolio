import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const[user, setUser] = useState(null); 
    const[token, setToken] = useState(localStorage.getItem('site') || "");
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
            if(responseData) {
                setUser(responseData.username);
                setToken(responseData.token);
                localStorage.setItem('site', responseData.token);
                navigate('/home');
                return;
            }
            throw new Error(responseData.message);
        } catch (error) {
            console.error('Error:', error);
            alert(error)
        }
    }

    function logoutAction() {
        //TODO: Send post request to logout - pass token from local storage to API
        setUser(null);
        setToken("");
        localStorage.removeItem('site');
        navigate('/login');
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

//src: https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5