import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Distance scrolled from top
      const windowHeight = document.documentElement.clientHeight; // Height of the viewport
      const fullHeight = document.documentElement.scrollHeight; // Total scrollable height
      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial animation after reload
    const initialScrollTop = window.scrollY;
    const windowHeight = document.documentElement.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const initialProgress = (initialScrollTop / (fullHeight - windowHeight)) * 100;

    let animationFrame;
    const animateProgress = (timestamp, currentProgress = 0) => {
      if (currentProgress < initialProgress) {
        const nextProgress = Math.min(currentProgress + 1, initialProgress);
        setScrollProgress(nextProgress);
        animationFrame = requestAnimationFrame(() => animateProgress(timestamp, nextProgress));
      } else {
        setIsAnimating(false); // Stop animation flag
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(animateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-primary dark:bg-gradient-to-r dark:from-indigo-300 dark:to-primary z-[1000] transition-all ease-in-out ${
        isAnimating ? "transition-none" : ""
      }`}
      style={{
        width: `${scrollProgress}%`,
        transition: isAnimating ? "none" : "width 0.1s ease-in-out",
      }}
    ></div>
  );
};

export default ScrollProgress;
