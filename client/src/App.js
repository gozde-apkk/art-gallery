import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "../src/style/style.css";
import AddProduct from "./pages/AddProduct";
import ArtWork from "./pages/ArtWork";
import { NextUIProvider } from "@nextui-org/react";
import SignOut from "./pages/SignOut";

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
       
          </Routes>{" "}
        </BrowserRouter>{" "}
      </NextUIProvider>{" "}
    </div>
  );
}

export default App;
