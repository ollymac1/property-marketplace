import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoute = () => {
	const { loggedIn, loading } = useAuthStatus();

	if (loading) {
		return <Spinner />;
	}

	return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
