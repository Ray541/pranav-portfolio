import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { MdArrowUpward } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (isVisible) {
        gsap.to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          pointerEvents: "auto",
        });
      } else {
        gsap.to(buttonRef.current, {
          opacity: 0,
          y: 5,
          duration: 0.5,
          pointerEvents: "none",
        });
      }
    },
    { dependencies: [isVisible] }
  );

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Button
      ref={buttonRef}
      variant="default"
      size="icon"
      className={`opacity-0 pointer-events-none ${className}`}
      onClick={scrollToTop}
      onMouseEnter={() => handleCursorEnter(2)}
      onMouseLeave={handleCursorLeave}
    >
      <MdArrowUpward />
    </Button>
  );
};

export default ScrollToTop;
