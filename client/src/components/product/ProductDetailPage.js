


import React, { useEffect } from 'react'
import ProductDetails from './ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductByIdAsync, selectProductById } from '../../redux/features/products/productsSlice'
import { useParams } from 'react-router-dom'

const ProductDetailPage = ({products}) => {
  const product = useSelector(selectProductById)
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id))
  },[dispatch, params.id])


  return (
    <div>
     
   <ProductDetails product={product} />
 
    </div>
  )
}

export default ProductDetailPage
