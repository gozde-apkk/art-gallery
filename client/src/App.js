import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";

// import "../src/style/style.css";

import { NextUIProvider } from "@nextui-org/react";

import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/components/HomePage";
import Product from "./product/Product";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";

import LoginScreen from "./pages/auth/LoginScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";
import Header from "./pages/auth/Header";
import ProfileScreen from "./pages/auth/ProfileScreen";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { Provider } from "react-redux";
import { ToastContainer, Zoom, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>

  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element: <Register/>
  }
])

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectLoggedInUser);
  // const userChecked = useSelector(selectUserChecked);

  // useEffect(() => {
  //   dispatch(checkAuthAsync());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchItemsByUserIdAsync());
  //     // we can get req.user by token on backend so no need to give in front-end
  //     dispatch(fetchLoggedInUserAsync());
  //   }
  // }, [dispatch, user]);
  const notify = () => toast("Wow so easy !");
  axios.defaults.withCredentials = true
  return (
    <>
 
  
      <div className="bg-black">
        
        <ToastContainer transition={Zoom} />
            <RouterProvider router={router} />
        {/* Link must be inside the Provider */}
      </div>
 
    </>
  );
}

export default App;
