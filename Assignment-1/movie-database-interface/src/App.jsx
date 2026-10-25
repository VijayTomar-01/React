
import { useEffect, useState } from 'react'
import './App.css'
import { hollyMovies } from './utils/movies';
import Home from './pages/Home';

function App() {

  const [theme, setTheme] = useState("light");

  return (
    <div className='app min-h-screen'>
      <Home 
      theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
