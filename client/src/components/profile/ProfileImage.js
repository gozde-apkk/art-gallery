



import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom'
import {useLogoutMutation} from '../../redux/features/auth/userApiSlice'
import { logout } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const ProfileImage = ({user}) => {
  const {userInfo} = useSelector((state) => state.auth)
  console.log("userInfo" , userInfo.others.roles);
const dispatch = useDispatch();
const navigate = useNavigate(); 
  const [logoutApiCall] = useLogoutMutation();
    const handleLogout = async()=> {
       try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/')
        toast.success("Logout Successfully")
           } catch (error) {
        console.log(error);
       }
    }
  return (
    <div>
<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photo} />
        </div>
    </label>
  </div> 

  
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a href="/profile">Profile</a></li>
      <li><a>Order</a></li>
      <li><a onClick={handleLogout}>Logout</a></li>
      <li>{userInfo.others.roles == 'admin' && <Link to="/dashboard">Dashboard</Link>}</li>
    </ul>
  </div>
</div>  
    </div>
  )
}

export default ProfileImage
