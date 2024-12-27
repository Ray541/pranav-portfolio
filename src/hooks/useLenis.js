import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.01,
      smooth: true,
      smoothWheel: true,
      duration: 1.5,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []); // Run once on component mount
};

export default useLenis;
