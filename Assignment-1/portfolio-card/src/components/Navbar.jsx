import React, { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import {motion, spring, AnimatePresence} from 'motion/react'
import {FaTimes, FaBars, FaSun, FaMoon, FaRegClone} from 'react-icons/fa'
import { MdHome, MdOutlineMessage } from 'react-icons/md'

const Navbar = ({theme, setTheme}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className='nav flex relative items-center justify-between px-2 md:px-4 py-1.5 gap-12px'>

      <div className='flex items-center justify-center gap-x-4'>
        <motion.img 
        whileHover={{scale:1.1, rotate:5, boxShadow:"1px 2px 2px rgba(0,0,0,0.6)"}}
        transition={{duration:0.3, type:spring, damping:30, stiffness:250}}
        src="logo.png" alt="Excellence made with perfection. Logo" 
        className='w-14 rounded-full border-2 border-cyan-400 cursor-pointer object-center object-cover' />
        <span className='font-bold text-lg bg-linear-to-r from-amber-500 via-yellow-600 to-amber-700 text-transparent bg-clip-text '>Excellence</span>
      </div>

      <div className=''>

        <button
        onClick={closeMenu}
        className='md:hidden text-2xl text-white'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {<AnimatePresence>
          {menuOpen && (
            <motion.ol
            initial={{y:-30, opacity:0}}
            animate={{y:0, opacity:1}}
            exit={{y:-30, opacity:0}}
            transition={{duration:0.3}}
            className='md:hidden absolute top-full w-full left-0 z-100 menuNav  '>
              <li className='px-3 py-1 text-sm md:text-base font-semibold cursor-pointer border-b-2 transition-all duration-300 active:text-green-400 text-center'>
                <a href="#home" hrefLang='en' target='_self' rel='nopoener noreferrer'
                className='flex items-center justify-center gap-2'>
                  <MdHome />
                  <span>Home</span>
                </a>
              </li>
              <li className=' px-3 py-1 text-sm md:text-base font-semibold cursor-pointer border-b-2 transition-all duration-300 active:text-green-400  text-center'>
                <a href="#card" hrefLang='en' target='_self' rel='nopoener noreferrer'
                className='flex items-center justify-center gap-2'>
                  <FaRegClone />
                  <span>Card</span>
                </a>
              </li>
              <li className=' px-3 py-1 text-sm md:text-base font-semibold cursor-pointer border-b-2 transition-all duration-300 active:text-green-400 text-center'>
                <a href="#contact" hrefLang='en' target='_self' rel='nopoener noreferrer'
                className='flex items-center justify-center gap-2'>
                  <MdOutlineMessage />
                  <span>Contact</span>
                </a>
              </li>
              <li className=' flex items-center justify-center border-b-2 text-sm md:text-base font-semibold'>
                <ThemeToggler theme={theme} setTheme={setTheme}/>
              </li>
            </motion.ol>
          )}  
        </AnimatePresence>}

        <ul className='hidden md:flex items-center justify-center gap-x-14 md:gap-x-16 lg:gap-x-18 text-white '>
          <li className='px-3 py-0.5 text-sm md:text-base font-semibold cursor-pointer  rounded-md hover:shadow-gray-500 hover:shadow-md transition-all duration-300 active:text-green-400 ease-in hover:bg-[#667eea] active:scale-95'>
            <a href="#home" hrefLang='en' target='_self' rel='nopoener noreferrer'
            className='flex items-center justify-center gap-2'>
              <MdHome />
              <span>Home</span>
            </a>
          </li>
          <li className='px-3 py-0.5 text-sm md:text-base font-semibold cursor-pointer  rounded-md hover:bg-[#667eea] hover:shadow-gray-500 hover:shadow-md transition-all duration-300 active:text-green-400 ease-in active:scale-95'>
            <a href="#card" hrefLang='en' target='_self' rel='nopoener noreferrer'
            className='flex items-center justify-center gap-2'>
              <FaRegClone />
              <span>Card</span>
            </a>
          </li>
          <li className='px-3 py-0.5 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#667eea] rounded-md hover:shadow-gray-500 hover:shadow-md transition-all duration-300 active:text-green-400 ease-in active:scale-95'>
            <a href="#contact" hrefLang='en' target='_self' rel='nopoener noreferrer'
            className='flex items-center justify-center gap-2'>
              <MdOutlineMessage />
              <span>Contact</span>
            </a>
          </li>
          <li className='active:text-green-400 transititon-all duration-300 hover:bg-[#667eea] rounded-md hover:shadow-gray-500 hover:shadow-md ease-in text-sm md:text-base font-semibold
          flex items-center justify-center px-3 py-1 gap-2 active:scale-95 cursor-pointer'>
            <ThemeToggler theme={theme} setTheme={setTheme} />
          </li>
        </ul>

        
        
      </div>
    </nav>
  )
}

export default Navbar