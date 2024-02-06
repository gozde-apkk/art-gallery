import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {
  fetchAllProductAsync,
  selectAllProducts,
} from "../redux/features/products/productsSlice";

const ProductPage = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingLeft: "72px",
        flex: "wrap",
      }}
      className=" flex flex-wrap w-[68rem] h-full"
    >
      {" "}
      {products &&
        products.map((product, index) => {
          return (
            <div className=" flex mr-2">
              <ProductComponent key={index} product={product} />{" "}
            </div>
          );
        })}{" "}
    </div>
  );
};

export default ProductPage;
