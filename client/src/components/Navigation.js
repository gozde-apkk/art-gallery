import React, { useContext, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { CartContext } from "../context/cart/CartContext";
import { IconButton, useTheme } from "@mui/material";
import { setMode } from "../redux/features/theme";
import FlexBetween from "./FlexBetween";
import { AuthContext } from "../context/auth/AuthContext";
import { useLogoutMutation } from "../redux/features/auth/userApiSlice";
import { logout } from "../redux/features/auth/authSlice";

const Navigation = () => {
  const cart = useContext(CartContext);
  const theme = useTheme();
  console.log("navigation>", cart);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const navRef = useRef();
     const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
  const logo = (
    <div>
      {" "}
      {theme.palette.mode === "dark" ? (
        <Link to="/">
          <img className="w-10 " src="../icon/whitelogo.png" alt="logo" />
        </Link>
      ) : (
        <Link to="/">
          <img className="w-10" src="../icon/darklogo.png" alt="logo" />
        </Link>
      )}{" "}
    </div>
  );
  const carts = (
    <>
      <span className=" w-20   flex relative  mx-4 active:text-red-500">
        <Link className="" to="/cart">
          Cart{" "}
          <button onClick={handleShow}>
            {" "}
            <FaShoppingCart size={20} className="inline ml-2" />
          </button>{" "}
          <p className="absolute top-0 right-1 bg-red-500  text-xs px-1 rounded-full">
            {" "}
            {cart.items.length > 0 && (
              <div>
                <span> {cart.items.length} </span>{" "}
              </div>
            )}{" "}
          </p>{" "}
        </Link>{" "}
      </span>{" "}
    </>
  );
  return (
    <div className=" text-lg  sm:mx-2 h-20 p-2 items-center lg:mx-44 justify-between border-2 flex">
      {" "}
      {logo}{" "}
      <div className="relative p-10">
        <nav ref={navRef} className="flex w-full  justify-around items-center">
          {" "}
          {userInfo && (
            <ul className="h-7">
              <li className="mx-4  hover:bg-red-600">
                <NavLink
                  className="active:relative sm:mx-1 active:text-rose-500"
                  to="/store"
                >
                  Shop{" "}
                </NavLink>{" "}
              </li>{" "}
            </ul>
          )}
        </nav>{" "}
      </div>{" "}
      <FlexBetween>
        {" "}
        {user || userInfo ? <> {carts} </> : ""}{" "}
        <IconButton onClick={() => dispatch(setMode())}>
          {" "}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined
              sx={{
                fontSize: "25px",
              }}
            />
          ) : (
            <LightModeOutlined
              sx={{
                fontSize: "25px",
              }}
            />
          )}{" "}
        </IconButton>{" "}
        {user || userInfo ? (
          <IconButton onClick={logoutHandler}>
          {" "}
          <NavLink
            to="/logout"
            className=" p-2 mx-4 mr-2 active:relative active:text-rose-500"
          >
            Logout{" "}
          </NavLink>{" "}
        </IconButton>
        ) : (
          <IconButton>
            {" "}
            <NavLink
              to="/login"
              className=" p-2 mx-4 mr-2 active:relative active:text-rose-500"
            >
              Login{" "}
            </NavLink>{" "}
          </IconButton>
        )}{" "}
      </FlexBetween>{" "}
    </div>
  );
};

export default Navigation;