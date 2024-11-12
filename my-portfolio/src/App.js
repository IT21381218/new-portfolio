// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FollowMe from "./components/FollowMe";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { trefoil } from "ldrs";  // Import trefoil from ldrs package
import "./index.css";

trefoil.register();  // Register the trefoil component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <l-trefoil 
            size="100" 
            stroke="4" 
            stroke-length="0.15" 
            bg-opacity="0.1" 
            speed="1.4" 
            color="white" 
          ></l-trefoil>
        </div>
      ) : (
        <Router>      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/followme" element={<FollowMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
