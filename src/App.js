import { Routes, Route } from "react-router-dom";
import "./App.css";
import './Components.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Domestic_logistics from "./pages/Domestic_logistics";
import Dv from "./components/Dv";
import Seemless from "./components/Seemless";
import Screen from "./components/Screen";

function App() {
  return (
    <body>
      <Navbar />
      <Dv />
      <div className="en">
        <div className="inn">
          <input
            className="form2"
            type="text"
            name=""
            id=""
            placeholder="Input tracking ID / Alpha code"
          />
          <button class="btn3 btn-secondary bb" type="submit">
            {" "}
            Search
          </button>
        </div>
        <div className="ab">
          <p> Track shipment / Find and ship a product using Alphacode</p>
        </div>
      </div>
<Seemless />
<Screen />
      <Routes>
        <Route path={"/Domestic_logistics"} element={<Domestic_logistics />} />
      </Routes>
    </body>
  );
}

export default App;
