import React, { useEffect, useState } from "react";
import "./authstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Card from "../../../src/components/card/Card.js";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";
import Loader from "./Loader.js";
import { RESET_AUTH, registerUser } from "../../redux/features/auth/authSlice";

import { validateEmail } from "../../utils/index.js";
const Register = () => {
  const [formType, setFormType] = useState("login");
   const [users, setUsers] = useState([]);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);
   const {isLoading , isLoggedIn, isSuccess} = useSelector((state) => state.auth);
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUsers({...users , [e.target.id] : e.target.value});
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!users.email || !users.password || !users.name || !users.password2){
      toast.error("Please fill all the fields");
      return;
    }

    if( users.password.length < 6){
      return toast.error("Password must be at least 6 characters");
    }
   if(!validateEmail( users.email)){
      return toast.error("Please enter a valid email address");
   }

     dispatch(registerUser(users));
      if(users) {
        navigate("/");
      }

  }

  useEffect(() => {
    if(isSuccess){
      navigate("/");
    }else{
      navigate("/register");
    }

    dispatch(RESET_AUTH())
  },[isSuccess, isLoggedIn, navigate, dispatch]);
  return (
    <>
    
    <div className="h-full ">
    {isLoading && <Loader/>}
      <Card>
        <div className="form-box">
          <div className="button-box">
            <div id="btn"> </div>{" "}
            <button type="button" className="toggle-btn">
              Register{" "}
            </button>{" "}
          </div>{" "}
          <div className="social-icons"> {/* Lottie animations */} </div>{" "}
          <form
            onSubmit={handleSubmit}
            className="input-group text-white"
            noValidate
            style={{
              left: formType === "register" ? "450px" : "50px",
            }}
          >
            <input
              id="name"
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required
              onChange={handleChange}
            />{" "}
            {errors.name && (
              <p className="text-red-50">{errors.name.message}</p>
            )}
            <input
              id="email"
            
              className="input-field"
              type="email"
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {errors.email && (
              <p className="text-red-50">{errors.email.message}</p>
            )}
            <input
              id="password"
            
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />{" "}
            {errors.password && (
              <p className="text-red-50">{errors.password?.message}</p>
            )}
            <input
              id="password2"
             
              className="input-field"
              type="password2"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />
            {errors.password2 && (
              <p className="text-red-50">{errors.password2?.message}</p>
            )}
            <a href="">
              By registering, you agree to the Terms, Data Policy and Cookies
              Policy{" "}
            </a>{" "}
            <button type="submit" className="submit-btn">
              Register{" "}
            </button>{" "}
            <span>
              Already have an account ? <Link to="/login"> Login </Link>{" "}
            </span>{" "}
          </form>{" "}
        </div>{" "}
      </Card>{" "}
    </div>
    </>
  );
};
export default Register;
