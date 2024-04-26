import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div name = "About" className='mb-28 max-w-[45rem] text-center leading-8 '
      variants={{
        hidden: { opacity: 0, y: 75,scale:1},
        visible: {opacity:1, y: 0}
      }}
        whileInView={{opacity: 1,scale:1}}
        initial="hidden"
        animate="visible"
      transition={{duration:0.5,delay:0.25}}
      >
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
        About Me
      </h2>
      <p className='mb-3'>
       I graduated in field
        <span className="font-medium">Computer Science & Engineering</span>, from Atmiya University. 
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          for frontend Reactjs, Nextjs and for backend python,nodejs,expressjs and for database mysql
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.div>
  )
}

export default About