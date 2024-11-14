import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { trefoil } from "ldrs";
import "./index.css";

trefoil.register();  // Register the trefoil component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicEnabled, setIsMusicEnabled] = useState(false); // For music control
  const [isMuted, setIsMuted] = useState(true); // For mute functionality, starts muted
  const [audio] = useState(new Audio("/assets/songs/partynextdoor - the news (sped up)_256k.mp3")); // Load the audio file
  const [isPromptVisible, setIsPromptVisible] = useState(true); // Control prompt visibility

  useEffect(() => {
    // Simulate loading screen delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

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
      {isLoading ? (
        <div className="loading-screen">
          <l-trefoil 
            size="100" 
            stroke="4" 
            stroke-length="0.15" 
            bg-opacity="0.1" 
            speed="1.4" 
            color="white" 
          ></l-trefoil>
        </div>
      ) : (
        <>
          {/* Conditionally render the music prompt */}
          {isPromptVisible && (
  <div className="music-prompt fade-in">
    <p>Would you like to hear music on our website?</p>
    <button className="music-button" onClick={() => handleMusicPreference("yes")}>Yes</button>
    <button className="music-button" onClick={() => handleMusicPreference("no")}>No</button>
  </div>
)}

          <Router>      
            <Routes>
              <Route path="/" element={<Home isMuted={isMuted} toggleMute={toggleMute} />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;