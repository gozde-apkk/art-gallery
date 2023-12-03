

import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import '../src/style/style.css'


function App() {

  return (
    <div className="App" >
          <BrowserRouter >
             <Navbar/>
             <Routes>
              <Route path="/" element={<Home/>} /> 
            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
