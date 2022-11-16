import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Domestic_logistics from "./pages/Domestic_logistics";





function App() {
  return (
    <body>
<Navbar/>

  <Footer />
  
  <Routes>
     

  <Route path={"/Domestic_logistics"} element={<Domestic_logistics />} />
      
      </Routes>
     
    </body>
  );
}

export default App;
