import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductAsync,
  selectAllProducts,
} from "../../redux/features/products/productsSlice";

const ProductComponent = ({ product }) => {
  return (
    <div className="w-48  text-white border-2 m-4 h-68">
        <Link to={`/product-details/${product._id}`}>
          <div className="w-full h-[70%]">
          <img className="w-full h-full object-cover " 
          src={product.images} />
                    </div>
          <p className="justify-center flex">{product.name} </p>
          <p className="flex justify-center mt-1"> ${product.price} </p>
           <button className="hover:bg-red-500 flex justify-center mt-2 w-full ">Add to cart</button>
        </Link>
      </div>
  );
};

export default ProductComponent;
