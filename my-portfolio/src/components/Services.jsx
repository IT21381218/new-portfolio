import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/services.css";

// Define your services data
const servicesData = [
  {
    id: 1,
    title: "Fullstack Development",
    description: "Building scalable and robust full-stack applications.",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704487/my%20portfolio/796426334420222470_pmxogf.png",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces.",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704852/my%20portfolio/796427687334938743_o8d0od.png",
  },
  {
    id: 3,
    title: "Music Production",
    description: "Creating and producing custom music tracks for various needs.",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704990/my%20portfolio/796428228500825517_beqjnj.png",
  },
  {
    id: 4,
    title: "Power BI Data Analytics",
    description: "Turning complex data into interactive, insightful reports.",
    image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731705580/my%20portfolio/796430775416468303_gcf9qh.png",
  },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Add animationKey to force re-render

  // // Auto-slide feature
  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     handleSwipeLeft();
  //   }, 6000); // Adjust auto-slide interval
  //   return () => clearInterval(autoSlide);
  // }, []);

  const handleSwipeLeft = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const handleSwipeRight = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
    setCurrentIndex(index);
  };

  const swipeableProps = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true,
  });

  const currentService = servicesData[currentIndex];
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const prevService =
    servicesData[currentIndex === 0 ? servicesData.length - 1 : currentIndex - 1];

  return (
    <div className="services" {...swipeableProps}>
      <h1>My Services</h1>
      <p>⟵ Swipe ⟶</p>

      <div className="card-container">
        <div
          key={`current-${animationKey}`} // Dynamic key forces re-render
          className={`service-card current-card`}
        >
          <img src={currentService.image} alt={currentService.title} />
          <h2>{currentService.title}</h2>
          <p>{currentService.description}</p>
        </div>
        <div
          key={`next-${animationKey}`} // Dynamic key forces re-render
          className={`service-card next-card`}
        >
          <img src={nextService.image} alt={nextService.title} />
          <h2>{nextService.title}</h2>
          <p>{nextService.description}</p>
        </div>
        <div
          key={`prev-${animationKey}`} // Dynamic key forces re-render
          className={`service-card prev-card`}
        >
          <img src={prevService.image} alt={prevService.title} />
          <h2>{prevService.title}</h2>
          <p>{prevService.description}</p>
        </div>
      </div>

      <div className="card-dots">
        {servicesData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Services;