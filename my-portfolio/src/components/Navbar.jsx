// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import "../styles/navbar.css"; // You'll need to create this CSS file for styles.

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500} offset={-100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
