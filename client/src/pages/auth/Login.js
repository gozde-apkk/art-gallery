import React, { useEffect, useState } from 'react';
import './authstyle.css'
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setCredentials } from '../../redux/features/auth/authSlice';
import { useLoginMutation } from '../../redux/features/auth/usersApiSlice';
const Login = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState('login');

  const handleFormToggle = (type) => {
    setFormType(type);
  };

  const [login] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  }, [navigate, userInfo])
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      console.log(error.data.message)
    }
  }

  return ( 
    <div className="h-full text-white ">
      <Card>
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
        <form onSubmit={submitHandler} className="input-group" id="Login" >
        <input
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              type="email"
              placeholder="Enter Email"
              required
             
            />
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
            
            />
          <a href="">Lost Your Password</a>
          <button type="submit"  className="submit-btn">
            Log In
          </button>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
      </Card>
    </div>
  );
};

export default Login;
