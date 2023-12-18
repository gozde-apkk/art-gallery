


import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import {FaShoppingCart} from 'react-icons/fa'

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "") 
const Navigation = () => {
  const cart = (
    <span>
      <Link to="/cart">
      Cart
        <FaShoppingCart />
      </Link>
    </span>
  )
  return (
    <div className=' text-lg h-20 p-2 items-center mx-52 justify-between  bg-black text-white flex  mt-4 '>
     
      <Link>
      <img className='w-10 ' src="./icon/whitelogo.png" alt="logo" />
      </Link>
       <nav className='flex h-8 justify-between w-[94%]'>
        <ul className='flex w-[50%] justify-between list-none'>
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
    </div>
  )
}

export default Navigation
