import React, { useEffect, useRef } from 'react'
import FavoriteCard from '../card/FavoriteCard'
import { AnimatePresence, motion } from 'motion/react'
import { FaArrowRight, FaHeart } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'

const Favorites = ({moviesRef, favoritesRef, favorites}) => {

  

  return (
    <section 
    id='favorites'
    ref={favoritesRef}
    className='border-t border-gray-300 pt-3 mt-6 '>
      
      <div className='pb-6 md:pb-10 px-2 md:px-6'>

        <div className='mb-4 md:mb-6 lg:mb-8 flex items-center justify-between gap-2'>
          <h2 className='text-base md:text-lg font-medium md:font-semibold px-3 py-1 text-white bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] rounded-md shadow-sm shadow-gray-500 hover:shadow-md transition-shadow duration-200 ease-in '>Favorites</h2>
          <button
          onClick={() => moviesRef.current?.scrollIntoView()}
          aria-label='Go to your favorite movies section button'
          className='flex items-center jusitfy-center gap-2 text-sm font-medium md:font-semibold px-3 py-1 text-white bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] rounded-md shadow-sm shadow-gray-500 hover:shadow-md transition-all duration-200 ease-in hover:scale-[1.03] cursor-pointer'>
            <span className=''>Movies</span>
            <FaArrowRight size={14}/>
          </button>
        </div>

        <AnimatePresence>
          <motion.div
          initial={{opacity:0, y:40, scale:0.9}}
          animate={{opacity:1, y:0, scale:1}}
          transition={{duration:0.7}}
          >
            {favorites.length > 0
            ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:w-full items-stretch justify-center md:gap-x-4 lg:gap-x-6 md:gap-y-3 lg:gap-y-4 '>
                {favorites.map(movie => (
                  <FavoriteCard key={movie.id} 
                  movie={movie} 
                  />
                ))}
              </div>
            ) : (
              <div className='max-w-md mx-auto text-center py-3 md:py-5 px-2 shadow-sm shadow-gray-500 hover:shadow-md rounded-md transition-all duration-200 ease-in-out mt-3 md:mt-6 noMatchContainer border-cyan-500 border'>
                <p className='px-3 py-2 bg-red-500 w-fit mx-auto rounded-md'><MdFavoriteBorder size={16} color='white' /></p>
                <h4 className='py-2 text-sm font-bold'>Your Next Favorite is waiting for you!</h4>
                <p className='text-sm font-semibold'>Found a movie you love! Tap <span className='inline-block '>{<FaHeart color='red'/>}</span> to save it here.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Favorites