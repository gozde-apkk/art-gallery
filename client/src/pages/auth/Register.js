import React, { useEffect, useState } from "react";
import "./authstyle.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const sumbitHandler = async (e) => {
    }
  return (
    <>
      <div className="h-full ">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"> </div>{" "}
            <button type="button" className="toggle-btn">
              Register{" "}
            </button>{" "}
          </div>{" "}
          <div className="social-icons"> {/* Lottie animations */} </div>{" "}
          <form
            onSubmit={sumbitHandler}
            className="input-group text-white"
            noValidate
            style={{
              left: "50px",
            }}
          >
            <input
              id="name"
              value={name}
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <input
              id="email"
              value={email}
              className="input-field"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              id="password"
              value={password}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <input
              id="password2"
              value={password2}
              className="input-field"
              type="password2"
              placeholder="Enter Password2"
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
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
      </div>
    </>
  );
};
export default Register;
