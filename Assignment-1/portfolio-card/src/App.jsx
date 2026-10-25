import { useState } from 'react'
import './App.css'
import PortfolioCard from './Card/PortfolioCard';
import {motion} from 'motion/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [theme, setTheme] = useState("light"); 

  return (
    <>
      <section id='home' className='app min-h-screen'>

        <Navbar theme={theme} setTheme={setTheme}/>

        <motion.div
        initial={{y:-30, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.3}}
        className='px-3 pb-4 md:pb-8 lg:pb-12'>
          <PortfolioCard theme={theme} setTheme={setTheme}/>
        </motion.div>
        
        <Footer />
      </section>
    </>
  )
}

export default App
