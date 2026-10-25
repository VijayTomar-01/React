import React, { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaHeart, FaMoon, FaRegHeart, FaSun } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';

const CardActions = ({theme, setTheme, onNextImage, onPrevImage, imageIndex, totalImages}) => {

  const [likes, setLikes] = useState(23);
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    if(liked){
      const unlike = window.confirm("Do you want to unlike this portfolio card?");
      if(unlike){
        setLiked(prev => !prev);
        setLikes(prev => prev - 1);
        alert("You unliked this portfolio card!");
      }
    } else {
      const like = window.confirm("Do you want to like this portfolio card?");
      if(like){
        setLiked(prev => !prev);
        setLikes(prev => prev + 1);
        alert("Thank you for liking this portfolio card!");
      }
    }
  }

  const onContact = () => {
    alert("Thank you for reaching out!");
  }

  return (
    <div className='flex items-center justify-between p-2 cardActionStrip mt-3 rounded-b-sm'>

      <div className='flex items-center justify-center gap-2 text-xs font-medium bg-(--tgl-bg) text-(--tgl-color) rounded-sm shadow-sm shadow-gray-500 hover:scale-[1.03] transition-all duration-200 px-3 py-1 active:scale-95'>
        <ThemeToggler theme={theme} setTheme={setTheme}/>
      </div>

      <div className='flex items-center justify-center gap-x-2 '>
        <button
        className='px-1 py-1 md:px-3 cursor-pointer hover:scale-[1.03] transition-all duration-200'
        onClick={onPrevImage}>
          <HiChevronLeft />
        </button>
        <span className='text-xs font-semibold'>{imageIndex + 1} / {totalImages}</span>
        <button
        className='px-1 py-1 md:px-3 cursor-pointer hover:scale-[1.03] transition-all duration-200'
        onClick={onNextImage}>
          <HiChevronRight />
        </button>
      </div>

      <div>
        <button
        className='flex item-center justify-center gap-2 cursor-pointer'
        onClick={onLike}>
          <div className='hover:scale-[1.03] transition-all duration-200'>
            {liked
              ? <FaHeart size={15} color='red'/>
              : <FaRegHeart size={15} color='cyan'/>}
          </div>
          <span className='text-xs font-semibold'>{likes}</span>
        </button>
      </div>
      
      <div>
        <button
        onClick={onContact}
        className='flex items-center justify-center gap-1 md:gap-2 px-1 md:px-3 py-1 rounded-sm shadow-gray-500 bg-[#667eea] cursor-pointer shadow-sm hover:scale-[1.03] transition-all duration-200'>
          <MdOutlineMessage size={15}/>
          <span className='text-xs font-semibold'>Contact</span>
        </button>
      </div>
    </div>
  )
}

export default CardActions