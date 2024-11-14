// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={100} offset={-100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
