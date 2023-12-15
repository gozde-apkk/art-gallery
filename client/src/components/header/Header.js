import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import "../../style/style.css";

const Header = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStick , setSticky] = useState(false) ;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setSticky(true)
      }else {
        setSticky(false);
      }
    }
   const res =  window.addEventListener('scroll', handleScroll);
    return res;
  },[]);

  return ( 
    <div className="z-50  top-0 inset-x-0 h-16">
      <header className=" relative ">
        <div className="mx-auto max-w-screen-xl  w-fullpx-5 md:px-20">
          <div className="border-b border-gray-50">
            <div className="flex h-16 justify-between items-center">
              <div className="ml-4 flex justify-between lg:ml-0">
                <Link to="/">
                  <img
                    className="w-10 h-10"
                    alt="profile"
                    src="./icon/whitelogo.png"
                  />
                </Link>
              </div>
              <div className="flex smartphone  lg:flex sm:hidden items-center gap-5 hover:text-gray-950  text-gray-50">
                <ul className="flex  gap-2" >
                  <li onClick={() => setMenu("shop")}>
                    <Link to="/shop" className="hover:bg-gray-300 p-2">
                     
                      SHOP
                      {menu === "shop" ? <hr /> : <></>}
                    </Link>
                  </li>
                  <li onClick={() => setMenu("nft")}>
                    <Link to="/nft" className="hover:bg-gray-300 p-2">
                      NFT
                      {menu === "nft" ? <hr /> : <></>}
                    </Link>
                  </li>
                  <li onClick={() => setMenu("digital")}>
                    <Link to="/digital" className="hover:bg-gray-300 p-2"> 
                      DIGITAL
                      {menu === "digital" ? <hr /> : <></>}
                    </Link>
                  </li>
                  <li onClick={() => setMenu("canvas")}>
                    <Link to="/canvas" className="hover:bg-gray-300 p-2">
                      CANVAS
                      {menu === "canvas" ? <hr /> : <></>}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="relative flex items-center text-gray-50">
                <Link to="/login">
                  <button className="hover:bg-gray-300 hover:text-gray-950 p-3 w-20 font-sans ">
                    Login
                  </button>
                </Link>
                <div>
                  <div className="absolute -top-3 -right-3 bg-red-700  w-3 h-3">
                    <SlBasket size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
