// src/components/Home.jsx
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../styles/home.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ThreeDModel from "./ThreeDModel";

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate rotation values based on mouse position
      const rotateX = ((y / height) - 0.5) * 20; // Rotate based on Y position
      const rotateY = ((x / width) - 0.5) * -20; // Rotate based on X position (inverted)

      // Apply rotation to the text container
      const textElement = document.querySelector('.home-content');
      textElement.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      {/* 3D Model Section */}
      <section id="threeDModel" className="threeDModel-section">
        <ThreeDModel />
      </section>

      {/* Main content sections */}
      <section id="home" className="home-content">
        <h1>
          Welcome to <br /> My Portfolio
        </h1>
        <p>Discover more about my work and skills.</p>
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
