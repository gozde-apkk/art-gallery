



import React from 'react'
import ProductCard from './ProductCard'
import { nft_data } from '../data/nftdata'

const Product = () => {
    const data = nft_data;
  return (
    <div className='text-white  mx-32 h-full '>
    <h1 className='text-3xl h-[7rem] p-5 font-medium'>Product List</h1>
    <div className='flex w-full h-full  max-w-2xl lg:max-w-7xl '>
        <div className='w-[400%] border-2' >Filtre</div>
        {/* <div className='w-[80%] border-2 h-[50%] flex-wrap flex  p-3 '> 
        {data.map((item , id) => 
        <div className='m-1 h-[16rem]'>
            <ProductCard  key={id} props={item}/>
        </div>)}
        </div> */}

<div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {data.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.img}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.creater}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Product
