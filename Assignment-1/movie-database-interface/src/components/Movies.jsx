import { AnimatePresence, motion } from 'motion/react'
import MovieCard from '../card/MovieCard'
import { MdRefresh } from 'react-icons/md'
import {  FaArrowRight, FaRegSadTear } from 'react-icons/fa'
import { BsEmojiFrown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { text } from 'motion/react-client'

const Movies = ({filteredAndSortedMovies, toggleFavoriteMovies, searchTerm, fullRefresh, favorites, favoritesRef, moviesRef}) => {

  const color = ["red", "green", "blue", "purple", "cyan", "yellow", "orange"];

  const [colorIndex, setColorIndex] = useState(0);

  const nextColor = () => {
    setColorIndex(prev => (prev + 1) % color.length);
  }
  
  useEffect(() => {
    const autoplay = setInterval(() => {
      nextColor();
    }, 5000)

    return () => {
      clearInterval(autoplay);
    }
  }, [])
  
  return (
    <section id='movies' ref={moviesRef} className='border-t border-gray-300 pt-3'>

      <div className='pb-6 px-2 md:px-6'>

        <div className='mb-4 md:mb-6 lg:mb-8 flex items-center justify-between gap-2'>
          <h2 className='text-base md:text-lg font-medium md:font-semibold px-3 py-1 text-white bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] rounded-md shadow-sm shadow-gray-500 hover:shadow-md transition-shadow duration-200 ease-in '>Movies</h2>
          <button
          onClick={() => favoritesRef.current?.scrollIntoView()}
          aria-label='Go to your favorite movies section button'
          className=' flex items-center jusitfy-center gap-2 text-sm font-medium md:font-semibold px-3 py-1 text-white bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] rounded-md shadow-sm shadow-gray-500 hover:shadow-md transition-all duration-200 ease-in hover:scale-[1.03] cursor-pointer active:scale-95'>
            <span className=''>Your Favorites</span>
            <FaArrowRight size={14}/>
          </button>
        </div>

        <AnimatePresence>
          <motion.div
          initial={{opacity:0, y:40, scale:0.9}}
          animate={{opacity:1, y:0, scale:1}}
          transition={{duration:0.7}}
          >
            {filteredAndSortedMovies.length > 0
            ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:w-full items-stretch justify-center md:gap-x-4 lg:gap-x-6 md:gap-y-3 lg:gap-y-4 '>
                {filteredAndSortedMovies.map(movie => (
                  <MovieCard key={movie.id} 
                  movie={movie} 
                  isFavorite={favorites.some(fav => fav.id === movie.id)}
                  toggleFavoriteMovies={toggleFavoriteMovies}/>
                ))}
              </div>
            ) : (
              <div className='max-w-md mx-auto text-center py-3 md:py-5 px-2 shadow-sm shadow-gray-500 hover:shadow-md rounded-md transition-all duration-200 ease-in-out mt-3 md:mt-6 flex flex-col items-center justify-center gap-1 noMatchContainer border border-cyan-400'>
                {searchTerm && (
                  <>
                    <FaRegSadTear size={25} color={`${color[colorIndex]}`}/>
                    <p className='text-sm md:text-base font-medium md:font-semibold '>There are no movies Matching <span className='font-bold text-red-500 border-b'>"{searchTerm.trim().toUpperCase()}"</span></p>
                    <p className='text-sm font-medium text-green-500'>Hmm, no Matches! <span className='block text-blue-500'>Try searching for something else.</span></p>
                    <button
                    onClick={fullRefresh}
                    className={`flex items-center justify-center gap-2 px-3 py-0.5 mt-3 rounded-sm shadow-sm shadow-gray-500 text-xs md:text-sm mx-auto font-medium md:font-semibold text-white bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] cursor-pointer active:scale-95 transition-transform duration-200`}
                    >
                      <span>Refresh</span>
                      <MdRefresh color={`${color[colorIndex]}`} size={16}/>
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}

export default Movies