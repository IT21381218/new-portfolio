// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiHome, FiUser, FiAward, FiBriefcase, FiMail, FiChevronLeft } from "react-icons/fi"; // Use FiChevronLeft for the toggle
import { motion } from "framer-motion"; // Import framer-motion for animations
import "../styles/navbar.css";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true); // State to toggle navbar visibility

  // Handle the scroll event to apply styles when scrolling
  const toggleNavbar = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      {/* Toggle Button for Navbar */}
      <motion.button
        className="navbar-toggle"
        onClick={toggleNavbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FiChevronLeft className="toggle-icon" />
      </motion.button>

      {/* Animated Navbar Links */}
      <motion.nav
        className={`navbar ${isNavVisible ? "visible" : "hidden"}`}
        initial={{ x: "-100%" }} // Start off-screen
        animate={{ x: isNavVisible ? 0 : "-100%" }} // Slide in/out based on visibility
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>

        {/* Navbar Links */}
        <div className="navbar-links">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            <FiHome className="nav-icon" /> Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            <FiUser className="nav-icon" /> About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            <FiAward className="nav-icon" /> Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            <FiBriefcase className="nav-icon" /> Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            <FiMail className="nav-icon" /> Contact
          </Link>
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <div className={`main-content ${isNavVisible ? "" : "full-screen"}`}>
        {/* The Home component (or other content) can be placed here */}
        {/* You can add <Home /> or other content */}
      </div>
    </div>
  );
};

export default Navbar;
