


import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/style.css'


const NavbarMed = () => {
  return (
    <div className='nav-container'>
      <div className='navbar-med'>
        <Link className='color-white'> Gallery </Link>
        <Link> Shop </Link>
        <Link> News </Link>
        <Link> Blog </Link>
      </div>
    </div>
  )
}

export default NavbarMed
