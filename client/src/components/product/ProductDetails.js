

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductAsync, fetchProductByIdAsync, selectAllProducts, selectProductById } from "../../redux/features/products/productsSlice";
import { useParams } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import  addToCart from "../../redux/features/cart/cartSlice.js";
import { selectItems } from "../../redux/features/cart/cartSlice";


const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({product}) {
  console.log(product)
  const dispatch = useDispatch();;
  const {carts} = useSelector((state)=>state.allCart);
  const [cartData, setCartData] = useState();
  const send = (e) => {
dispatch(addToCart(e))
  }
  return (
    <div className="p-2 h-full  text-white">
      {product && (
         <div   className="h-full px-24">
         <div className="grid grid-cols-1 md:grid-cols-2">
           <div className="w-50  flex justify-center h-[36rem] border-gray-50">
             {" "}
             <img className="h-full w-[31rem] object-fill p-8" sizes={5} src={product.images} />{" "}
           </div>
           <div style={{boxShadow : "1px 1px red"}} className="p-12 ">
             <h3 className="text-5xl pl-3 pt-3">{product.name}</h3>
             <h6 className="pl-3 pt-3">Owned By {product.creater}</h6>
             <div className="flex gap-3 items-center pt-5 pl-7">
               <FaEye className="" count={5} size={24} activeColor="#ffd700" />
               <span className="">{product.reviews}</span>
               <FaHeart size={24}/>
               <span>{product.favorite}</span>
             </div>
             <div style={{ background: "#860d00"}} className="mt-16 h-[41%]">
               <div className="flex justify-center items-center flex-col">
                  <p className="text-3xl p-12 ">Current price: <span>${product.price}</span></p>
              
                  <div>
                   <button onClick={(e) => send(product)} className=" hover:bg-red-950 p-2 ">Add to cart</button>
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      )}
    </div>
  );
}



