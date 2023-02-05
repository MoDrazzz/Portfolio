"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

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
      className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-light-gray dark:bg-dark-gray sm:right-10 sm:bottom-10 sm:text-lg md:h-12 md:w-12 md:text-xl xl:h-14 xl:w-14 xl:text-2xl"
      onClick={() => setLightMode((prev) => !prev)}
    >
      {lightMode ? (
        <Moon className="h-5 w-auto md:h-6 xl:h-7" />
      ) : (
        <Sun className="h-5 w-auto md:h-6 xl:h-7" />
      )}
    </button>
  );
}
