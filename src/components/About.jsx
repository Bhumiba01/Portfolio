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
      I graduated in Computer Science & Engineering from Atmiya University.
        <span className="font-medium"> My favorite aspect of programming is problem-solving. I love the feeling of finally figuring out a solution to a problem. My core stack includes React.js and Next.js for frontend development, and Python, Node.js, Express.js for backend development, along with MySQL for databases. I'm also familiar with TypeScript</span>
        <span className="font-medium">
        I'm always eager to learn new technologies. Currently, I'm seeking a full-time position as a full-stack developer.</span>
      </p>
      <p>
        <span className="italic">Outside of coding, I enjoy reading books and watching movies, as well as learning new things.</span>
      </p>
    </motion.div>
  )
}

export default About