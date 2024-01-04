


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchAllProductAsync, selectAllProducts } from "../../redux/features/products/productsSlice";

const ProductPage = () => {

  const products = useSelector(selectAllProducts)
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(fetchAllProductAsync())
    console.log("PRODUCT-PAGEEE",products.products);
   },[dispatch])


  return (
    <div style={{paddingLeft:"72px" , flex:"wrap"}} className=" flex flex-wrap w-[68rem]">
       {products.products && products.products.map((product) =>{
         return <div className=" flex mr-2">
          <ProductComponent key={product.id} product={product} />
         </div>
       })}
    </div>
  );
};

export default ProductPage;
