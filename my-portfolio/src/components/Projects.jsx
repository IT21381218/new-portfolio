import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "../styles/projects.css";

const TARGET_TEXT = "Go to My Works";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

function Projects() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [scrambledText, setScrambledText] = useState(TARGET_TEXT);
  const [countUpStarted, setCountUpStarted] = useState(false);
  const projectsRef = useRef(null);

  const handleScroll = () => {
    if (projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 1.5 && rect.bottom >= 0) {
        setCountUpStarted(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  const scrambleText = () => {
    const targetArray = TARGET_TEXT.split("");
    let scrambledArray = [...targetArray];
    let currentIndex = 0;

    const scrambleInterval = setInterval(() => {
      let newText = scrambledArray.map((char, index) => {
        if (index === currentIndex) {
          return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        }
        return char;
      });

      setScrambledText(newText.join(""));
      currentIndex += 1;

      if (currentIndex >= targetArray.length * CYCLES_PER_LETTER) {
        clearInterval(scrambleInterval);
        setScrambledText(TARGET_TEXT);
      }
    }, SHUFFLE_TIME);
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <div className="count-up">
          <h2>
            {countUpStarted && <CountUp start={0} end={4} duration={3} separator="," />}
          </h2>
          <p>Number of Projects</p>
        </div>

        {/* Divider Line */}
        <div className="divider">|</div>

        <div className="count-up">
          <h2>
            {countUpStarted && <CountUp start={0} end={8} duration={5} separator="," />}
          </h2>
          <p>Number of Songs</p>
        </div>
      </div>
      <br></br>

      {stars.map((_, index) => (
        <div
          key={index}
          className={`star star-${["small", "medium", "large"][Math.floor(Math.random() * 3)]}`}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

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

      <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }}>
        <Link to="/myworks">
          <motion.button
            className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-6 py-3 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onMouseEnter={scrambleText}
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