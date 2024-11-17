import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaCogs, FaEnvelope } from "react-icons/fa"; // Import icons
import "../styles/FloatingRotatingButton.css";

const FloatingRotatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-button-container">
      <button
        className={`floating-button ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        +
      </button>
      {isOpen && (
        <div className="menu-options">
          {/* Use Link for scroll navigation with icons */}
          <Link
            to="home"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <FaHome /> {/* Home Icon */}
          </Link>
          <Link
            to="about"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <FaUser /> {/* About Icon */}
          </Link>
          <Link
            to="skills"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <FaCode /> {/* Skills Icon */}
          </Link>
          <Link
            to="projects"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <FaProjectDiagram /> {/* Projects Icon */}
          </Link>
          <Link
            to="services"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <FaCogs /> {/* Services Icon */}
          </Link>
          <Link
            to="contact"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <FaEnvelope /> {/* Contact Icon */}
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingRotatingButton;
