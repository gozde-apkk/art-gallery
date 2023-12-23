import React, { useState } from 'react';
import './authstyle.css'
import { validateEmail } from '../../utils';
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify';


const initialState = {
     username : '',
     email : '',
     password : '',
     cPassword : ""
}

const Register = () => {

  const [formData, setFormData] = useState(initialState);
  const {name, email, password, cPassword} = initialState;
  const [formType, setFormType] = useState('login');
  
  const [username, setUsername] = useState('');
  


  const dispatch = useDispatch();
  const handleFormToggle = (type) => {
    setFormType(type);
  };

  const handleInputChange = (e) => {  
    const {name , value} = e.target
    setFormData({...formData, [name] : value})
  }
  const registerUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }
    if(password.length < 6){
      return toast.error("Password must be 6 characters or more");
    }
    if(!validateEmail(email)){
      return toast.error("Please enter a valid email ");
    }
    if(password !== cPassword){
      return toast.error("Passwords do not match ");
    }

    const userData = {
     username,
      email,
      password
    }
     
    await dispatch(registerUser(userData));
  }

  return (
    <div className="h-full ">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"  ></div>
          <button
            type="button"
            className="toggle-btn"
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          {/* Lottie animations */}
        </div>
        <form onSubmit={registerUser} className="input-group text-white" id="Register" style={{ left: formType === 'register' ? '450px' : '50px' }}>
          <input name='username' value={username} onChange={(e) => setUsername(e.target.value)}  className="input-field" type="text" placeholder="Enter Username" required />
          <input  name='email' value={email} onChange={(e) => setEmail(e.target.value)}  className="input-field" type="email" placeholder="Enter Email" required />
          <input name='password' value={password}    className="input-field" type="password" placeholder="Enter Password" required />
          <a href="">
            By registering, you agree to the Terms, Data Policy and Cookies Policy
          </a>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
