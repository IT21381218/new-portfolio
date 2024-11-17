import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing
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
            to="/" // Use React Router's Link component to route to the root '/'
            className="menu-item"
          >
            <i className="fas fa-home"></i> {/* FontAwesome Home Icon */}
            <span>Home</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingRotatingButton;
