// src/components/FollowMe.jsx
import React, { useEffect } from "react";
import "../styles/followme.css";

function FollowMe() {
  useEffect(() => {
    // Handle scroll event to move the text based on scroll position
    const handleScroll = () => {
      const tape = document.querySelector(".police-tape-text");
      const socialLinks = document.querySelectorAll(".social-link");

      if (tape) {
        // Adjust position of the tape text based on scroll
        const scrollY = window.scrollY; // Access scrollY via window
        tape.style.transform = `translateY(${scrollY * 0.25}px)`; // Adjust this multiplier for better effect
      }

      // Apply movement to social links based on scroll
      if (socialLinks) {
        socialLinks.forEach(link => {
          link.style.transform = `translateY(${window.scrollY * 0.15}px)`; // Use window.scrollY
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        </div>
      </div>

      {/* Second tape: Social Links (repeating social links infinitely) */}
      <div className="police-tape rotated">
        <div className="social-links">
          {/* Wrap each social link text in an <a> tag with href pointing to the respective social media */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}

export default FollowMe;
