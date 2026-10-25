import React, { useEffect } from 'react'

const SkillBadge = ({skill}) => {

  
  return (
    <div
    title={skill} 
    className='px-3 py-1 rounded-md bg-[#667eea] text-sm  font-semibold hover:scale-[1.02] cursor-pointer transition-all duration-200 shadow-sm shadow-gray-500'>
      <span className='bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200 text-transparent bg-clip-text'>
        {skill}
      </span>
    </div>
  )
}

export default SkillBadge