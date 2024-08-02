import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "../../assets/constants";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
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
      className="min-w-fit fixed bottom-2 right-2 flex gap-2 z-50"
    >
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded bg-gray-900 dark:bg-gray-950 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-100 transition-all duration-300 flex gap-1.5 items-center justify-center font-medium"
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
        <span className="hidden lg:block">{isDarkMode ? "Light" : "Dark"}</span>
      </button>
    </motion.div>
  );
};

export default Mode;
