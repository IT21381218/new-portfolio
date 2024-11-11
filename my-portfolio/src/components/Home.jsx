// src/pages/Home.jsx
import React from "react";
import { Element } from "react-scroll";  // Importing Element for scrollable sections
import "../styles/home.css";  // Link to your CSS file
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover more about my work and skills.</p>
      </section>

      {/* Sections rendered as you scroll */}
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
