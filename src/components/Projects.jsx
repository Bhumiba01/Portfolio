import React from 'react'
import { projectsData } from '../../lib/data'
import Project from './Project'
import {motion} from 'framer-motion';

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
};
const Projects = () => {
  return (
    <motion.div name = "Projects" className='mb-28'
      initial = {{ opacity: 0, scale: 1,y:10}}
      whileInView={{opacity: 1, scale: 1,y:0}}
      transition={{duration: 1}}
    >
      <h2 className='text-3xl  font-medium capitalize mb-8 text-center'>My Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-4 max-w-[50rem] '>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project}/>
        </React.Fragment>
      ))}
      </div>
    </motion.div>
  )
}

export default Projects