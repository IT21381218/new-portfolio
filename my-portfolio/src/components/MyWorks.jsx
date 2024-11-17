import React, { useState } from "react";
import "../styles/myWorks.css";
import MyWOrkFButton from "./MyWorkFloatingButton";

const works = [
  {
    name: "Guident Computers",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png",
    description: "Guident Computers is a business store that sells computer parts and other electronic goods to consumers in Sri Lanka Their business serves as an intermediary between a buyer and suppliers.",
    github: "https://github.com/rumeshsmrr/ITP_WD_B1_G14", 
  },
  {
    name: "Revolt Airline",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690883334/photo-1559268950-2d7ceb2efa3a_upa7wp.png",
    description: "This airline reservation ticket booking system is a comprehensive and user-friendly web application that simplifies the process of reserving and booking flight tickets for travelers. This project aims to streamline the airline ticket booking process and enhance the overall travel experience for users.",
    github: "https://github.com/IT21381218/Airlines-Reservation-Ticket-Booking-System", 
  },
  {
    name: "TravelLodge",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690900415/Untitled-5_qvgdlq.png",
    description: "Our application, TravelLodge allows local homeowners to put their accommodations for rent-for tourists who don't want to invest a lot of money in hotels. This allows more tourists to visit and stay as long as they wish for a reasonable price.",
    github: "https://github.com/rumeshsmrr/RentalApplication/tree/main", 
  },
  {
    name: "CityMart",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731766404/facebook_profile_image_wxa3sv.png",
    description: "CityMart is a web application that provides voice navigation for visually impaired users, allowing them to shop online with ease. Key features include voice commands for adding items to the cart and submitting feedback.",
    github: "https://github.com/IT21381218/CityMart", 
  },
];

const songs = [
  {
    name: "Aura",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731864365/Untitled-1_dvw0ui.jpg",
    description: "A chill lo-fi track to relax and study.",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731864297/aura_qo2sso.mp3",
  },
  {
    name: "Song 2",
    cover: "https://example.com/cover2.jpg",
    description: "An upbeat electronic dance track.",
    audio: "https://example.com/audio2.mp3",
  },
];

const MyWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [animationState, setAnimationState] = useState("");

  const openPopup = (work) => {
    setSelectedWork(work);
    setAnimationState("open");
  };

  const closePopup = () => {
    setAnimationState("close");
    setTimeout(() => {
      setSelectedWork(null);
    }, 300);
  };

  return (
    <section className="myWork">
      <MyWOrkFButton />
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

      <h1>MY SONGS</h1>
      <div className="song-container">
        {songs.map((song, index) => (
          <div key={index} className="song-card">
            <img src={song.cover} alt={song.name} className="song-cover" />
            <div className="song-details">
              <h2 className="song-title">{song.name}</h2>
              <p className="song-description">{song.description}</p>
              <audio controls className="audio-player">
                <source src={song.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className={`popup-content ${animationState}`}
            onClick={(e) => e.stopPropagation()}
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
