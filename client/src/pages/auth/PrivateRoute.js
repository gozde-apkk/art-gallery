      import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from './authSlices';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

const PrivateRoute = ({children}) => {
      const {user} = useContext(AuthContext);
      const location = useLocation();
    if(user) {
      return children

    }
    return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>

    )
};
export default PrivateRoute;
