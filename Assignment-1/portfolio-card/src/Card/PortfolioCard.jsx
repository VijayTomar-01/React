import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import About from '../components/About'
import Skills from '../components/Skills'
import CardActions from '../components/CardActions'
import Footer from '../components/Footer'

const PortfolioCard = ({theme, setTheme}) => {

  const images = [
    "https://images.pexels.com/photos/32867486/pexels-photo-32867486.jpeg",
    "https://images.pexels.com/photos/32557420/pexels-photo-32557420.jpeg",
    "https://images.pexels.com/photos/34426334/pexels-photo-34426334.jpeg",
    "https://images.pexels.com/photos/6875030/pexels-photo-6875030.jpeg",
    "https://images.pexels.com/photos/7210063/pexels-photo-7210063.jpeg"
  ]

  const [imageIndex, setImageIndex] = useState(3);

  useEffect(() => {

    const autoplay = setInterval(() => {
      onNextImage();
    }, 6000)

    return () => {
      clearInterval(autoplay);
    }
  }, [imageIndex])

  const onNextImage = () => {
    setImageIndex(prev => (prev + 1) % images.length);
  }

  const onPrevImage = () => {
    setImageIndex(prev => (prev - 1 + images.length) % images.length);
  }

  return (
    <div
    id='card'
    className='mt-12 md:mt-16 lg:mt-20 max-w-md mx-auto border-2 border-green-400 rounded-md shadow-sm shadow-gray-500 hover:shadow-md transition-all duration-200'>

      <Header />
      <Avatar image={images[imageIndex]}/>
      <About />
      <Skills />
      <CardActions 
      theme={theme} setTheme={setTheme}
      onNextImage={onNextImage} onPrevImage={onPrevImage}
      imageIndex={imageIndex} totalImages={images.length}/>
      
    </div>
  )
}

export default PortfolioCard