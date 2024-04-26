import { useEffect, useRef, useState } from "react"
import Header from "./components/header"
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import { Experiance } from "./components/Experiance";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { MdNightlight } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { motion, useInView, useAnimation } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
        <div className={`${darkMode && "dark"}`}  name="Home">
          <motion.div  className="bg-gray-50 absolute min-h-screen w-full dark:text-gray-50 dark:text-opacity-90 text-gray-950 dark:bg-gray-900 "
          >
            <div className="relative">
            <div className="bg-pink-400 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#99494a]"></div>
            <div className=" bg-red-400 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#353347]"></div>
            </div>
            <div className="relative z-20 flex flex-col items-center px-4">
            <Header/>
            <Intro />
            <About/>
            <Projects/>
            <Skills/>
            <Experiance darkMode={darkMode}/>
            <Contact/>
            <button onClick={toggleDarkMode} className="m-7 z-[100] fixed bottom-0 right-0 bg-gradient-to-r from-pink-400 to-red-400 dark:bg-gradient-to-r dark:from-[#99494a] dark:to-[#353347] dark:text-white text-black rounded-full p-3">
            {darkMode ? <MdOutlineWbSunny/> : <MdNightlight/>}
          </button>
            </div>
          </motion.div>
        </div>
    </>
  )
}

export default App
