


import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/style.css'


const NavbarMed = () => {
  return (
    <div className='nav-container'>
      <div className='navbar-med'>
        
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/artwork">
          <li>ArtWork</li> 
         </Link>
        <Link to="/profile" >
          <li>Profile</li>
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to="/login">
            Sign in
        </Link>
        <Link to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default NavbarMed
