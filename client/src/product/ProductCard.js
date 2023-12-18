




import React from 'react'
import { nft_data } from '../data/nftdata'

const ProductCard = ({props}) => {

  return (
    <div className="w-[161px] cursor-pointer h-[240px] border-2 flex flex-col items-center  overflow-hidden ">
    <div className="w-full h-full ">
      <div className=" w-full h-[70%]">
        <img className=" object-cover  h-full w-full" src={props.img} />
      </div>
      <div className="h-[30%] text-justify">
       <div className="h-[50%] mb-2">
       <p className=" text-white text-md">{props.creater}</p>
       </div>
       <div className="h-[50%] pl-2">
       <p className="text-white text-sm"> Price : {props.price}</p>
       </div>


      </div>
    </div>
  </div>
  )
}

export default ProductCard
