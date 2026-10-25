import { PiPaintBucketFill } from "react-icons/pi";


const ThemeToggler = ({theme, setTheme}) => {

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  }

  return(
    <button
    className=" cursor-pointer flex items-center justify-center gap-2"
    onClick={toggleTheme}>
      <PiPaintBucketFill />
      {theme.charAt(0).toUpperCase() + theme.slice(1)}
    </button>
  )

}

export default ThemeToggler;