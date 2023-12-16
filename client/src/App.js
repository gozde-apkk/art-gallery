import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "../src/style/style.css";
 
import { NextUIProvider } from "@nextui-org/react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/header/Header";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/route/PrivateRouter";
import ShopCategory from "./pages/ShopCategory";

import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/components/HomePage";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div
          id={theme}
          className=" bg-black h-full min-h-screen relative flex flex-col"
        >
          {/* <div className="">
          <label >{theme === 'light' ? 'Light Mode' : 'Dark Mode'}  </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        
         </div> */}
           
          <Navigation />
          {/* <HomePage/> */}
           <Home/>
          {/* <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/artwork" element={<ArtWork />} />
            <Route path="/nft" element={<ShopCategory />} category = 'nft' />
            <Route path=":productId" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/digital" element={<ShopCategory />} category = 'digital' />
            <Route path="/canvas" element={<ShopCategory />} category = 'canvas' />
            <Route path="/shop" element={<Shop />} />
            
          </Routes>
             */}
          {/* <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            </Route> */}
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
