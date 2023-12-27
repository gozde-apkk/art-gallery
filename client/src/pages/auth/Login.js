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
import { RESET_AUTH, loginUser } from "../../redux/features/auth/authSlice.js";
const Login = () => {
       

    const [users, setUsers] = useState({})
    const {isLoading , isLoggedIn, isSuccess} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const {register, watch, formState: {errors}} =  useForm();

   const handleChange = (e) => {
    setUsers({...users , [e.target.id] : e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!users.email || !users.password ){
      toast.error("Please fill all the fields");
      return;
    }
   if(!validateEmail( users.email)){
      return toast.error("Please enter a valid email address");
   }
  
   console.log("userdata" , users)
     await dispatch(loginUser(users));
  }

  useEffect(() => {
    if(isSuccess && isLoggedIn){
      navigate("/");
    }

    dispatch(RESET_AUTH())
  }, [isSuccess, navigate, dispatch, isLoggedIn])
  return (
    <>
     {isLoading && <Loader/>}
    <div className="h-full text-white ">
      <Card>
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn">
              Log In
            </button>
          </div>
          <div className="social-icons">{/* Lottie animations */}</div>
          <form    onSubmit={handleSubmit}  noValidate className="input-group" id="Login">
            <input
              id="email"
              {...register("email" , {
                required : 'email is required',
                pattern : {
                  value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message : 'invalid email address'
                }
              })}
              className="input-field"
              type="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
             {errors.email &&  <p className="text-red-50">{errors.email.message}</p>}
            <input
             id="password"
             {...register("password" , {
               pattern : {
                 value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                 message : 'password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number'
               }
             })}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            {errors.passord &&  <p className="text-red-50">{errors.passord.message}</p>}
            <a href="">Lost Your Password</a>
            <button type="submit" className="submit-btn">
              Log In
            </button>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
      </Card>
    </div>
    </>
  );
};

export default Login;
