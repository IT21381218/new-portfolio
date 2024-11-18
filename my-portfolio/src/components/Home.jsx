// src/components/Home.jsx
import React from "react";
import { Element } from "react-scroll";
import "../styles/home.css";
import Top from "./Top";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import FollowMe from "./FollowMe";
import FButton from "./FloatingRotatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Home = ({ isMuted, toggleMute }) => {
  return (
    <div className="home">
      <FButton />
      <Element name="top" className="section">
        <Top />
      </Element>
      <Element name="about" className="section">
        <About />
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