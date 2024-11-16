import React, { useState } from "react";
import "../styles/myWorks.css";
import FButton from "./FloatingRotatingButton";

const works = [
  {
    name: "Guident Computers",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png",
    description: "Guident Computers is a business store that sells computer parts and other electronic gocxis to consumers in Sri Lanka Their business serves as an intermediary between a buyer and suppliers.",
    github: "https://github.com/rumeshsmrr/ITP_WD_B1_G14", // Replace with actual link
  },
  {
    name: "Revolt Airline",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690883334/photo-1559268950-2d7ceb2efa3a_upa7wp.png",
    description: "This airline reservation ticket moking system is a comprehensive and user-friendly web application that simplifies the præess of reserving and booking flight tickets for travelers. This project aims to streamline the airline ticket booking præess and enhance the overall travel experience for usffS.",
    github: "https://github.com/IT21381218/Airlines-Reservation-Ticket-Booking-System", // Replace with actual link
  },
  {
    name: "TravelLodge",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690900415/Untitled-5_qvgdlq.png",
    description: "Our application, TravelLodge allows læal homeowners to put their accornrnodations for rent-for tourists who doesn't want to invest a lot of money in hotels- This will allow more tourists to visit and stay as long as they wish for a reasonable price. This also tWps spread good word atnJt how eæy it is to Visit our country and stay.",
    github: "https://github.com/rumeshsmrr/RentalApplication/tree/main", // Replace with actual link
  },

    {
      name: "CityMart",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731766404/facebook_profile_image_wxa3sv.png",
      description: `🌐 Excited to share CityMart – a web application designed with accessibility and convenience at its heart! 🛒
      
    🎉 Built using the MERN stack, this project was a collaboration between myself and Eehanee Hettiarachchi to create a user-friendly shopping experience for all, especially for individuals with visual impairments. Through CityMart, users can navigate the supermarket, add items to their cart, and even give feedback – all using voice commands! 🎙️
    
    🔍 Our main focus was to make ordering food accessible and seamless, empowering half-blind or visually impaired users to independently and confidently complete their shopping online.
    
    🚀 Key Features:
    ⚫ Voice Navigation: Browse and navigate without lifting a finger.
    ⚫ Voice-Activated Cart Management: Add items directly to the cart using voice commands.
    ⚫ Feedback via Voice Commands: User-friendly feedback system.`,
      github: "https://github.com/IT21381218/CityMart", // Replace with actual link
    }
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
      <FButton/>
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