import React, { useState } from "react";
import "../styles/myWorks.css";

const works = [
  {
    name: "E-Commerce Website",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png",
    description: "A fully functional e-commerce platform with cart and payment integration.",
    github: "https://github.com/username/ecommerce-project", // Replace with actual link
  },
  {
    name: "Portfolio Website",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690883334/photo-1559268950-2d7ceb2efa3a_upa7wp.png",
    description: "A personal portfolio showcasing skills, projects, and contact information.",
    github: "https://github.com/username/portfolio-project", // Replace with actual link
  },
  {
    name: "Social Media App",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690900415/Untitled-5_qvgdlq.png",
    description: "A social media platform with user authentication and real-time chat.",
    github: "https://github.com/username/socialmedia-project", // Replace with actual link
  },
];

const MyWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [animationState, setAnimationState] = useState(""); // Tracks animation state

  const openPopup = (work) => {
    setSelectedWork(work);
    setAnimationState("open");
  };

  const closePopup = () => {
    setAnimationState("close");
    setTimeout(() => {
      setSelectedWork(null);
    }, 300); // Match duration with the CSS animation
  };

  return (
    <section className="myWork">
      <h1>PROJECTS</h1>

      <div className="work-container">
        {works.map((work, index) => (
          <div
            key={index}
            className="work-card"
            onClick={() => openPopup(work)}
          >
            <img src={work.image} alt={work.name} className="work-image" />
            <div className="work-details">
              <h2 className="work-title">{work.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className={`popup-content ${animationState}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <img src={selectedWork.image} alt={selectedWork.name} className="popup-image" />
            <div className="popup-details">
              <h2 className="popup-title">{selectedWork.name}</h2>
              <p className="popup-description">{selectedWork.description}</p>
              <a
                href={selectedWork.github}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-github-button"
              >
                View on GitHub
              </a>
            </div>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyWorks;
