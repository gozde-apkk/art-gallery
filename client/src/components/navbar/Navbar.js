



import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
import NavbarRight from './navbaritem/NavbarRight'
import NavbarMed from './navbaritem/NavbarMed'
import '../../style/style.css'

const Navbar = () => {
  return (
    <div id="nav" className='flex w-full h-[90px] '>
        <NavbarLeft/>
        <NavbarMed/>
        
    </div>
  )
}

export default Navbar
