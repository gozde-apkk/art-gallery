


import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {styles} from "./styles";
import {FaShoppingCart, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import sass from './Navigation.module.scss'

export const logo = (
  <Link>
  <img className='w-10 ' src="./icon/whitelogo.png" alt="logo" />
  </Link>
)

const Navigation = () => {
     const [showMenu, setShowMenu] = useState(false)

      const toggleMenu = () => {
        setShowMenu(!showMenu)
      }

      const hideMenu= () => {
        setShowMenu(false)
      }
  const cart = (
    <span className=' w-20  flex relative text-white hover:text-red-600 active:text-red-500'>
      <Link className='' to="/cart">
      Cart
        <FaShoppingCart size={20} className='inline ml-2'/>
        <p className='absolute top-0 right-1 bg-red-500 text-white text-xs px-1 rounded-full'>0</p>
      </Link>
    </span>
  )
  return (
    <div className=' text-lg h-20 p-2 items-center mx-52 justify-between  bg-black text-white flex  mt-4 '>
     
        {logo}
       <nav className='flex'  >

        <div className={showMenu ? `${sass["nav-wrapper"]} ${sass["show-nav-wrapper"]}` : `${sass["nav-wrapper"]} ${sass["hide-nav-wrappr"]}`}  
        onClick={hideMenu}>

        </div>
        <ul >
          <li className={sass["logo-menu"]}>
            {logo}
            <FaTimes size={22} onClick={hideMenu} color='white'/>
            </li>

          <li className='mx-4 hover:bg-red-600'>
            <NavLink className="active:relative active:text-rose-500" to="/shop">
            Shop
            </NavLink>
            
          </li>
        </ul>
        <div className='flex'>
             <span className=''>
              <NavLink to={"login"} className=" p-2 hover:bg-red-600 mx-4 mr-2 active:relative active:text-rose-500"> Login</NavLink>
              <NavLink to={"register"} className=" p-2 hover:bg-red-600 mx-4 mr-2 active:relative active:text-rose-500"> Register</NavLink>
              <NavLink to={"myorder"} className="p-2 hover:bg-red-600 mx-4 active:relative active:text-rose-500"> My Order</NavLink>
             </span>
             {cart}
        </div>
       </nav>
       <div className='menu-icon'>
       <HiOutlineMenuAlt3 className='inline ml-3' size={30} onClick={hideMenu}/>
        </div>
    </div>
  )
}

export default Navigation
