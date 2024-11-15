import React, { useState } from "react";
import "../styles/projects.css";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Data for the projects
  const projects = [
    {
      id: 1,
      name: "Guident Computers",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png", // Replace with project image URL
      description: "A brief description of Project One, explaining its purpose and features.",
      github: "https://github.com",
    },
    {
      id: 2,
      name: "Project Two",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1714587388/citymart/logo_transparent_limzrg.png", // Replace with project image URL
      description: "A brief description of Project Two, explaining its purpose and features.",
      github: "https://github.com",
    },
    {
      id: 3,
      name: "Project Three",
      image: "https://via.placeholder.com/300", // Replace with project image URL
      description: "A brief description of Project Three, explaining its purpose and features.",
      github: "https://github.com",
    },
  ];

  // Function to open modal with selected project data
  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  // Function to close the modal with animation
  const closeModal = () => {
    setIsClosing(true); // Start closing animation
    setTimeout(() => {
      setIsModalOpen(false); // Set isModalOpen to false after animation completes
      setIsClosing(false);
      setCurrentProject(null);
    }, 500); // Match the duration of the closing animation
  };

  return (
    <section className="projects">
      <h1>Projects</h1>
      <p>A showcase of my work</p>

      <div className="project-cards">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Popup */}
      {isModalOpen && currentProject && (
        <div
          className={`modal ${isClosing ? "modal-closing" : ""}`} // Apply the closing animation
        >
          <div
            className={`modal-content ${isClosing ? "modal-content-closing" : ""}`} // Apply the closing animation
          >
            <button className="close-button" onClick={closeModal}>X</button>
            <div className="modal-inner">
              <div className="modal-image">
                <img src={currentProject.image} alt={currentProject.name} />
              </div>
              <div className="modal-details">
                <h2>{currentProject.name}</h2>
                <p>{currentProject.description}</p>
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
