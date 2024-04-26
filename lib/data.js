import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import project2 from "../src/assets/project1.png";
import project4 from "../src/assets/project-3.png";
import project3 from "../src/assets/portfolio.png";
import Project1 from "../src/assets/10minutebuddy.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Atmiya University",
    location: "Rajkot, Gujarat",
    description:
      "I graduated in the field of computer science and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  
];
// demoe2
// demo2@gmail.com

export const projectsData = [
  {
    title: "10MinuteBuddy",
    description:
      "A React.js and Node.js productivity chrome extension featuring personalized 10-minute breaks every 2 hours. Offers diverse activities like meditation, doodling, quizzes, and music to enhance focus and relaxation.",
    tags: ["React", "TypeScript", "express.js","Tailwind", "node.js","mongoDb","axios"],
    imageUrl: Project1,
  },
  {
    title: "Communify",
    description:
      "Communify is a feature-rich communication platform designed to bring people together seamlessly in a virtual space. A powerful and user-friendly clone of Discord, Communify offers a range of collaborative features that enhance your online communication experience.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "MySql",'Socket.io',],
    imageUrl: project2,
  },
  {
    title: "Portfolio",
    description:
      "Developed a diverse personal portfolio showcasing projects in web development, build in react.js",
    tags: ["React.js", "Tailwind", "Framer-motion"],
    imageUrl: project3,
  },

  {
    title: "Share Fun",
    description:
      "Created a social media application, allowing users to share thoughts, engage with content, and connect with others in real-time, featuring intuitive design and seamless user experience.",
    tags: ["React.js", "node.js", "PostgreSQl", "Tailwind", "express.js","redux-toolkit"],
    imageUrl: project4,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];
