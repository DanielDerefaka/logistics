import { Routes, Route } from "react-router-dom";
import "./App.css";
import './Components.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Domestic_logistics from "./pages/Domestic_logistics";
import Service from "./pages/Service";
import Oversees from "./pages/Oversees";
import Ecommerce from "./pages/Ecommerce";
import Walled from "./pages/Walled";

function App() {
  return (
    <body className="bd">
      <Navbar className="nj" />
 


      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/domestic_logistics"} element={<Domestic_logistics />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/oversees"} element={<Oversees />} />
        <Route path={"/ecommerce"} element={<Ecommerce />} />
        <Route path={"/walled"} element={<Walled />} />
      </Routes>

      <Footer />
    </body> 
  );
}

export default App;
