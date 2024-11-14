// src/components/Skills.jsx
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import "../styles/skills.css";

function Skills() {
  // Array of skills with names and their respective icons
  const skills = [
    { name: "React", icon: <FaReact size={50} /> },
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} /> },
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "MongoDB", icon: <DiMongodb size={50} /> }
  ];

  return (
    <section className="skills">
      <h1>Skills</h1>
      <p>My professional skills.</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
