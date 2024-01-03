import React, { useEffect, useState } from "react";
import "./authstyle.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {checkUserAsync} from "./authSlices.js"
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/index.js";
import Loader from "./Loader.js";
import {useFormik} from 'formik'
import * as Yup from "yup"
import { useLoginMutation } from "../../redux/features/auth/userApiSlice.js";
import { setCredentials } from "../../redux/features/auth/authSlice.js";
const Login = () => {
  
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();   
  const[login, {isLoading}] = useLoginMutation();
  const {userInfo} = useSelector((state) => state.auth)
   const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap()
      
      if(dispatch(setCredentials({...res}))){
        navigate('/');
        toast.success("Login Successfuly")
      }else{
        navigate("/login")
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err.data.message);
    }
   }

  return (
    <>
    
    <div className="h-full text-white ">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn">
              Log In
            </button>
          </div>
          <div className="social-icons">{/* Lottie animations */}</div>
          <form  onSubmit={sumbitHandler}   noValidate className="input-group" id="Login">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
      
              className="input-field"
              type="email"
              placeholder="Enter Email"
     
            />
            <input
             id="password"
            value={password}
              onChange={(e) => setPassword(e.target.value)}
          
              className="input-field"
              type="password"
              placeholder="Enter Password"
  
            />
             {isLoading && <Loader/>}
            <a href="">Lost Your Password</a>
            <button type="submit" className="submit-btn">
              Log In
            </button>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
    </div>
    </>
  );
};

export default Login;
