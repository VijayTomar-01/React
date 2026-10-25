import React, { useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdFavorite, MdHome, MdLaunch, MdMovie, MdOutlineMessage } from 'react-icons/md'

const Footer = () => {

  const [email, setEmail] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubscribe();
  }

  const onSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.trim())){
      alert("Please enter a valid email!");
      return;
    }
    const confirm = window.confirm("Are you sure you want to subscribe to the newsletter?");
    if(confirm) {
      alert("Thank you for the sub for fast updates!");
      setEmail("");
      return;
    }
  }

  return (
    <footer id='contact' className='pt-6 md:pt-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 items-center p-2 md:px-4 text-white bg-linear-to-br from-[#343a40] via-[#495057] to-[#212529] min-h-20 md:min-h-50'>

        <div className='flex flex-col items-center justify-center md:border-r-2 border-white h-full'>
          <div className='flex items-center justify-center gap-3'>
            <img src="/vflix-logo.svg" alt="Brand logo" 
            className='w-16 h-16 p-2 border-2 border-red-500 rounded-full object-center object-cover'/>
            <div className='flex flex-col items-start jusify-center'>
              <h3 className='font-extrabold text-lg text-red-500'>VFlix</h3>
              <p className='text-xs font-light'>Discover, Watch, Favorite</p>
            </div>
          </div>
          <div className='hidden md:block text-center pt-3'>
            <p className='text-sm font-medium'>Find your next favorite movie from our handpicked collection. Search, filter and enjoy the base of cinema</p>
          </div>
        </div>

        <div className='hidden md:flex flex-col items-center justify-center gap-0.5 list-none border-r-2 border-white'>
          <h3 className='text-base md:text-lg font-semibold md:font-bold'>Quick Links</h3>
          <li >
            <a href="#home" rel='noopener onreferrer' target='_self' className='flex items-center gap-2 hover:shadow-sm shadow-gray-500 px-3 py-1 rounded-sm active:text-green-400 visited:text-cyan-600 transition-all duration-300 ease-in hover:scale-105 active:scale-95 mt-1'>
              <MdHome size={18} color='blue'/>
              <span className='text-xs font-medium'>Home</span>  
            </a>
          </li>
          <li>
            <a href="#movies" rel='noopener onreferrer' target='_self' className='flex items-center gap-2 hover:shadow-sm shadow-gray-500 px-3 py-1 rounded-sm active:text-green-400 visited:text-cyan-600 transition-all duration-300 ease-in hover:scale-105 active:scale-95 mt-1'>
              <MdMovie size={18} color='orange'/>
              <span className='text-xs font-medium'>Movies</span>  
            </a>
          </li>
          <li>
            <a href="#favorites" rel='noopener onreferrer' target='_self' className='flex items-center gap-2 hover:shadow-sm shadow-gray-500 px-3 py-1 rounded-sm active:text-green-400 visited:text-cyan-600 transition-all duration-300 ease-in hover:scale-105 active:scale-95 mt-1'>
              <MdFavorite size={18} color='red'/>
              <span className='text-xs font-medium'>Favorites</span>  
            </a>
          </li>
          <li>
            <a href="#contact" rel='noopener onreferrer' target='_self' className='flex items-center gap-2 hover:shadow-sm shadow-gray-500 px-3 py-1 rounded-sm active:text-green-400 visited:text-cyan-600 transition-all duration-300 ease-in hover:scale-105 active:scale-95 mt-1'>
              <MdOutlineMessage size={18} color='cyan'/>
              <span className='text-xs font-medium'>Contact</span>  
            </a>
          </li>
          <li>
            <a href="https://moviedatabaseinterface.netlify.app/" rel='noopener onreferrer' target='_blank' className='flex items-center gap-2 hover:shadow-sm shadow-gray-500 px-3 py-1 rounded-sm active:text-green-400 visited:text-cyan-600 transition-all duration-300 ease-in hover:scale-105 active:scale-95 mt-1'>
              <MdLaunch size={18} color='cyan'/>
              <span className='text-xs font-medium'>Netify</span>  
            </a>
          </li>
        </div>

        <div className='flex flex-col items-center gap-2 md:border-r-2 h-full border-gray-200 text-gray-50'>
        <h3 className='text-base md:text-lg font-semibold md:font-bold'>Socials</h3>
        <ul className='flex items-center justify-center md:flex-col gap-2'>
          <li className='pt-2'><a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-400 hover:text-green-400 visited:text-blue-600 '><FaFacebookF size={18} /></a></li>
          <li className='pt-2'><a href="https://www.instagram.com/?hl=en" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-400 hover:text-green-400 visited:text-pink-500 '><FaInstagram /></a></li>
          <li className='pt-2'><a href="https://x.com/" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-200 hover:text-green-400 visited:text-black '><FaXTwitter /></a></li>
          <li className='pt-2'><a href="https://www.twitch.tv/" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-400 hover:text-green-400 visited:text-purple-500 '><FaTwitch /></a></li>
          <li className='pt-2'><a href="https://github.com/VijayTomar-01/react-essentials-assignment.git" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-400 hover:text-green-400 visited:text-white'><FaGithub /></a></li>
          <li className='md:hidden'><a href="https://moviedatabaseinterface.netlify.app/" target='_blank' rel='noopener noreferrer' hrefLang='en' className='text-white active:text-cyan-400 hover:text-green-400 visited:text-white'><MdLaunch /></a></li>
        </ul>
      </div>

      <div className='hidden md:flex flex-col items-center gap-2 text-gray-50 p-2'>
        <h3 className='text-base md:text-lg font-semibold md:font-bold'>Newsletter</h3>
        <p className='text-center text-sm'>Subscription is for Demonstration purpose. No emails are sent because this project doesnot include emailJs or backend services.</p>
        <form
        onSubmit={onFormSubmit} 
        className='shadow-sm shadow-gray-500 flex flex-wrap items-center justify-center rounded-sm hover:shadow-md'>
          <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your Email'
          className='outline-none px-1 lg:px-3 py-1' />
          <button
          type='submit' 
          className='px-1 py-1 bg-[#667eea] text-xs rounded-sm mr-1 cursor-pointer mb-1 active:scale-95 hover:scale-[1.02] transition-transform duration-200'>
            Subscribe
          </button>
        </form>
      </div>

      

      </div>
    </footer>
  )
}

export default Footer