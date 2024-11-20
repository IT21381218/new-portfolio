import React from "react";
import "../styles/followme.css";

const Marquee = () => {
  return (
    <div className="app-container">
      {/* Follow Me Marquee */}
      <div className="follow-me-marquee">
        <div className="follow-me-marquee-track">
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
          <p>FOLLOW ME</p>
        </div>
      </div>

      {/* Main Marquee */}
      <div className="marquee-text">
        <div className="marquee-text-track">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <p>INSTAGRAM</p>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <p>FACEBOOK</p>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <p>LINKEDIN</p>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <p>GITHUB</p>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <p>YOUTUBE</p>
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <p>SPOTIFY</p>
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <p>X</p>
          </a>
        </div>
      </div>

      {/* Email & Phone Marquee */}
      <div className="email-phone-marquee">
        <div className="email-phone-marquee-track">
          <p>Email: rajmalperera@email.com</p>
          <p>Phone: (+94)71-477-7848</p>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Marquee;
