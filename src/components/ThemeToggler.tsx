import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") == "light") {
      setLightMode(true);
    }
  }, []);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <button
      className="absolute bottom-5 right-5 block h-10 w-10 rounded-full bg-light-gray dark:bg-dark-gray"
      onClick={() => setLightMode((prev) => !prev)}
    >
      <FontAwesomeIcon icon={lightMode ? faMoon : faLightbulb} />
    </button>
  );
}
