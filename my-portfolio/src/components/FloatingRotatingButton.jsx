import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="menu-item">Home</Link>
          <button className="menu-item">Option 2</button>
          <button className="menu-item">Option 3</button>
        </div>
      )}
    </div>
  );
};

export default FloatingRotatingButton;
