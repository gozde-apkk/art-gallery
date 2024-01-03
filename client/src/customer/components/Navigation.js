import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RESET_AUTH, logout, logoutUser } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ShowOnLogin,
  ShowOnLogout,
} from "../../components/hiddenLink/hiddenLink";
import { NavDropdown } from "react-bootstrap";
import { useLogoutMutation } from "../../redux/features/auth/userApiSlice";

export const logo = (
  <Link to="/">
    <img className="w-10 " src="./icon/whitelogo.png" alt="logo" />
  </Link>
);

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {userInfo} = useSelector(state => state.auth )
        const [logoutApiCall] = useLogoutMutation();
  const handleLogout = async () => {
    try {
         await logoutApiCall().unwrap();
         dispatch(logout());
         navigate('/')
    } catch (error) {   
      console.log(error)
    }
  }
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
  const cart = (
    <span className=" w-20  flex relative text-white hover:text-red-600 active:text-red-500">
      <Link className="" to="/cart">
        Cart
        <FaShoppingCart size={20} className="inline ml-2" />
        <p className="absolute top-0 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
          0
        </p>
      </Link>
    </span>
  );
  return (
    <div className=" text-lg h-20 p-2 items-center mx-32 justify-between  bg-black text-white flex">
      {logo}
      <nav ref={navRef} className="flex w-full justify-between">
        <ul>
          <li className="mx-4 hover:bg-red-600">
            <NavLink
              className="active:relative active:text-rose-500"
              to="/store"
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <div className="flex">
          <span className="">
         {userInfo ? (
         <> 

              <Link onClick={handleLogout}
                to={"/"}
                className="p-2 hover:bg-red-600 mx-4 active:relative active:text-rose-500"
              >
                {" "}
                Logout
              </Link>
         
         </>) : (
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
        </ShowOnLogout></>
         )}
            <ShowOnLogin>
          {  (
                <NavLink
                to={"myorder"}
                className="p-2 hover:bg-red-600 mx-4 active:relative active:text-rose-500"
              >
                {" "}
                My Order
              </NavLink>
          )}
            </ShowOnLogin>
            
          </span>
          {cart}
        </div>
      </nav>
      <div className="menu-icon">
      <Link to='/cart'>
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
