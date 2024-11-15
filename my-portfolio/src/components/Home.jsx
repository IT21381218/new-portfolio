// src/components/Home.jsx
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../styles/home.css";
import About from "./About";
import Skills from "./Skills";
import Services from './Services';
import Projects from "./Projects";
import Contact from "./Contact";
import FollowMe from "./FollowMe";
import Countup from "./Countup"
import ThreeDModel from "./ThreeDModel";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Home = ({ isMuted, toggleMute }) => {

  useEffect(() => {
    const textElement = document.querySelector('.home-content');

    // Mouse-based rotation
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate rotation values based on mouse position
      const rotateX = ((y / height) - 0.5) * 20;
      const rotateY = ((x / width) - 0.5) * -20;

      if (textElement) {
        textElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    // Touch-based rotation
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const rotateX = ((y / height) - 0.5) * 20;
      const rotateY = ((x / width) - 0.5) * -20;

      if (textElement) {
        textElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="home-size">
        <section id="threeDModel" className="threeDModel-section">
          <ThreeDModel />
        </section>

        <section id="home" className="home-content">
          <h1>Welcome to <br /> My Portfolio</h1>
          <p>Discover more about <br /> my work and skills.</p>
        </section>
      </div>
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="countup" className="section">
        <Countup />
      </Element>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="services" className="section">
        <Services />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
      <Element name="followMe" className="section">
        <FollowMe />
      </Element>

      <button
        className={`mute-button ${isMuted ? 'active' : ''}`}
        onClick={toggleMute}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
      </button>
    </div>
  );
};

export default Home;