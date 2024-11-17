import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import "../styles/FloatingRotatingButton.css"; // Import the updated CSS

const FloatingRotatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-button-container">
      {/* Floating button */}
      <button
        className={`floating-button ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        +
      </button>

      {/* Menu options */}
      {isOpen && (
        <div className="menu-options">
          {/* Menu item: Home */}
          <Link
            to="home"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <i className="fas fa-home"></i> {/* FontAwesome Home Icon */}
            <span>Home</span>
          </Link>

          {/* Menu item: About */}
          <Link
            to="about"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <i className="fas fa-user"></i> {/* FontAwesome User Icon */}
            <span>About</span>
          </Link>

          {/* Menu item: Skills */}
          <Link
            to="skills"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <i className="fas fa-tools"></i> {/* FontAwesome Tools Icon */}
            <span>Skills</span>
          </Link>

          {/* Menu item: Projects */}
          <Link
            to="projects"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <i className="fas fa-briefcase"></i> {/* FontAwesome Briefcase Icon */}
            <span>Projects</span>
          </Link>

          {/* Menu item: Services */}
          <Link
            to="services"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <i className="fas fa-cogs"></i> {/* FontAwesome Cogs Icon */}
            <span>Services</span>
          </Link>

          {/* Menu item: Contact */}
          <Link
            to="contact"
            className="menu-item"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            <i className="fas fa-envelope"></i> {/* FontAwesome Envelope Icon */}
            <span>Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingRotatingButton;
