import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from './authSlices';

const PrivateRoute = ({children}) => {
  const user = useSelector(selectLoggedInUser);
  if(!user){
    return <Navigate to="/login"/>
  }
  return children;
};
export default PrivateRoute;
