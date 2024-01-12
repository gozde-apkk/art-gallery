



import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import toast from 'react-hot-toast';

const ProfileImage = ({user}) => {

    const {logout} =  useContext(AuthContext);
    const handleLogout = ()=> {
        logout().then(() => {
            toast.success("Logout Successfully")
        }).catch((err) =>{
            toast.error(err);       
        })
    }
  return (
    <div>
<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
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
    </ul>
  </div>
</div>  
    </div>
  )
}

export default ProfileImage
