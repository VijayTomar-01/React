import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import { motion, spring } from 'motion/react'

const Footer = () => {
  return (
    <footer id='contact'
    className='flex items-center justify-between gap-2 mt-6 p-4 nav'>
      <div className='flex items-center justify-center gap-2.5'>
        <motion.img
        whileHover={{scale:1.1, rotate:5, boxShadow:"1px 2px 2px rgba(0,0,0,0.6)", cursor:"pointer"}}
        transition={{duration:0.3, type:spring, damping:30, stiffness:250}}
        src="logo.png" alt="company Logo" 
        className='w-12 h-12 rounded-full object-cover object-center border-2 border-cyan-500'/>
        <span className='font-bold text-lg bg-linear-to-r from-amber-500 via-yellow-600 to-amber-700 text-transparent bg-clip-text '>Excellence</span>
      </div>

      <div>
        <a href="" hrefLang='en' target='_blank' rel='noopener noreferrer' title='netlify live deploy link'
        className='flex items-center justify-center gap-2 shadow-sm shadow-gray-300 cursor-pointer active:scale-95 active:text-red-500 text-green-500 px-3 py-1 rounded-md hover:scale-[1.03] transition-all duration-200'>
          <span>Netlify</span>
          <FiExternalLink />
        </a>
      </div>
    </footer>
  )
}

export default Footer