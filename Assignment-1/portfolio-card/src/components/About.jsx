import React from 'react'

const About = () => {

  const bioText = "Hi, I'm a passionate frontend developer currently learning React.js and building projects to strengthen my understanding of modern web development. I'm working on this portfolio card project to get a solid grasp of React concepts like components and props while improving my coding skills through hands-on practice. I enjoy creating clean, responsive user interfaces and believe that learning by building real projects is the best way to grow as a developer.";

  const byeText = "Auf Weidersehen!";

  return (
    <div className='px-2 pt-4 md:pt-6 text-center'>
      <h2 className='text-base font-semibold border-b text-[#667eea]'>ABOUT</h2>
      <p className='text-xs md:text-sm pt-3'>"{bioText}"</p>
      <p className='mt-2 text-xs md:text-sm font-semibold text-green-500 w-fit mx-auto border-b'>"{byeText}"</p>
    </div>
  )
}

export default About