import React from 'react'
import {Link} from 'react-scroll'
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {motion} from 'framer-motion'
import introName from '../assets/introname1.png'
import ResumePdf from '../assets/Bhumiba_Padhiyar.pdf'
const Intro = () => {
  return (
    <div className='mt-24 mb-60 sm:mb-80 max-w-[60rem] flex items-center justify-center'>
        <div className='relative'>
          <motion.h1 className='mb-10 mt-4 px-4 text-lg max-w-[45rem] font-medium !leading-[1.5] sm:text-3xl'
           initial = {{ opacity: 0, scale: 0.5}}
           whileInView={{opacity: 1, scale: 1}}
           transition={{duration: 0.5}}
          >
          <span className="flex justify-center pb-3"><img src={introName} className="h-full w-full rounded-full text-3xl object-cover object-center" alt="intro name"/></span>
            <span className='max-w-[50rem] '>Hello, I'm <span className='underline'>Bhumi Padhiyar,</span> </span>
            a <span className="font-bold underline">full-stack developer.</span> I enjoy
            building <span className="italic">web apps and everything in between</span>.
            <span>I am currently looking for a </span> <span className="font-medium">full-time position</span> as a software
            developer.
          </motion.h1>
          <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial = {{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1}}
          >
            <Link to='Contact' duration={700} offset={-100} smooth={true} spy={true} className='cursor-pointer group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
              Contact me here
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href={ResumePdf}  download="Bhumiba_Padhiyar.pdf">
              Download CV
              <HiDownload  className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <div className='flex items-center justify-center gap-3'>
              <a href="https://www.linkedin.com/in/bhumiba-padhiyar-586112212/" target='_blank' className='bg-white p-2 text-blue-600 hover:text-blue-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white'>
                <BsLinkedin/>
              </a>
              <a href="https://github.com/Bhumiba01" target='_blank' className='bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white'>
                <BsGithub/>
              </a>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Intro