import React, { useEffect } from 'react'
import { FaPaintBrush } from 'react-icons/fa';
import { FaPallet } from 'react-icons/fa6';

const ThemeToggler = ({theme, setTheme}) => {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    })
  }
  return (
    <button
    onClick={toggleTheme}
    className='flex items-center justify-center gap-2 cursor-pointer'>
      <FaPaintBrush />
      <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
    </button>
  )
}

export default ThemeToggler