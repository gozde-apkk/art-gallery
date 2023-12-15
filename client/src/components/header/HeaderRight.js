



import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const HeaderRight = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className='flex items-center gap-5'>
      <div className='flex items-center  gap-1   bg-gray-300'>
        <Link onClick={() => setMenu("shop")}>SHOP</Link>
         <Link onClick={() => setMenu("nft")}>NFT</Link>
         <Link onClick={() => setMenu("digital")}>DIGITAL </Link>
         <Link onClick={() => setMenu("canvas")}>CANVAS</Link>
      </div>
      <Link to="/login">
        <button className='hover:bg-gray-300 hover:text-gray-950 p-3 w-20 font-sans '>Login</button>
      </Link>
      <div className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-700  w-3 h-3'>
            <SlBasket size={25}/>
        </div>
      </div>
    </div>
  )
}

export default HeaderRight
