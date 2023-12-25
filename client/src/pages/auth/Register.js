import React, { useEffect, useState } from "react";
import "./authstyle.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Card from "../../../src/components/card/Card.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  Spinner  from "./Spinner.js";
import { useRegisterMutation } from '../../redux/features/auth/usersApiSlice';
import {setCredentials} from "../../redux/features/auth/authSlice"
import {useForm} from "react-hook-form";
import { selectLoggedInUser, createUserAsync } from "./authSlices.js";


const  initialState = {
  name : "",
  email : "",
  password : "",
  password2:"",  
}
const Register = () => {



  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(initialState);
 
  const {name, email, password, password2} = formData
  const {register, handleSubmit , watch, formState: {errors}} =  useForm();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  
  const user = useSelector(selectLoggedInUser);
  const onSubmit = async (e) => {
   try{

    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }
  }catch(err){
    console.log(err)
  }
  }

  const dispatch = useDispatch();

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
            onSubmit={handleSubmit((data) =>{
              dispatch(createUserAsync({email : data.email, password: data.password, name : data.name, password2 : data.password2}));
            })}
            className="input-group text-white"
            noValidate
            style={{
              left: formType === "register" ? "450px" : "50px",
            }}
          >
            <input
              id='name'
              {...register('name',{required : "name is required"})}
      
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required

            />{" "}
        {errors.name && <p className="text-red-50">{errors.name.message}</p>}
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
            />
           {errors.email &&  <p className="text-red-50">{errors.email.message}</p>}
            <input
              id='password'
              {...register('password',{required : "password is required"})}
             
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
          
            />{" "}
            {errors.password && <p className="text-red-50">{errors.password?.message}</p>}
            <input
              id="password2"
              {...register('password2',{required : "password2 is required"})}
             
              className="input-field"
              type="password2"
              placeholder="Enter Password"
              required
         
            />
            {errors.password2 && <p className="text-red-50">{errors.password2?.message}</p>}
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
