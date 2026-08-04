import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

export default function RequireAuth({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (!currentUser) {
    return <Navigate to="/masuk" state={{ from: location }} replace />;
  }

  return children;
}
