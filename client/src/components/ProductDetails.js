import { FaEye, FaHeart } from "react-icons/fa";
import { selectProductById } from "../redux/features/products/productsSlice.js";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext.js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { userInfo } = useSelector((state) => state.auth);
  const product = useSelector(selectProductById);
  const cart= useContext(CartContext);
  const { id } = useParams();

  return (
    <div className="p-2 h-full  text-white">
      {" "}
      {product && (
        <>
          <div className="h-full px-24">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-50  flex justify-center h-[36rem] border-gray-50">
                {" "}
                <img
                  className="h-full w-[31rem] object-fill p-8"
                  sizes={5}
                  src={product.images}
                />{" "}
              </div>{" "}
              <div
                style={{
                  boxShadow: "1px 1px red",
                }}
                className="p-12 "
              >
                <h3 className="text-5xl pl-3 pt-3"> {product.name} </h3>{" "}
                <h6 className="pl-3 pt-3"> Owned By {product.creater} </h6>{" "}
                <div className="flex gap-3 items-center pt-5 pl-7">
                  <FaEye
                    className=""
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <span className=""> {product.reviews} </span>{" "}
                  <FaHeart size={24} /> <span> {product.favorite} </span>{" "}
                </div>{" "}
                <div
                  style={{
                    background: "#860d00",
                  }}
                  className="mt-16 h-[41%]"
                >
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-3xl p-12 ">
                      {" "}
                      Current price: <span> $ {product.price} </span>
                    </p>
                    {userInfo && (
                      <div>
                        <button
                          onClick={() => {
                            cart.addOneToCart(product.id);
                            toast.success("Added to Cart");
                          }}
                          className=" hover:bg-red-950 p-2 "
                        >
                          {" "}
                          Add to cart{" "}
                        </button>{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </>
      )}{" "}
    </div>
  );
}
