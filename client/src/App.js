import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";

// import "../src/style/style.css";

import { NextUIProvider, User } from "@nextui-org/react";

import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/components/HomePage";
import ProductDetails from './components/product/ProductDetails'
import Product from "./product/Product";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";

import LoginScreen from "./pages/auth/LoginScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";
import Header from "./pages/auth/Header";
import ProfileScreen from "./pages/auth/ProfileScreen";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ToastContainer, Zoom, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getLoginStatus } from "./redux/features/auth/authSlice";
import { useEffect } from "react";
import Profile from "./components/profile/Profile";
import { selectLoggedInUser } from "./pages/auth/authSlices";
import Store from "./pages/store/Store";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {


  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
       <Navigation/>
      <ToastContainer transition={Zoom} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
