import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Distance scrolled from top
      const windowHeight = document.documentElement.clientHeight; // Height of the viewport
      const fullHeight = document.documentElement.scrollHeight; // Total scrollable height
      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-primary dark:bg-gradient-to-r dark:from-indigo-300 dark:to-primary z-[1000] transition-all duration-100 ease-in-out"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
