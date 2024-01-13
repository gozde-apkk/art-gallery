import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "../../../src/style/style.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { toast } from "react-toastify";
const Section = ({ products }) => {
  console.log(products);
  const { addToCart } = useContext(CartContext);
  return (
    <div
      style={{
        color: "white",
      }}
      className="flex h-full flex-col"
    >
      <div className="text-aliceblue  text-4xl flex justify-center m-10">
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
          delay: 10000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products &&
          products.map((product, idx) => (
            <SwiperSlide className=" backdrop-blur-3xl grid grid-cols-5 " key={idx}>
              <Link to={`/product-details/${product.id}`}>
                <div className=" w-[16rem] h-[23rem]">
                  <div className="flex  flex-col w-full h-full px-36 items-end">
                    <div className="h-[15.75rem] w-full border-2">
                      <img className="object-contain" src={product.images} />{" "}
                    </div>{" "}
                    <div className="h-12 w-full flex items-center justify-around">
                      <span> {product.name} </span>{" "}
                      <span> $ {product.price} </span>{" "}
                    </div>{" "}
                    <div className="flex hover:bg-red-500 items-center w-full justify-center p-1">
                      <button
                        onClick={() => {
                          addToCart(product);
                          toast.success("Added to Cart");
                        }}
                      >
                        {" "}
                        Add to cart{" "}
                      </button>{" "}
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
