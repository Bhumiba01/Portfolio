import React, { useRef } from 'react'
import SubmitBtn from './SubmitBtn'
import emailjs  from '@emailjs/browser'
import { motion } from "framer-motion";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nutjiie', 'template_p63d6wb', form.current, 'OZY2EJwStXKGw6FH_')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <div className='bg-pink-400 absolute bottom-[6rem] z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#99494a]'>
      <div className="bg-red-400 absolute bottom-[1rem] z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#353347]"></div>
      </div>
      <motion.section name="Contact" className='mb-40 relative z-[20] sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      >
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>Contact Me</h2>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at  <a className="underline" href="mailto:example@gmail.com">
           bhumibapadhiyar@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form ref={form} onSubmit={sendEmail} className="mt-10 flex flex-col dark:text-black">
      <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="user_email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn/>
      </form>
      </motion.section>
    </>
  )
}

export default Contact