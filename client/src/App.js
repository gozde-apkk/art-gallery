import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import "../src/style/style.css";
 
import { NextUIProvider } from "@nextui-org/react";




import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/components/HomePage";
import { createContext, useState } from "react";
import Product from "./product/Product";

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
          className="relative h-[300vh] bg-black flex flex-col"
        >
          {/* <div className="">
          <label >{theme === 'light' ? 'Light Mode' : 'Dark Mode'}  </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        
         </div> */}
           
          <Navigation />
        
          <Routes>
            <Route path="/" element={<Home />} />


            <Route path="/product" element={<Product />} />
            {/* <Route path="/digital" element={<ShopCategory />} category = 'digital' />
            <Route path="/canvas" element={<ShopCategory />} category = 'canvas' /> */}

            
          </Routes>
            
      
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
