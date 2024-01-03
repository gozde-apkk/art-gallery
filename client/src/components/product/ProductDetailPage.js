


import React from 'react'
import ProductDetails from './ProductDetails'
import { fake_data } from '../../data/fakedata'
const ProductDetailPage = () => {
  return (
    <div>
       <ProductDetails product={fake_data}/>
    </div>
  )
}

export default ProductDetailPage
