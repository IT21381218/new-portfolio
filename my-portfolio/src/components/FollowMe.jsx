import React from "react";
import "../styles/followme.css";

function FollowMe() {
  return (
    <section className="followme">
      {/* First tape: "FOLLOW ME" text */}
      <div className="police-tape">
        <div className="police-tape-text">
          {/* Repeat the Follow Me text infinitely */}
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
          <span>FOLLOW ME</span>
        </div>
      </div>

      {/* Second tape: Social Links (moving from right to left) */}
      <div className="police-tape rotated">
        <div className="social-links">
          {/* Wrap each social link text in an <a> tag with href pointing to the respective social media */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            FACEBOOK
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            YOUTUBE
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            SPOTIFY
          </a>
          
        </div>
      </div>

      {/* Third tape: "COMING SOON" text (moving from left to right) */}
      <div className="coming-soon">
        <div className="coming-soon-text">
          {/* Repeat the "COMING SOON" text infinitely */}
          <span>EMAIL: rajmalperera@gmail.com</span>
          <span>PHONE: (+94)71 477 7848</span>
        </div>
      </div>
    </section>
  );
}

export default FollowMe;
