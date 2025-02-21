import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyWorks from "./components/MyWorks";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false); // For music control
  const [isMuted, setIsMuted] = useState(true); // For mute functionality, starts muted
  const [audio] = useState(
    new Audio(
      "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731959999/my%20portfolio/palace_slowed_reverb_prod._adturnup_ezmp3.cc_qpllou.mp3"
    )
  ); // Load the audio file
  const [isPromptVisible, setIsPromptVisible] = useState(true); // Control prompt visibility
  const [isLoaded, setIsLoaded] = useState(false); // Track loading state

  useEffect(() => {
    // Handle audio play/stop based on isMusicEnabled and isMuted states
    if (isMusicEnabled && !isMuted) {
      audio.loop = true; // Set audio to loop
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause(); // Clean up on component unmount
    };
  }, [isMusicEnabled, isMuted, audio]);

  const handleMusicPreference = (response) => {
    if (response === "yes") {
      setIsMusicEnabled(true);
      setIsMuted(false); // Unmute initially if user chooses "yes"
    } else {
      setIsMusicEnabled(false);
      setIsMuted(true); // Start with mute if user chooses "no"
    }

    // Hide the music prompt after selection
    setIsPromptVisible(false);
  };

  const toggleMute = () => {
    if (!isMusicEnabled) {
      setIsMusicEnabled(true); // Enable music if it was disabled initially
    }
    setIsMuted((prevState) => !prevState); // Toggle mute/unmute
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          {/* Conditionally render the music prompt */}
          {isPromptVisible && (
            <div className="music-prompt fade-in">
              <p>Would you like to hear music on my website?</p>
              <button className="music-button" onClick={() => handleMusicPreference("yes")}>
                Yes
              </button>
              <button className="music-button" onClick={() => handleMusicPreference("no")}>
                No
              </button>
            </div>
          )}

          <Router>
            <Routes>
              <Route path="/" element={<Home isMuted={isMuted} toggleMute={toggleMute} />} />
              <Route path="/myworks" element={<MyWorks isMuted={isMuted} toggleMute={toggleMute} />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
