import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "../styles/home.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ThreeDModel from "./ThreeDModel";
import { trefoil } from "ldrs";  // Import trefoil from ldrs

trefoil.register();  // Register the trefoil loader

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading screen after 2 seconds
    }, 2000); // 2 seconds for demonstration

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <l-trefoil
          size="200"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="white"
        ></l-trefoil>
      </div>
    ); // Show trefoil loader while loading
  }

  return (
    <div className="home">
      <section id="threeDModel" className="threeDModel-section">
        <ThreeDModel />
      </section>

      <section id="home" className="home-content">
        <h1>Welcome to <br /> My Portfolio</h1>
        <p>Discover more about <br /> my work and skills.</p>
      </section>

      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
