import { Navigate } from 'react-router-dom';
import Storage from '../lib/storage.js';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = Storage.get('token');
  const user = Storage.get('user');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0) {
    const userRole = user?.type || token?.type;
    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
