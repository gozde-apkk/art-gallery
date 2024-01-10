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
import ProductDetails from "./components/product/ProductDetails";
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

import { useEffect } from "react";
import Profile from "./components/profile/Profile";
import Store from "./pages/store/Store";
import {
  fetchAllProductAsync,
  selectAllProducts,
} from "./redux/features/products/productsSlice";
import ProductComponent from "./components/product/ProductComponent";
import ProductDetailPage from "./components/product/ProductDetailPage";
import QualityPromise from "./components/quality/QualityPromise";
import {CartProvider} from "./context/cart/CartContext";

import CardPage from "./components/card/CardPage";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
;

function App() {


  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductAsync());
    console.log("APP", products);
  }, [dispatch]);

  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />
        <ToastContainer transition={Zoom} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<CardPage />} />
          

          <Route
            path="/store"
            element={<ProductComponent products={products} />}
          />
          <Route path="/product-details/:id" element={<ProductDetailPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/quality" element={<QualityPromise />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
