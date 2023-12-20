import React from "react";
import {Link} from 'react-router-dom'
const HomeSectionCard = ({ props }) => {
  return (
    <div className="w-[250px] cursor-pointer h-[350px] flex flex-col items-center  overflow-hidden ">
     
      <div className="w-full h-full ">
    <Link to={`/product/${props.id}`}>
    <div className=" w-full h-[70%]">
          <img className=" object-cover  h-full w-full" src={props.img} />
        </div>
        <div className="h-[30%] p-5 text-justify">
         <div className="h-[50%] mb-2">
         <p className=" text-white text-xl">{props.creater}</p>
         </div>
         <div className="h-[50%] pl-2">
         <p className="text-white text-sm"> Price : {props.price}</p>
         </div>
        </div>
    </Link>
      </div>
    </div>
  );
};

export default HomeSectionCard;
