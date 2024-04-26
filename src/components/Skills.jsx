import React from 'react'
// import { skillsData } from '../../lib/data'
import { motion } from "framer-motion";
const skillsData = [
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

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div name="Skills" className="mb-28 max-w-[53rem] text-center sm:mb-40">
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index} key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Skills