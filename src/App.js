import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Returns from "./components/pages/Returns";
import FAQ from "./components/pages/FAQ";
import Shipping from "./components/pages/Shipping";
import Terms from "./components/pages/Terms";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/faq" element={<FAQ/>}  />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/terms" element={<Terms/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
