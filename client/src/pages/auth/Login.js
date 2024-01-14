import React, { useContext, useEffect, useState } from "react";
import "./authstyle.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import Loader from "./Loader.js";

import { useLoginMutation } from "../../redux/features/auth/userApiSlice.js";
import { setCredentials } from "../../redux/features/auth/authSlice.js";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/auth/AuthContext.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const sumbitHandler = async (e) => {
    e.preventDefault(); 
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }

  };

  useEffect(()=> {
    if(userInfo){
      navigate("/");
    }
  },[navigate, userInfo]);
  const { signUpWithGmail } = useContext(AuthContext);
  const handleGoogle = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/");
        }
        toast.success("Login Successfuly");
      })
      .catch((err) => console.log(err));
  };

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
          <form
            onSubmit={sumbitHandler}
            noValidate
            className="input-group"
            id="Login"
          >
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
            {isLoading && <Loader />}
            <a href="">Lost Your Password</a>
            <button type="submit" className="submit-btn">
              Log In
            </button>
            <div>
              <button onClick={handleGoogle}>
                <FaGoogle />
              </button>
            </div>
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
