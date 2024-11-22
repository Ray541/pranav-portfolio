import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Header will not appeare scrolling down
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      setThreshold(currentScrollY - 150);
    }
    // Header to display after 150pxs from the current px
    else if (currentScrollY < threshold) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);

    // Header will disappeare
    if (currentScrollY === 0) {
      setIsVisible(false);
    }
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      className={`flex items-center justify-center w-full fixed top-10 z-10 ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="flex gap-5 py-4 px-5 bg-gray-400/10 dark:bg-gray-200/20 border-gray-700/30 bg-clip-padding backdrop-filter backdrop-blur-sm border drop-shadow-lg rounded-full">
        {HEADER_ITEMS.map(item => (
          <a key={item} href={`#${item}`} className="capitalize font-bold text-gray-800 dark:text-gray-200 lg:tracking-wider transition-all duration-200">
            {item}
          </a>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
