


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
        <Link to="/sign-in">
        <li>Sign In</li>
        </Link>
        <Link to="/sign-up">
        <li>Sign Up</li>
        </Link>
      </div>
    </div>
  )
}

export default NavbarMed
