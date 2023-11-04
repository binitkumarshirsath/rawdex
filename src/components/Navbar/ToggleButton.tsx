import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ToggleButton = () => {
  const mode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(mode === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleToggle = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? (
        <BsFillSunFill color={"yellow"} size={25} />
      ) : (
        <BsFillMoonStarsFill size={25} />
      )}
    </button>
  );
};

export default ToggleButton;
