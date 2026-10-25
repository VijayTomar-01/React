import React from 'react'

const Header = () => {
  return (
    <header
    className='bg-linear-to-br from-[#667eea] to-[#764ba2] py-2 md:py-3 rounded-t-sm'>
      <h1 className=' font-bold text-lg md:text-xl lg:text-2xl bg-linear-to-br from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent w-fit mx-auto'>DEV PORTFOLIO</h1>
      <div className='w-8 h-0.5 bg-white mx-auto mt-0.5'></div>
    </header>
  )
}

export default Header