import React, { useEffect, useState } from "react";
import "./authstyle.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Card from "../../../src/components/card/Card.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  Spinner  from "./Spinner.js";
import { register } from "../../redux/features/auth/authSlice";
import { reset } from "../../redux/features/auth/authSlice";
const Register = () => {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  console.log(formData);
  const { username, email, password, password2 } = formData;
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  // useEffect(() => {
  //   // redirect user to login page if registration was successful
  //   if (isSuccess) navigate('/login')
  //   // redirect authenticated user to profile screen
  //   if (userInfo) navigate('/user-profile')
  // }, [navigate, userInfo, isSuccess])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  // useEffect(() => {

  //   if(isError){
  //     toast.error(message)
  //   }
  //   if(isSuccess){
  //     navigate("/")
  //   }

  //   dispatch(reset())
  // },[user, message, isError, isSuccess, navigate, dispatch])
  
  
  const onSubmit = (e) => {
   try{
    e.preventDefault();

    if(password !== password2){
      toast.error("Password does not match")
    }else{
      const userData = {
        username,
        email,
        password,
      }
      dispatch(register(userData))
    }
   }catch(err){
    console.log(err);
   }
  };

  if(isLoading){
    return <Spinner/>
  }
  const handleFormToggle = (type) => {
    setFormType(type);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="h-full ">
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
            onSubmit={onSubmit}
            className="input-group text-white"
            id="Register"
            style={{
              left: formType === "register" ? "450px" : "50px",
            }}
          >
            <input
              id='username'
              name='username'
              value={username}
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required
              onChange={onChange}
            />{" "}
            <input
              id='email'
              name='email'
              value={email}
              className="input-field"
              type="email"
              placeholder="Enter Email"
              required
              onChange={onChange}
            />{" "}
            <input
              id='password'
              name='password'
              value={password}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
              onChange={onChange}
            />{" "}
            <input
              id="password2"
              name="password2"
              value={password2}
              className="input-field"
              type="password2"
              placeholder="Enter Password"
              required
              onChange={onChange}
            />
            <a href="">
              By registering, you agree to the Terms, Data Policy and Cookies
              Policy{" "}
            </a>{" "}
            <button type="submit"  className="submit-btn">
              Register{" "}
            </button>{" "}
            <span>
              Already have an account ? <Link to="/login"> Login </Link>{" "}
            </span>{" "}
          </form>{" "}
        </div>{" "}
      </Card>{" "}
    </div>
  );
};

export default Register;
