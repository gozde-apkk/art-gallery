// import React, { useEffect, useState } from "react";
// import "./authstyle.css";
// import { Link } from "react-router-dom";
// import Card from "../../components/card/Card";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, setCredentials } from "../../redux/features/auth/authSlice";
// import { useLoginMutation } from "../../redux/features/auth/usersApiSlice";
// import { useForm } from "react-hook-form";
// import {checkUserAsync} from "./authSlices.js"
// const Login = () => {
//    const [email, setEmail] =useState("");
//    const [password , setPassword] = useState("");
  
//    const dispatch = useDispatch();
//    const {register, handleSubmit , watch, formState: {errors}} =  useForm();

   
//   return (
//     <div className="h-full text-white ">
//       <Card>
//         <div className="form-box">
//           <div className="button-box">
//             <div id="btn"></div>
//             <button type="button" className="toggle-btn">
//               Log In
//             </button>
//           </div>
//           <div className="social-icons">{/* Lottie animations */}</div>
//           <form    onSubmit={handleSubmit((data) =>{
//               dispatch(checkUserAsync({email : data.email, password: data.password}));
//             })}  noValidate className="input-group" id="Login">
//             <input
//               id="email"
//               {...register("email" , {
//                 required : 'email is required',
//                 pattern : {
//                   value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message : 'invalid email address'
//                 }
//               })}
//               className="input-field"
//               type="email"
//               placeholder="Enter Email"
//             />
//              {errors.email &&  <p className="text-red-50">{errors.email.message}</p>}
//             <input
//              id="password"
//              {...register("password" , {
//                pattern : {
//                  value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//                  message : 'password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number'
//                }
//              })}
//               className="input-field"
//               type="password"
//               placeholder="Enter Password"
//             />
//             {errors.passord &&  <p className="text-red-50">{errors.passord.message}</p>}
//             <a href="">Lost Your Password</a>
//             <button type="submit" className="submit-btn">
//               Log In
//             </button>
//             <span>
//               Don't have an account? <Link to="/register">Register</Link>
//             </span>
//           </form>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Login;
