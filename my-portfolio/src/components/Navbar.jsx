// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0; // Initialize scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY; // Update last scroll position
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
