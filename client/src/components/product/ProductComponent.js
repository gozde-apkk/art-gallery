import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductByIdAsync, selectProductById } from "../../redux/features/products/productsSlice";

import {toast} from "react-toastify";
import { CartContext } from "../../context/cart/CartContext";




const ProductComponent = ({product}) => { 
  const { addToCart} = useContext(CartContext)
  

  return (
    <div className="w-48  text-white border-2 m-4 h-68">
        <Link to={`/product-details/${product.id}`}>
    
    {product &&  (
       <>
       <div className="w-full h-[70%]">
       <img className="w-full h-full object-cover " 
       src={product.images} />
                 </div>
       <p className="justify-center flex">{product.name} </p>
       <p className="flex justify-center mt-1"> ${product.price} </p>
        <button onClick={() =>{ addToCart(product)
                                toast.success("Added to Cart")}}>Add to Cart</button>
        </>

    )}    
        </Link>
      </div>
  );
};

export default ProductComponent;
