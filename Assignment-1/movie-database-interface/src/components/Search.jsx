import { motion } from 'framer-motion';
import { AnimatePresence } from 'motion/react';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { MdFilterList, MdRefresh } from 'react-icons/md';

const Search = ({searchTerm, setSearchTerm, filteredAndSortedMovies, selectedGenre, setSelectedGenre, sortBy, setSortBy, fullRefresh}) => {

  const [showFilter, setShowFilter] = useState(false);

  const filterToggle = () => {
    setShowFilter(prev => !prev);
  }

  const genres = ["All", "Sci-Fi", "Action", "Thriller", "Crime", "Drama", "Adventure", "Fantasy", "Biography"];

  return (
    <div className='py-12 md:py-18 px-2'>

      <div className='max-w-md mx-auto border border-red-600 px-3 py-1.5 rounded-md shadow-sm shadow-gray-500 hover:shadow-md flex items-center justify-between transition-all duration-200 ease-in'>
        <input type="text" 
        placeholder='Discover Movies...' 
        aria-label='Search Movies here'
        title='Search movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full outline-none font-medium text-base focus:scale-[1.03] px-1.5 transition-all duration-200 ease-in py-1'/>
        
        <button
        onClick={filterToggle}
        className='cursor-pointer hover:scale-105'>
          {showFilter
          ? <FaTimes color='red' size={20}/>
          : <MdFilterList color='blue' size={20}/>}
        </button>
      </div>

      <div className='flex items-center justify-center my-3 mx-2'>
        {searchTerm && (
          <p className='text-sm font-medium '>Found <span className={`${filteredAndSortedMovies.length > 0 ? "text-green-500" : "text-red-500"}`}>{filteredAndSortedMovies.length}</span> movie{filteredAndSortedMovies.length > 0 ? "s" : ""} for <span className='text-red-500 border-b font-bold' >"{searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}"</span></p>
        )}
      </div>

      <div className='flex items-center justify-center py-2 md:pb-4'>
        {searchTerm && (
          <button
          onClick={fullRefresh}
          className='px-3 py-1 flex items-center justify-center gap-2 shadow-sm shadow-gray-500 hover:shadow-md rounded-md hover:scale-[1.03] cursor-pointer text-sm font-medium bg-linear-to-br from-[#450000] via-[#8b0000] to-[#e50914] text-gray-50 transition-all duration-200'>
            <MdRefresh size={15} color='cyan'/>
            <span>Refresh</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {showFilter && (
          <motion.div
          initial={{opacity:0, y:-10}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-10}}
          transition={{duration:0.2}}
          className='flex items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 flex-wrap'>

            <select 
            name="genre" id="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className='shadow-sm shadow-gray-500 hover:shadow-md focus:outline-none rounded-sm px-3 py-1 text-sm font-medium '>
              {genres.map(genre => (
                <option className='text-xs font-medium'>{genre}</option>
              ))}
            </select>

            <select name="sort" id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='shadow-sm shadow-gray-500 hover:shadow-md focus:outline-none rounded-sm px-3 py-1 text-sm font-medium '>
              <option className='text-xs font-medium' value="rating">Rating (High - Low)</option>
              <option className='text-xs font-medium' value="year">Year (Newest First)</option>
              <option className='text-xs font-medium' value="genre">Genre (A - Z)</option>
              <option className='text-xs font-medium' value="title">Title (A - Z)</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  )
}

export default Search