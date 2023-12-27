



import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div style={{background:"crimson"}} className='mt-8 h-24'>
      <nav className='flex justify-center pt-4'>
        <ul className="flex text-lg justify-center items-center list-none">
            <li className='m-2 hover:text-2xl'>
                <NavLink to="profile">Profile</NavLink>
            </li>
            <li className='m-2  hover:text-2xl'>
                <NavLink to="wallet">My Wallet</NavLink>
            </li>
            <li className='m-2 hover:text-2xl'>
                <NavLink to="wishlist">Wishlist</NavLink>
            </li>

        </ul>
      </nav>
    </div>
  )
}

export default PageMenu
