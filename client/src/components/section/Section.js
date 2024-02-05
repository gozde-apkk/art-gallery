import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import './style.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Section = ({ products }) => {
  console.log(products);
  const { addToCart } = useContext(CartContext);
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="flex h-full flex-col" >
      <div className="  text-4xl flex justify-center m-10">
        <h1> THE PRODUCT </h1>{" "}
      </div>{" "}
      <Swiper
        style={{
          width: "100%",
          height: "25rem",
        }}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 1000000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="gap-4"
      >
        {products &&
          products.map((product, idx) => (
            <SwiperSlide className="w-[20rem] " key={idx}>
              <Link to={`/product-details/${product.id}`}>
                <div className=" w-[16rem]  h-[25rem]">
                  <div className="flex  flex-col w-full h-full items-end">
                    <div className="h-[15.75rem] w-full">
                      <img className="object-contain" src={product.images} alt="" />
                    </div>
                    <div className="h-12 mt-8 w-full flex items-center justify-around">
                      <span> {product.name} </span>{" "}
                      <span> $ {product.price} </span>{" "}
                    </div>{" "}
                    <div className="flex hover:bg-red-500 items-center w-full justify-center px-3">
                    {userInfo && (
                           <button
                           onClick={() => {
                             addToCart(product);
                             toast.success("Added to Cart");
                           }}
                         >
                           {" "}
                           Add to cart{" "}
                         </button>
                    )}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}{" "}
      </Swiper>{" "}
    </div>
  );
};

export default Section;
