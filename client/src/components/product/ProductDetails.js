import ReactStars from "react-rating-stars-component";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
  id: "26564",
  creater: "Poglin",
  name: "Nycra",
  reviews: 76,
  favorite: 31,
  price: 705,
  createTime: Date.now(),
  images:
    "https://firebasestorage.googleapis.com/v0/b/mern-artgallery.appspot.com/o/nft%2FHAPE%20Teaser.jpeg?alt=media&token=d9102b3d-202c-4e00-8f19-c57c3e75534b",
  description: "",
  category: "nft",
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="p-2  text-white">
      <div className="h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-50 h-[36rem] border-gray-50">
            {" "}
            <img className="h-full p-8" sizes={5} src={product.images} />{" "}
          </div>
          <div className="p-4">
            <h3 className="text-3xl pl-3 pt-3">{product.name}</h3>
            <h6 className="pl-3 pt-3">Owned By {product.creater}</h6>
            <div className="flex gap-3 items-center pt-5 pl-7">
              <FaEye className="" count={5} size={24} activeColor="#ffd700" />
              <span className="">{product.reviews}</span>
              <FaHeart size={24}/>
              <span>{product.favorite}</span>
            </div>
            <div style={{ background: "#860d00"}} className="mt-16 h-[62%]">
              <div className="flex justify-center items-center flex-col">
                 <p className="text-4xl p-12 mt-5">Current price: <span>${product.price}</span></p>
             
                 <div>
                  <button className=" hover:bg-red-950 px-6 ">Add to cart</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
