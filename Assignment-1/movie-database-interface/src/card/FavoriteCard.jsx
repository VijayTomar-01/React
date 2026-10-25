import React from 'react'
import { FaHeart } from 'react-icons/fa'

const FavoriteCard = ({movie}) => {
  return (
    <div
    title={movie.title}
    aria-label={`Your favorite movie ${movie.title}`}
    className='h-35 bg-cover bg-center rounded-md shadow-sm shadow-gray-500 hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out relative'
    style={{backgroundImage: `url(https://images.pexels.com/photos/19224454/pexels-photo-19224454.jpeg)`}}>
      <div className='bg-black inset-0 h-full rounded-md opacity-40 hover:opacity-0 transition-opacity duration-200 ease-in-out'></div>
      
      <div className='absolute top-3 left-0 w-full text-white px-3'> 
        <div className='flex items-center justify-between gap-2 '>
          <h3 title={movie.title} aria-label={movie.title} 
          className='w-24 whitespace-nowrap overflow-hidden text-ellipsis font-semibold border-b border-red-500'>{movie.title}</h3>
          <FaHeart color='red' size={15}/>
        </div>
        <p className='text-sm font-medium pt-1'>{movie.year}</p>
      </div>

      <div className='absolute bottom-3 left-0 w-full text-white px-3'>
        <div className='flex items-center justify-start gap-2'>
          {movie.genre.map(g => (
            <span key={g} title={g} aria-label={`genre of the movie ${g}`} className='px-1 py-0.5 md:px-2 md:py-1 text-sm font-semibold rounded-md shadow-sm shadow-gray-300'>{g}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard