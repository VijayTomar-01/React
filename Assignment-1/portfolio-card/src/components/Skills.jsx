import React from 'react'
import SkillBadge from './SkillBadge'

const Skills = () => {

  const skills = ["HTML", "CSS", "Javascript", "Reactjs", "NodeJs", "ExpressJs", "TailwindCss", "MongoDb", "Github"]

  return (
    <div className='px-2 pt-4 md:pt-6 '>
      <h2 className='text-base font-semibold border-b text-[#667eea] text-center'>SKILLS</h2>
      <span className='flex items-center justify-evenly flex-wrap py-3 gap-x-3 gap-y-1.5'>
        {skills.map((skill,index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </span>
    </div>
  )
}

export default Skills