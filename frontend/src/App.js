import React from "react";
import "./App.css";
import PrimaryNavbar from "./Components/PrimaryNavbar";
import PreNavbar from "./Components/PreNavbar";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
    <PreNavbar/>
    <PrimaryNavbar/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/" element={<NotFound/>}/>
        </Routes>
    <Footer/>
  </Router>
  );
}
export default App;
