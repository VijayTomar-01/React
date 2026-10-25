import React, { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import { hollyMovies } from '../utils/movies'
import Search from '../components/Search'
import Movies from '../components/Movies'
import Favorites from '../components/Favorites'
import Footer from '../components/Footer'

const Home = ({theme, setTheme}) => {

  

  const [movies, setMovies] = useState(hollyMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [favorites, setFavorites] = useState([]);

  const filteredAndSortedMovies = useMemo(() => {

    const search = searchTerm.trim().toLowerCase();

    const filtered = movies.filter(movie => {

      const matchesSearch =
      movie.title.toLowerCase().includes(search) ||
      movie.year.toString().includes(search) ||
      movie.director.toLowerCase().includes(search) ||
      movie.casts.some(actor => actor.toLowerCase().includes(search));
      
      const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre)

      return matchesSearch && matchesGenre;
    })

    return filtered.sort((a,b) => {
      switch(sortBy){
        case "rating":
          return b.rating - a.rating;

        case "year":
          return b.year - a.year;
        
        case "genre":
          return a.genre[0].localeCompare(b.genre[0]);

        default:
          return a.title.localeCompare(b.title);
      }
    })

  })

  const toggleFavoriteMovies = (movie) => {
    setFavorites((prevFav) => {
      const exists = prevFav.some(prev => prev.id === movie.id)
      if(exists){
        const confirm = window.confirm("Are you sure you want to remove this movie from your favorite list!");
        return confirm ? prevFav.filter(prev => prev.id !== movie.id) : prevFav;
      } else {
        const confirm = window.confirm("Do you want to add this movie to your Favorite list?");
        return confirm ? [...prevFav, movie] : prevFav;
      }
    })
  }

  const fullRefresh = () => {
    setSearchTerm("");
    setSelectedGenre("All");
    setSortBy("title")
  }

  const moviesRef = useRef(null);
  const favoritesRef = useRef(null);


  return (
    <div id='home' className=''>
      <Navbar theme={theme} setTheme={setTheme} />
      <Carousel />
      <Search 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}
      filteredAndSortedMovies={filteredAndSortedMovies}
      selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}
      sortBy={sortBy} setSortBy={setSortBy}
      fullRefresh={fullRefresh}/>
      <Movies 
      filteredAndSortedMovies={filteredAndSortedMovies}
      toggleFavoriteMovies={toggleFavoriteMovies}
      searchTerm={searchTerm} fullRefresh={fullRefresh}
      favorites={favorites}
      favoritesRef={favoritesRef} moviesRef={moviesRef}/>
      <Favorites 
      favorites={favorites} moviesRef={moviesRef} favoritesRef={favoritesRef}/>
      <Footer />
    </div>
  )
}

export default Home