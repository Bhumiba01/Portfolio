import React from 'react'
import {motion} from 'framer-motion'

const Project = (project) => {
  const {title, description, tags, imageUrl,linkUrl} = project;
  return (
    <div className='group mb-3 sm:mb-8 last:mb-0'>
      {/* flex flex-col gap-5 mb-7 w-full md:even:flex-row-reverse md:odd:flex-row  items-center md:items-start py-2 max-w-[50rem] bg-white shadow-lg rounded-lg shadow-black/20 justify-between px-2 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 */}
      <section className=" h-[600px]  bg-white shadow-lg rounded-lg shadow-black/20 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 p-1">
        <div className="bg-gradient-to-r sm:w-96 sm:h-60 flex items-center dark:from-[#353347] dark:to-[#99494a]  from-pink-400 to-red-400 p-2 rounded-lg">
          <img
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="h-auto w-full sm:h-auto sm:w-full  object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3 items-start max-w-lg sm:max-w-xl justify-center p-2">
            <h2 className="text-2xl md:text-4xl font-bold">
            {title}
            </h2>
            <p className="text-base text-gray-700 dark:text-white/70 md:text-base ">
            {description}
            </p>    
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

            <div className="flex items-center justify-center gap-2">
              <a
                href={linkUrl}
                target="_blank"
                className="bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-black active:scale-105 cursor-pointer transition border border-black/10"
              >
                Github
              </a>
            </div>
          </div>
        
      </section>
    </div>
  )
}

export default Project