import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authProvider';

function ProtectedRoute() {
    const auth = useAuth();
    if (auth.token === "") {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}

export default ProtectedRoute;

