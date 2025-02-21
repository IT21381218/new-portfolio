// Import the spinner from 'ldrs'
import React, { useState, useEffect } from "react";
import { trefoil } from "ldrs";
import "../styles/LoadingScreen.css";

// Register the cardio component
trefoil.register();

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = [
        "/assets/models/base.obj", 
        "assets/songs/bgsong.mp3",
        "assets/textures/texture_diffuse.png",
        "assets/textures/texture_metallic.png",
        "assets/textures/texture_normal.png",
        "assets/textures/texture_pbr.png",
        "assets/textures/texture_roughness.png",
        "image1.png",
        "image2.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704089/my%20portfolio/Untitled-4_cchifz.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704487/my%20portfolio/796426334420222470_pmxogf.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704852/my%20portfolio/796427687334938743_o8d0od.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704990/my%20portfolio/796428228500825517_beqjnj.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731705580/my%20portfolio/796430775416468303_gcf9qh.png",
        //projects
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735845173/facebook_profile_image_oeq8bh.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734466121/zade/808277497809506964_kikpql.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690883334/photo-1559268950-2d7ceb2efa3a_upa7wp.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690900415/Untitled-5_qvgdlq.png",
        "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731766404/my%20portfolio/facebook_profile_image_wxa3sv.png",
        //songs
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731864297/my%20portfolio/aura_qo2sso.mp3",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870786/my%20portfolio/Ekzetef_-_Murder_Bass_Official_Audio_v14d99.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870476/my%20portfolio/Ekzetef_-_Visuals_Official_Video_ai8fx6.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870479/my%20portfolio/Selena_Gomez_-_Lose_You_To_Love_Me_Ekzetef_Remix_mrnxaw.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870479/my%20portfolio/Ekzetef_-_Universe_hjincm.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870476/my%20portfolio/Ekzetef_-_Nefertiti_jowfbn.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731870474/my%20portfolio/Ekzetef_-_Black_Hole_wwuy1t.m4a",
        "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1731867524/my%20portfolio/Lady_master_zvmkog.mp3",
      ];

    const preloadAssets = async () => {
      for (let i = 0; i < assets.length; i++) {
        await new Promise((resolve) => {
          const isVideo = assets[i].endsWith(".mp4") || assets[i].endsWith(".mov");
          const element = isVideo ? document.createElement("video") : new Image();
          element.onload = element.oncanplaythrough = resolve;
          element.onerror = resolve; // Handle errors gracefully
          element.src = assets[i];
        });
        setProgress(Math.round(((i + 1) / assets.length) * 100));
      }
      onLoaded();
    };

    preloadAssets();
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <l-trefoil size="200" stroke="4" speed="2" color="#f2f7f4"></l-trefoil>
        <h1>Loading... {progress}%</h1>
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

