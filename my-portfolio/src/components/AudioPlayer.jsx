// src/components/AudioPlayer.jsx
import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ isPlaying, onToggle }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={onToggle} className="mute-button">
        {isPlaying ? "Mute" : "Unmute"}
      </button>
      <audio ref={audioRef} loop>
        {/* Use relative path to the song in the public folder */}
        
      <source src="/assets/songs/partynextdoor - the news (sped up)_256k.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;











