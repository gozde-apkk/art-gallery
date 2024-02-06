import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import "../src/style/style.css";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Navigation from "./components/Navigation";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";

import PrivateRoute from "./pages/auth/PrivateRoute";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ToastContainer, Zoom, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useEffect, useMemo } from "react";

import Store from "./pages/store/Store";
import {
  fetchAllProductAsync,
  selectAllProducts,
} from "./redux/features/products/productsSlice";
import ProductComponent from "./components/ProductComponent";
import ProductDetailPage from "./components/ProductDetailPage";
import QualityPromise from "./components/QualityPromise";
import { CartProvider } from "./context/cart/CartContext";

import CardPage from "./components/CardPage";
import PageNotFound from "./pages/notfound/PageNotFound";
import { themeSettings } from "./theme";
import AuthProvider from "./context/auth/AuthContext";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), []));
  const products = useSelector(selectAllProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductAsync());
    console.log("APP", products);
  }, [dispatch]);

  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AuthProvider>
            <CartProvider >
              <Navigation />
              <ToastContainer transition={Zoom} />{" "}
              <Routes>
                <Route path="/" element={<Home />} />{" "}
                <Route path="/login" element={<Login />} />{" "}
                <Route path="/register" element={<Register />} />{" "}
                <Route path="/store" element={<Store />} />{" "}
                <Route path="/cart" element={<CardPage />} />{" "}
                <Route path="/*" element={<PageNotFound />} />{" "}
                <Route path="/success" element={<Success />} />{" "}
                <Route path="/cancel" element={<Cancel />} />{" "}
                <Route
                  path="/store"
                  element={<ProductComponent products={products} />}
                />
                <Route
                  path="/product-details/:id"
                  element={<ProductDetailPage />}
                />{" "}
                <Route path="" element={<PrivateRoute />}>
                  <Route path="/quality" element={<QualityPromise />} />{" "}
                </Route>{" "}
              </Routes>{" "}
            </CartProvider>{" "}
          </AuthProvider>{" "}
        </CssBaseline>{" "}
      </ThemeProvider>{" "}
    </BrowserRouter>
  );
}

export default App;
