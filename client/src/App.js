import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "../src/style/style.css";
import AddProduct from "./pages/AddProduct";
import ArtWork from "./pages/ArtWork";
import { NextUIProvider } from "@nextui-org/react";
import SignOut from "./pages/SignOut";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/artwork" element={<ArtWork />} />
       
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </div>
  );
}

export default App;
