import React, { useRef, useState } from "react";
import "../styles/about.css";
import Typewriter from 'typewriter-effect'; // Import Typewriter
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-details">
          <h1>Hi, I'm Poornaka</h1>
          <h3>
            And I'm a {""}
            <span>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Music Producer', 'YouTuber'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          <p>
            I am a self-driven undergraduate student studying Information
            Technology with a passion for discovering and experimenting with the
            latest technology. I have a strong interest in both frontend and
            backend development. I am a responsible team player who can easily
            adjust to any difficult circumstances. I have the ability to operate
            well both independently and in a collaborative setting. I can stay on
            task and meet deadlines even when under pressure.
          </p>

          {/* Download CV Button with new style */}
          <DownloadCVButton />
        </div>
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/c_thumb,w_200,g_face/v1679495588/cld-sample.jpg"
            alt="Poornaka"
          />
        </div>
      </div>
    </section>
  );
};

const TARGET_TEXT = "Download CV";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const DownloadCVButton = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.a
      href="/assets/docs/Poornaka Perera CV.pdf"
      download="Poornaka_CV.pdf"
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-6 py-3 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.a>
  );
};

export default About;

