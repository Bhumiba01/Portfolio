import React, { useState } from 'react'
import { links } from '../../lib/data'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const handleLink = (link) => {
    setActiveLink(link);
    setIsOpen(true);
  }

  return (
      <motion.div className='fixed z-[999]  h-24 right-0 left-0 top-0 text-end sm:flex sm:justify-around sm:items-center sm:p-4' 
      variants={{
        hidden: { opacity: 0, x: -1000},
        visible: {opacity:1, x : 0}
      }}
      initial="hidden"
      animate="visible"
      transition={{duration:0.5}}
      >
            <ul className='hidden sm:flex bg-white text-center shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-slate-800 dark:bg-opacity-80 dark:shadow-lg dark:shadow-white/5 dark:backdrop-blur-sm shadow-lg bg-opacity-80 p-3 rounded-full gap-7 text-base font-bold'>
              {links.map((link) => (
                <Link to={link.name} duration={700} offset={-100} smooth={true} spy={true}>
                <li key={link.hash} className={`cursor-pointer ${activeLink === link.hash ? 'text-pink-700':''}`} onClick={() => handleLink(link.hash)}>{link.name}</li>
                </Link>
                ))}
            </ul>
            <button className='sm:hidden cursor-pointer fixed top-3  right-2' onClick={toggleNavbar}>{isOpen || <HiMenuAlt3 className='h-9 w-9'/>}
            </button>
            {isOpen && (
              <motion.div className='sm:hidden fixed top-0 right-0 h-80 rounded-md w-1/2 bg-[#f3f4f6]  bg-opacity-80 dark:bg-black dark:bg-opacity-80 z-50 p-4'
              variants={{
                hidden: { opacity: 0, x: 1000},
                visible: {opacity:1, x : 0}
              }}
              initial="hidden"
              animate="visible"
              transition={{duration:0.6}}
              >
                 <button onClick={toggleNavbar} className='text-black dark:text-white'><MdClose className='h-7 w-7'/></button>
                 <ul className='flex flex-col items-center justify-center gap-5'>
                  {links.map((link) => (
                    <Link to={link.name} duration={700} offset={-100} smooth={true} spy={true}>
                  <li key={link.hash} className={`cursor-pointer ${activeLink === link.hash ? 'text-pink-700':''}`} onClick={() => handleLink(link.hash)}>{link.name}</li>
                </Link>
                ))}
              </ul>
              </motion.div>
            )}
      </motion.div>
  )
}

export default Header