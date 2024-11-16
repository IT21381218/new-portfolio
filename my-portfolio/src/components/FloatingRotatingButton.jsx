import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
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
          {/* Use Link for scroll navigation */}
          <Link
            to="home"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <span>Home</span>
          </Link>
          <Link
            to="about"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <span>About</span>
          </Link>
          <Link
            to="skills"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <span>Skills</span>
          </Link>
          <Link
            to="projects"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <span>Projects</span>
          </Link>
          <Link
            to="services"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <span>Services</span>
          </Link>
          <Link
            to="contact"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <span>Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingRotatingButton;
