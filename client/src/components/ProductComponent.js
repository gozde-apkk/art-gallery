import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/cart/CartContext";
import { useSelector } from "react-redux";

const ProductComponent = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="w-48 border-2-black m-4 h-68">
      <Link to={`/product-details/${product.id}`}>
        {" "}
        {product && (
          <>
            <div className="w-full h-[70%]">
              <img
                className="w-full h-full object-cover "
                src={product.images}
                alt=""
              />{" "}
            </div>{" "}
            <p className="justify-center flex"> {product.name} </p>{" "}
            <p className="flex justify-center mt-1"> $ {product.price} </p>{" "}
            {userInfo && (
              <button
                className="w-full mt-4 hover:bg-red-500"
                onClick={() => {
                  cart.addOneToCart(product.id);
                  toast.success("Added to Cart");
                }}
              >
                {" "}
                Add to Cart{" "}
              </button>
            )}{" "}
          </>
        )}{" "}
      </Link>{" "}
    </div>
  );
};

export default ProductComponent;
