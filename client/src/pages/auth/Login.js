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
            className="toggle-btn"
            onClick={() => handleFormToggle('login')}          >
            Log In
          </button>
          {/* <button
            type="button"
            className="toggle-btn"
            onClick={() => handleFormToggle('register')}
            style={{ left: formType === 'login' ? '50px' : '-400px' }}
          >
            Register
          </button> */}
        </div>
        <div className="social-icons">
          {/* Lottie animations */}
        </div>
        <form className="input-group" id="Login" >
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" placeholder="Enter Email" required />
          <input  value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" placeholder="Enter Password" required />
          <a href="">Lost Your Password</a>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
        {/* <form className="input-group" id="Register" style={{ left: formType === 'register' ? '450px' : '50px' }}>
          <input value={username} className="input-field" type="text" placeholder="Enter Username" required />
          <input value={email} className="input-field" type="email" placeholder="Enter Email" required />
          <input value={password} className="input-field" type="password" placeholder="Enter Password" required />
          <a href="">
            By registering, you agree to the Terms, Data Policy and Cookies Policy
          </a>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Login;
