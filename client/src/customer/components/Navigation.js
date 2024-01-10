import React, { useContext, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {Modal} from 'react-bootstrap';
import {
  ShowOnLogin,
  ShowOnLogout,
} from "../../components/hiddenLink/hiddenLink";
import { useLogoutMutation } from "../../redux/features/auth/userApiSlice";
import { CartContext } from "../../context/cart/CartContext";
export const logo = (
  <Link to="/">
    <img className="w-10 " src="../icon/whitelogo.png" alt="logo" />
  </Link>
);

const Navigation = () => {


  const cart = useContext(CartContext);

  console.log("navigation>", cart);
  const [show, setShow] = useState(false);
  const handleClose= () => setShow(false);
  const handleShow = () => setShow(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  const carts = (
    <>
    <span className=" w-20   flex relative text-white  mx-4 hover:bg-red-600  active:text-red-500">
      <Link className="" to="/cart">
        Cart
       <button onClick={handleShow}> <FaShoppingCart size={20} className="inline ml-2" /></button>
        <p className="absolute top-0 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
         {cart.cartItems.length> 0 && 
         <div><span>{cart.cartItems.length}</span></div>}
        </p>
      </Link>
    </span>


    </>
  );
  return (
    <div className=" text-lg  sm:mx-2 h-20 p-2 items-center lg:mx-44 justify-between  bg-black text-white flex">
      {logo}
      <div className="menu">
        <nav ref={navRef} className="flex w-full  justify-around items-center">
          <ul className="h-7">
            <li className="mx-4  hover:bg-red-600">
              <NavLink
                className="active:relative sm:mx-1 active:text-rose-500"
                to="/store"
              >
                Shop
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center">
            <span className="">
              {userInfo ? (
                <>
                  <Link
                    onClick={handleLogout}
                    to={"/"}
                    className="p-2 hover:bg-red-600 mx-4 active:relative active:text-rose-500"
                  >
                    {" "}
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <ShowOnLogout>
                    <NavLink
                      to="/login"
                      className=" p-2 hover:bg-red-600 mx-4 mr-2 active:relative active:text-rose-500"
                    >
                      {" "}
                      Login
                    </NavLink>
                  </ShowOnLogout>
                  <ShowOnLogout>
                    <NavLink
                      to={"register"}
                      className=" p-2 hover:bg-red-600 mx-4 mr-2 active:relative active:text-rose-500"
                    >
                      {" "}
                      Register
                    </NavLink>
                  </ShowOnLogout>
                </>
              )}
              <ShowOnLogin>
                {
                  <NavLink
                    to={"myorder"}
                    className="p-2 hover:bg-red-600 mx-4 active:relative active:text-rose-500"
                  >
                    {" "}
                    My Order
                  </NavLink>
                }
              </ShowOnLogin>
            </span>
           {carts}
       
          </div>
        </nav>
      </div>
      <div className="menu-icon text-white">
        <Link to="/cart">
          <HiOutlineMenuAlt3
            style={{ display: "inline", cursor: "pointer", marginLeft: "1rem" }}
            className="nav-btn"
            size={30}
            onClick={showNavbar}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
