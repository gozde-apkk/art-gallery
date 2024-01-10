import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "../../../src/style/style.css";
import { Link } from "react-router-dom";
const Section = ({ products }) => {
  console.log(products);
  return (
    <div
      style={{
        color: "white",
      }}
      className="flex h-full bg-black flex-col"
    >
      <div className="text-aliceblue  text-4xl flex justify-center m-10">
        <h1>THE Product</h1>
      </div>
      <Swiper
        style={{
          width: "100%",
          height: "23rem",
        }}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 100000,
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
            <SwiperSlide className=" backdrop-blur-3xl" key={idx}>
            <Link  to="/product-details/`${product.id}`">
            <div className="border-2 w-[16rem] h-[23rem]">
                <div className="flex  flex-col border-2 w-full h-full items-end">
                 <div className="h-[15.75rem] w-full border-2">
                    <img className="object-contain" src={product.images}/>
                 </div>
                 <div className="h-12 w-full flex items-center justify-around">
                    <span>{product.name} </span>
                    <span> ${product.price}</span>
                 </div>
                 <div className="flex hover:bg-red-500 items-center w-full justify-center p-1">
                    <button>Add to cart</button>
                 </div>

                </div>
            
              </div></Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Section;
