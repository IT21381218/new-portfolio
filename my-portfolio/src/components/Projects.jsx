import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import "../styles/projects.css";

const TARGET_TEXT = "Go to My Works";  // The target text for the button
const CYCLES_PER_LETTER = 2;  // Number of times each letter will scramble
const SHUFFLE_TIME = 50;  // Time interval between each character shuffle
const CHARS = "!@#$%^&*():{};|,.<>/?"; // Characters for the scrambling effect

function Projects() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [scrambledText, setScrambledText] = useState(TARGET_TEXT);
  const [countUpStarted, setCountUpStarted] = useState(false);  // State to track when CountUp should start
  const projectsRef = useRef(null);  // Ref for the projects section

  // Function to handle when the component is in the viewport
  const handleScroll = () => {
    if (projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 1.5 && rect.bottom >= 0) {
        setCountUpStarted(true);  // Start CountUp when the component is in view
        window.removeEventListener("scroll", handleScroll);  // Remove listener once in view
      }
    }
  };

  // Scramble text function
  const scrambleText = () => {
    const targetArray = TARGET_TEXT.split('');
    let scrambledArray = [...targetArray];
    let currentIndex = 0;

    // Start scrambling each character
    const scrambleInterval = setInterval(() => {
      let newText = scrambledArray.map((char, index) => {
        if (index === currentIndex) {
          // Replace the current character with a random character from CHARS
          return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        }
        return char;
      });

      setScrambledText(newText.join(''));

      currentIndex += 1;

      if (currentIndex >= targetArray.length * CYCLES_PER_LETTER) {
        clearInterval(scrambleInterval); // Stop scrambling after all characters are cycled
        setScrambledText(TARGET_TEXT); // Reset to the original target text
      }
    }, SHUFFLE_TIME);
  };

  // Set up stars and shooting stars
  useEffect(() => {
    const randomStars = [];
    const numberOfStars = 50;
    for (let i = 0; i < numberOfStars; i++) {
      randomStars.push(i);
    }
    setStars(randomStars);

    const shootingStarsArr = [];
    const numberOfShootingStars = 10;
    for (let i = 0; i < numberOfShootingStars; i++) {
      shootingStarsArr.push(i);
    }
    setShootingStars(shootingStarsArr);

    // Add event listener to trigger scroll event
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      <h1>PROJECTS</h1>
      <p>Number of projects</p>

      <div className="projects-container">
        <h2>
          {countUpStarted && (
            <CountUp start={0} end={4} duration={3} separator="," />
          )}
        </h2>
      </div>

      {/* Static stars */}
      {stars.map((_, index) => (
        <div
          key={index}
          className={`star star-${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((_, index) => {
        const duration = `${Math.random() * 3 + 2}s`;
        const delay = `${Math.random() * 2}s`;
        const rotation = `${Math.random() * 360}deg`;
        const left = `${Math.random() * 100}vw`;
        const top = `${Math.random() * 100}vh`;

        return (
          <div
            key={index}
            className="shooting-star"
            style={{
              left,
              top,
              animationDuration: duration,
              animationDelay: delay,
              transform: `rotate(${rotation})`,
            }}
          />
        );
      })}

      {/* Button to link to MyWorks */}
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
      >
        <Link to="/myworks">
          <motion.button
            className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-6 py-3 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onMouseEnter={scrambleText} // Trigger text scrambling on hover
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>{scrambledText}</span>
            </div>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1,
                ease: "linear",
              }}
              className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Projects;
