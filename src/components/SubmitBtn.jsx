import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import toast, {Toaster} from "react-hot-toast";
const SubmitBtn = () => {

  const notify =()=>toast("Message sent!")
  return (
    <>
    <Toaster position='top-right'/>
    <button type="submit" value="Send" className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65' onClick={notify}>
      <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </>
    </button>
    </>
  )
}

export default SubmitBtn