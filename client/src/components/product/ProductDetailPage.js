


import React, { useContext, useEffect } from 'react'
import ProductDetails from './ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductByIdAsync, selectProductById } from '../../redux/features/products/productsSlice'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cart/CartContext'

const ProductDetailPage = () => {
  const product = useSelector(selectProductById)
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id))
  },[dispatch, params.id]);
  const cartItems = useContext(CartContext);
  console.log("ProductDetail",cartItems);
  

  return (
    <div>
     
   <ProductDetails cart={cartItems}  />
 
    </div>
  )
}

export default ProductDetailPage
