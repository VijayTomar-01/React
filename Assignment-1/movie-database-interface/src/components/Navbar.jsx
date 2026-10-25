import React, { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import { AnimatePresence, motion } from 'motion/react'
import { MdClose, MdHome, MdLocalMovies, MdMenu, MdMovie, MdOutlineMessage } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'

const Navbar = ({theme, setTheme}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className=''>

      <div className='px-2.5 py-1.5 flex items-center justify-between fixed w-full top-0 z-100 bg-linear-to-br from-[#343a40] via-[#495057] to-[#212529]'>

        <div className='flex items-center justify-center gap-2'>
          <motion.img
          whileHover={{scale:1.1, rotate:5, cursor:"pointer", boxShadow:"1px 2px 2px rgba(0,0,0,0.4)"}}
          transition={{duration:0.3, type:"spring", damping:18, stiffness:180}}
          src="vflix-logo.svg" alt="VFlix brand logo"
          className='w-12 h-12 object-center object-contain rounded-full border-2 border-red-500' />
          <span className='bg-linear-to-br from-[#ff4d4d] via-[#e50914] to-[#ff4d4d]  text-transparent bg-clip-text text-lg font-extrabold'>VFlix</span>
        </div>

        <button
        onClick={openMenu}
        className='md:hidden cursor-pointer fixed top-2 right-2 p-2 z-1100'>
          {menuOpen ? (<MdClose size={24} color='red'/>) : (<MdMenu size={24} color='cyan'/>)}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
              key="overlay"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              onClick={openMenu}
              className='md:hidden '>

                <motion.aside
                key="drawer"
                initial={{x: 100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{type:"spring", stiffness: 300, damping: 20}}
                className='fixed right-0 top-0 pt-20 pb-8 z-1000 h-screen min-h-screen w-3/4 max-w-75 flex-col  bg-linear-to-br from-[#343a40] via-[#495057] to-[#212529] py-12 text-white shadow-2xl '>

                  <ul className=''>
                    <li>
                      <a href="#home" hrefLang='en' rel='noreferrer noopener' target='_self'
                      className='flex items-center justify-center gap-x-3 gap-y-1 active:scale-95 w-full text-sm font-medium active:text-green-500 border-b p-1'>
                        <MdHome />
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#movies" hrefLang='en' rel='noreferrer noopener' target='_self'
                      className='flex items-center justify-center gap-x-3 gap-y-1 active:scale-95 w-full text-sm font-medium active:text-green-500 border-b p-1'>
                        <MdMovie />
                        <span>Movies</span>
                      </a>
                    </li>
                    <li>
                      <a href="#favorites" hrefLang='en' rel='noreferrer noopener' target='_self'
                      className='flex items-center justify-center gap-x-3 gap-y-1 active:scale-95 w-full text-sm font-medium active:text-green-500 border-b p-1'>
                        <MdLocalMovies />
                        <span>Favorites</span>
                      </a>
                    </li>
                    <li className='w-full flex items-center justify-center gap-x-3 gap-y-1 active:scale-95 text-sm font-medium active:text-green-500 border-b p-1'>
                      <ThemeToggler theme={theme} setTheme={setTheme}/>
                      
                    </li>
                    <li>
                      <a href="#contact" hrefLang='en' rel='noreferrer noopener' target='_self'
                      className='flex items-center justify-center gap-x-3 gap-y-1 active:scale-95 w-full text-sm font-medium active:text-green-500 border-b border-white p-1'>
                        <MdOutlineMessage />
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </motion.aside>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className='hidden list-none md:flex items-center justify-center gap-x-4 md:gap-x-8 lg:gap-x-12'>
          <li>
            <a href="#home" hrefLang='en' rel='noopener noreferrer' target='_self'
            className='flex items-center justify-center gap-2 cursor-pointer hover:shadow-sm shadow-gray-300 px-3 py-1 rounded-sm hover:scale-[1.03] active:scale-95 text-gray-50 hover:text-cyan-500 active:text-green-500 visited:text-gray-50 transition-all duration-300 ease-in text-xs md:text-sm lg:text-base font-medium md:font-semibold'>
              <MdHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#movies" hrefLang='en' rel='noopener noreferrer' target='_self'
            className='flex items-center justify-center gap-2 cursor-pointer hover:shadow-sm shadow-gray-300 px-3 py-1 rounded-sm hover:scale-[1.03] active:scale-95 text-gray-50 hover:text-cyan-500 active:text-green-500 visited:text-gray-50 transition-all duration-300 ease-in text-xs md:text-sm lg:text-base font-medium md:font-semibold'>
              <MdMovie />
              <span>Movies</span>
            </a>
          </li>
          <li>
            <a href="#favorites" hrefLang='en' rel='noopener noreferrer' target='_self'
            className='flex items-center justify-center gap-2 cursor-pointer hover:shadow-sm shadow-gray-300 px-3 py-1 rounded-sm hover:scale-[1.03] active:scale-95 text-gray-50 hover:text-cyan-500 active:text-green-500 visited:text-gray-50 transition-all duration-300 ease-in text-xs md:text-sm lg:text-base font-medium md:font-semibold'>
              <MdLocalMovies />
              <span>Favorites</span>
            </a>
          </li>
          <li className=' hover:text-cyan-500 hover:shadow-sm shadow-gray-300 px-3 py-1 text-gray-50 active:scale-95 hover:scale-[1.03] rounded-sm transition-all duration-300 ease-in text-xs md:text-sm lg:text-base font-medium md:font-semibold active:text-green-500'>
            <ThemeToggler theme={theme} setTheme={setTheme}/>
          </li>
          <li>
            <a href="#contact" hrefLang='en' rel='noopener noreferrer' target='_self'
            className='flex items-center justify-center gap-2 cursor-pointer hover:shadow-sm shadow-gray-300 px-3 py-1 rounded-sm hover:scale-[1.03] active:scale-95 text-gray-50 hover:text-cyan-500 active:text-green-500 visited:text-gray-50 transition-all duration-300 ease-in text-xs md:text-sm lg:text-base font-medium md:font-semibold'>
              <MdOutlineMessage />
              <span>Contact</span>
            </a>
          </li>
        </div>
      </div>

      
      
    </nav>
  )
}

export default Navbar