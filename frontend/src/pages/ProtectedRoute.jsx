import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
