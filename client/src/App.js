import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

// import "../src/style/style.css";

import { NextUIProvider } from "@nextui-org/react";

import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/components/HomePage";
import Product from "./product/Product";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className="relative h-[100%] bg-black flex flex-col">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Product />} />
            {/* <Route path="/digital" element={<ShopCategory />} category = 'digital' />
                  <Route path="/canvas" element={<ShopCategory />} category = 'canvas' /> */}{" "}
          </Routes>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </NextUIProvider>
  );
}

export default App;
