import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { CartContext } from "../../context/cart/CartContext";
import { useSelector } from "react-redux";

const ProductComponent = ({product}) => { 
  const { addToCart} = useContext(CartContext)
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="w-48  text-white border-2 m-4 h-68">
        <Link to={`/product-details/${product._id}`}>
    
    {product &&  (
       <>
       <div className="w-full h-[70%]">
       <image className="w-full h-full object-cover " 
       src={product.images} />
                 </div>
       <p className="justify-center flex">{product.name} </p>
       <p className="flex justify-center mt-1"> ${product.price} </p>
         {userInfo && (
                <button  className="w-full mt-4 hover:bg-red-500" onClick={() =>{ addToCart(product)
                  toast.success("Added to Cart")}}>Add to Cart</button>
         )}
        </>

    )}    
        </Link>
      </div>
  );
};

export default ProductComponent;
