import React, { useState } from 'react';
import './authstyle.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [formType, setFormType] = useState('login');

  const handleFormToggle = (type) => {
    setFormType(type);
  };

  return ( 
    <div className="h-full text-white ">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            type="button"
            className="toggle-btn">
            Log In
          </button>
        </div>
        <div className="social-icons">
          {/* Lottie animations */}
        </div>
        <form className="input-group" id="Login" >
          <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" placeholder="Enter Email" required />
          <input  name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" placeholder="Enter Password" required />
          <a href="">Lost Your Password</a>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
