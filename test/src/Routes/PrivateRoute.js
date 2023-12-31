import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
const token = localStorage.getItem('token');
  return token !== 'null' ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
