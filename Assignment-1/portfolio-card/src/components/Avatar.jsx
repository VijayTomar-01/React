import React from 'react'
import {motion, spring} from 'motion/react'

const Avatar = ({image}) => {

  const name = "Vijay Singh Tomar";
  const role = "Frontend and Backend Developer";

  return (
    <div 
    className={`flex items-center flex-col sm:flex-row gap-y-6 sm:justify-center gap-x-8 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url("https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg")] bg-cover bg-center py-12 px-3`}>

      <motion.img
      whileHover={{scale:1.1, rotate:5, cursor:"pointer"}}
      transition={{duration:0.3, type:spring, damping:22, stiffness:150}} 
      src={image} alt="Profile pics"
      className='w-22 md:w-24 lg:w-26 h-22 md:h-24 lg:h-26 rounded-full border-2 border-cyan-400 object-center object-cover' />

      <div className='text-center text-white'>
        <h4 className='font-bold text-base md:text-lg'>{name}</h4>
        <h4 className='font-semibold text-xs md:text-sm pt-1'>{role}</h4>
        <div className='w-6 h-0.5 bg-white mx-auto mt-1'></div>
      </div>
    </div>
  )
}

export default Avatar