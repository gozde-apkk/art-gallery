


import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRight = () => {
  return (
    <div>
       <Link to="/sign-in">
          <li>Sign In</li>
       </Link>
       <Link to="/sign-up">
          <li>Sign Up</li>
       </Link>
    </div>
  )
}

export default NavbarRight
