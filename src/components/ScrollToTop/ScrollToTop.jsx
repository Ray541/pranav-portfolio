import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
//
import { FiCornerLeftUp } from "react-icons/fi";

const ScrollToTop = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      className="min-w-fit fixed bottom-12 right-2 z-50"
    >
      <button
        onClick={scrollToTop}
        className={`p-2 rounded-full bg-gray-400/10 dark:bg-gray-200/20 border-gray-700/50 hover:bg-primary dark:hover:bg-primary text-gray-800 hover:text-gray-200 dark:text-gray-200 backdrop-blur-sm border drop-shadow-lg transition-all duration-300 cursor-none ${
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <span className="text-md">
          <FiCornerLeftUp />
        </span>
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
