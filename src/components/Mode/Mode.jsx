import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TiWeatherSunny } from "react-icons/ti";
import { BsMoonStars } from "react-icons/bs";

// Immediately set the dark mode class based on localStorage before the component mounts
if (typeof window !== "undefined") {
  const darkModePreference = localStorage.getItem("darkMode") === "true";
  if (darkModePreference) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  const buttonHoverCursorType = {
    type: "hover",
    className: "border-4 border-gray-800 dark:border-gray-200 avtive:border backdrop-blur-none",
  };

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Hide button when scrolling down
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      setThreshold(currentScrollY - 150);
    } else if (currentScrollY < threshold) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);

    // Show button at the top
    if (currentScrollY === 0) {
      setIsVisible(true);
    }
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      className="min-w-fit fixed bottom-2 right-2 z-50"
    >
      <button
        onClick={toggleMode}
        className={`p-2 rounded-full hover:bg-primary dark:bg-primary/20 dark:hover:bg-primary/50 border-primary dark:border-primary text-gray-800 hover:text-gray-200 dark:text-gray-200 backdrop-blur-sm border drop-shadow-lg transition-all duration-150 flex gap-1.5 items-center justify-center font-medium cursor-none active:scale-90 ${
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
        data-cursor={JSON.stringify(buttonHoverCursorType)}
      >
        {isDarkMode ? <TiWeatherSunny /> : <BsMoonStars />}
        {/* <span className="hidden lg:block">{isDarkMode ? "Light" : "Dark"}</span> */}
      </button>
    </motion.div>
  );
};

export default Mode;
