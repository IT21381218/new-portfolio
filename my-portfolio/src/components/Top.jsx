import React, { useEffect } from "react";
import "../styles/top.css";
import ThreeDModel from "../components/ThreeDModel";

const Top = () => {
  useEffect(() => {
    const textElement = document.querySelector(".tops p");

    // Mouse-based rotation and movement
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate rotation values
      const rotateX = ((y / height) - 0.5) * 10; // Vertical rotation intensity
      const rotateY = ((x / width) - 0.5) * 10; // Horizontal rotation intensity

      // Calculate movement values
      const moveX = ((x / width) - 0.5) * -20; // Horizontal movement
      const moveY = ((y / height) - 0.5) * -20; // Vertical movement

      if (textElement) {
        textElement.style.transform = `
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translate(${moveX}px, ${moveY}px)
        `;
      }
    };

    // DeviceOrientation-based rotation and movement (for mobile)
    const handleOrientation = (event) => {
      const { gamma, beta } = event; // Gamma (left-right tilt) and Beta (up-down tilt)

      // Apply rotation based on gamma and beta
      const rotateX = beta / -2; // Up/Down rotation  defual value =2
      const rotateY = gamma / 2; // Left/Right rotation   defual value =2

      // Apply movement based on gamma and beta
      const moveX = (gamma / 90) * 20; // Horizontal movement based on tilt <-- --> defual value =20
      const moveY = (beta / 90) * -200;  // Vertical movement based on tilt    /\ \/ defual value =20

      if (textElement) {
        textElement.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translate(${moveX}px, ${moveY}px)
        `;
      }
    };

    // Event listeners for mouse and device orientation
    window.addEventListener("mousemove", handleMouseMove);

    // Check if DeviceOrientation is supported
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  return (
    <div className="top">
      <section id="threeDModel" className="threeDModel-section">
        <ThreeDModel />
      </section>
      <h1>EKZETEF</h1>
      <div className="tops">
        <p>Discover more about <br /> my work and skills.</p>
      </div>
    </div>
  );
};

export default Top;
