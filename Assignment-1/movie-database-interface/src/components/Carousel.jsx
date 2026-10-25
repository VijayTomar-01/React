import React, { useEffect, useState } from 'react'
import { hollyMovies } from '../utils/movies'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';

const Carousel = () => {

  const [currentMovie, setCurrentMovie] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setIsTransitioning(true);
      onNextMovie();

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 5000)

    return () => {
      clearInterval(autoplay);
    }
  }, [])

  

  const onNextMovie = () => {
    setCurrentMovie((prev) => (prev + 1) % hollyMovies.length);
  }

  const onPrevMovie = () => {
    setCurrentMovie((prev) => (prev - 1 + hollyMovies.length) % hollyMovies.length);
  }

  const movie = hollyMovies[currentMovie]

  return (
    <div className='min-h-screen bg-cover bg-center relative overflow-hidden bg-black'
    title={movie.title} aria-label={movie.title}
    style={{backgroundImage: `url(${movie.image})`}}>
      <div className='bg-black inset-0 absolute z-0 transition-opacity duration-1000'
      style={{opacity: isTransitioning ? 0.6 : 0}}></div>

        <div className='absolute bottom-0 left-0 right-0 z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent '>
            <div className='flex items-center justify-between'>
            <button 
            onClick={onPrevMovie}
            className='cursor-pointer'>
              <HiChevronLeft size={50} color='white'/>
            </button>
            <button
            onClick={onNextMovie}
            className='cursor-pointer'>
              <HiChevronRight size={50} color='white'/>
            </button>
        </div>

        <div className='flex flex-col items-start justify-center ml-4 md:ml-6 pb-3 gap-1 mt-2 md:mt-4 text-white'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold'>{movie.title}</h3>
          <div className='w-16 md:w-22 h-0.5 bg-red-600 mt-1'></div>

          <div className='flex items-center justify-center gap-x-4 gap-y-1 mt-1.5 md:mt-2.5'>
            {movie.genre.map((g) => (
              <p key={g} className='text-base md:text-lg font-medium md:font-semibold flex items-center justify-center gap-x-4'><span className='w-1.5 h-1.5 rounded-full bg-red-600 '></span>{g}</p>
            ))}
          </div>

          <div className='flex items-center justify-center gap-3 mt-2 md:mt-3'>
          <FaStar size={30} color='gold'/>
          <p className='font-semibold md:font-bold text-2xl md:text-3xl'>{movie.rating} / <span className='font-medium text-xl'>10</span></p>
        </div>

        </div>
        </div>
      
    </div>
  )
}

export default Carousel