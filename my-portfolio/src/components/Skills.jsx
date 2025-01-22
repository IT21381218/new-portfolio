import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
  FaWordpress ,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiPowerbi, SiJupyter, SiPostman,SiExpress  } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import "../styles/skills.css"; // Ensure your CSS file is linked properly

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { id: 1, name: "React", icon: <FaReact size={50} /> },
    { id: 2, name: "WordPress", icon: <FaWordpress size={50} /> },
    { id: 3, name: "CSS", icon: <FaCss3Alt size={50} /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 6, name: "Git", icon: <FaGitAlt size={50} /> },
    { id: 7, name: "MongoDB", icon: <DiMongodb size={50} /> },
    { id: 8, name: "Power BI", icon: <SiPowerbi size={50} /> },
    { id: 9, name: "OracleSQL", icon: <GrOracle size={50} /> },
    { id: 10, name: "GitHub", icon: <FaGithub size={50} /> },
    { id: 11, name: "Figma", icon: <FaFigma size={50} /> },
    { id: 12, name: "Python", icon: <FaPython size={50} /> },
    { id: 13, name: "Jupyter", icon: <SiJupyter size={50} /> },
    { id: 14, name: "Postman", icon: <SiPostman size={50} /> },
    { id: 15, name: "Firebase", icon: <IoLogoFirebase size={50} /> },
    { id: 16, name: "Express ", icon: <SiExpress  size={50} /> },
  ];

  return (
    <div className="skills-wrapper">
<section className="skills">
  <h1>SKILLS</h1>
  <div className="skills-container">
    {skills.map((skill) => (
      <div
        key={skill.id}
        className={`skill-card ${selectedSkill === skill.id ? "selected" : ""}`}
        onClick={() => setSelectedSkill(skill.id)}
      >
        <div className="skill-icon">{skill.icon}</div>
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}

export default Skills;
