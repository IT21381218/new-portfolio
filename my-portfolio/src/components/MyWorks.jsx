import React, { useState, useRef, useEffect } from "react";
import "../styles/myWorks.css";
import MyWOrkFButton from "./MyWorkFloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const works = [
  {
    name: "Guident Computers",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png",
    description: "Guident Computers is a business store that sells computer parts and other electronic goods to consumers in Sri Lanka. Their business serves as an intermediary between a buyer and suppliers.",
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
    description: "Our application, TravelLodge, allows local homeowners to put their accommodations for rent-for tourists who don't want to invest a lot of money in hotels. This allows more tourists to visit and stay as long as they wish for a reasonable price.",
    github: "https://github.com/rumeshsmrr/RentalApplication/tree/main",
  },
  {
    name: "CityMart",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731766404/my%20portfolio/facebook_profile_image_wxa3sv.png",
    description: "CityMart is a web application that provides voice navigation for visually impaired users, allowing them to shop online with ease. Key features include voice commands for adding items to the cart and submitting feedback.",
    github: "https://github.com/IT21381218/CityMart",
  },
];

const songs = [
  {
    name: "Ekzetef - Aura",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731864365/my%20portfolio/Untitled-1_dvw0ui.jpg",
    description: "Release date: Dec 27, 2021",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731864297/my%20portfolio/aura_qo2sso.mp3",
  },
  {
    name: "Ekzetef - Murder Bass",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868800/my%20portfolio/EpY8tHeXYAEYkxV_fapvqf.jpg",
    description: "Release date: Dec 17, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870786/my%20portfolio/Ekzetef_-_Murder_Bass_Official_Audio_v14d99.m4a",
  },
  {
    name: "Ekzetef - Visuals",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868802/my%20portfolio/EeCLJsqXkAAjtv1_v5rddo.jpg",
    description: "Release date: Aug 1, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870476/my%20portfolio/Ekzetef_-_Visuals_Official_Video_ai8fx6.m4a",
  },
  {
    name: "Selena Gomez - Lose You To Love Me (Ekzetef Remix)",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868800/my%20portfolio/artworks-0QyiVcZsOnVMeHr2-cjRUYA-t500x500_b529ft.jpg",
    description: "Release date: May 18, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870479/my%20portfolio/Selena_Gomez_-_Lose_You_To_Love_Me_Ekzetef_Remix_mrnxaw.m4a",
  },
  {
    name: "Ekzetef - Universe",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868803/my%20portfolio/dc4f914e97274e418682d78b1b671100_464_464_kykvv3.jpg",
    description: "Release date: Apr 6, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870479/my%20portfolio/Ekzetef_-_Universe_hjincm.m4a",
  },
  {
    name: "Ekzetef - Nefertiti",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868798/my%20portfolio/artworks-3x1xlnpw6w8zJyPx-hhcdRA-t240x240_qmetei.jpg",
    description: "Release date: Mar 7, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870476/my%20portfolio/Ekzetef_-_Nefertiti_jowfbn.m4a",
  },
  {
    name: "Ekzetef - Black Hole",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731868799/my%20portfolio/ab67616d00001e02af14388eeef310bd44ab2553_fjiyvn.jpg",
    description: "Release date: Feb 3, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870474/my%20portfolio/Ekzetef_-_Black_Hole_wwuy1t.m4a",
  },
  {
    name: "Modjo - Lady (Hear Me Tonight)[Ekzetef Remix]",
    cover: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731870188/my%20portfolio/Modjoalbumcover_gexvih.jpg",
    description: "Release date: Jan 7, 2020",
    audio: "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731867524/my%20portfolio/Lady_master_zvmkog.mp3",
  },
];

const MyWorks = ({ isMuted, toggleMute }) => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [animationState, setAnimationState] = useState("");
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null); // Track the current audio index
  const audioRefs = useRef([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  const handleAudioPlay = (index) => {
    const newAudio = audioRefs.current[index];
    if (newAudio) {
      // Pause any currently playing audio
      audioRefs.current.forEach((audio, i) => {
        if (i !== index && audio) {
          audio.pause();
        }
      });
      setCurrentAudioIndex(index); // Update the currently playing song index
      newAudio.play();
    }
  };

  return (
    <section className="myWork">
      <button className={`mute-button ${isMuted ? "active" : ""}`} onClick={toggleMute}>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
      </button>
      <MyWOrkFButton />
      <h1>PROJECTS</h1>
      <div className="work-container">
        {works.map((work, index) => (
          <div key={index} className="work-card" onClick={() => openPopup(work)}>
            <img src={work.image} alt={work.name} className="work-image" />
            <div className="work-details">
              <h2 className="work-title">{work.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <h1>MY SONGS</h1>
      <div className="music-corner">
        <h2>Welcome to my music corner!</h2>
        <p>I've been producing music under the name "Ekzetef" since 2020.</p>
      </div>

      <div className="song-container">
        {songs.map((song, index) => (
          <div
            key={index}
            className={`song-card ${currentAudioIndex === index ? "playing" : ""}`} // Apply glowing effect to the currently playing song
          >
            <img src={song.cover} alt={song.name} className="song-cover" />
            <div className="song-details">
              <h2 className="song-title">{song.name}</h2>
              <p className="song-description">{song.description}</p>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                controls
                className="audio-player"
                onPlay={() => handleAudioPlay(index)}
              >
                <source src={song.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-content ${animationState}`} onClick={(e) => e.stopPropagation()}>
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
