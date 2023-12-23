import React, { useState } from 'react';
import './authstyle.css'


const initialState = {
     username : '',
     email : '',
     password : '',
     cPassword : ""
}

const Register = () => {

  const [formData, setFormDate] = useState(initialState);
  const {username, email, password, cPassword} = initialState;
  const [formType, setFormType] = useState('login');

  const handleFormToggle = (type) => {
    setFormType(type);
  };

  const handleInputChange = (e) => {  
    const {name , value} = e.target
    setFormDate({...formData, [name] : value})
  }
  const registerUser = () => {}

  return (
    <div className="h-full ">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"  ></div>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => handleFormToggle('register')}
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          {/* Lottie animations */}
        </div>
        {/* <form className="input-group" id="Login" style={{ left: formType === 'login' ? '-400px' : '50px' }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" placeholder="Enter Email" required />
          <input  value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" placeholder="Enter Password" required />
          <a href="">Lost Your Password</a>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form> */}
        <form onSubmit={registerUser} className="input-group" id="Register" style={{ left: formType === 'register' ? '450px' : '50px' }}>
          <input value={username} onChange={handleInputChange} className="input-field" type="text" placeholder="Enter Username" required />
          <input value={email} onChange={handleInputChange} className="input-field" type="email" placeholder="Enter Email" required />
          <input value={password}   onChange={handleInputChange} className="input-field" type="password" placeholder="Enter Password" required />
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
