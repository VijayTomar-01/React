import React, { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';

const MovieCard = ({movie, toggleFavoriteMovies, isFavorite}) => {

  const getRatingColor = (rating) => {
    if(rating >= 3 && rating <= 5.5) return "bg-red-500 text-white";
    if(rating > 5.5 && rating <=7.5) return "bg-cyan-400 text-white";
    if(rating > 7.5) return "bg-green-500 text-white"; 
  }

  return (
    <div className=''>

      <div
      className='bg-cover bg-center h-60 md:h-70 hover:scale-[1.03] transition-all duration-300 ease-in-out shadow-sm shadow-gray-500 hover:shadow-md rounded-md relative'
      style={{backgroundImage: `url(${movie.image})`}}>
        <div className='bg-black inset-0 z-10 h-full opacity-40 hover:opacity-0 transition-all duration-200 ease-in-out rounded-md'></div>

        <div className='absolute top-4 left-0 w-full px-3'>
          <div className='flex items-center justify-between'>
            <div className={`${getRatingColor(movie.rating)} px-3 py-1 flex items-center justify-center gap-x-3 rounded-md`}>
              <MdStar size={20} color='gold'/>
              <span className='text-sm font-medium'>{movie.rating}</span>
            </div>
            <div>
              <button
              onClick={() => toggleFavoriteMovies(movie)}
              title='toggle favorite'
              aria-label='toggle favorite button'
              className='p-1 cursor-pointer hover:scale-[1.03]'>
                {isFavorite
                ? <FaHeart color='red' size={20}/>
                : <FaHeart color='white' size={20}/>}
              </button>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 text-white px-2 py-1 flex flex-col items-start gap-1.5'>
          
            <h2 className='text-sm md:text-base font-medium md:font-semibold w-32  whitespace-nowrap text-ellipsis overflow-hidden'>{movie.title}</h2>
          
          <div className='flex items-center justify-start gap-2 text-xs font-medium  '>
            {movie.genre.map(g => (
              <span key={g}
              className='px-2 py-0.5 rounded-sm shadow-sm shadow-gray-300'>{g}</span>
            ))}
          </div>
          <div className='flex items-center justify-center gap-2'>
            <p className='text-xs font-medium'>By:</p>
            <span className='text-sm font-semibold border-b pb-0.5 border-cyan-400'>{movie.director}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieCard