import { useEffect, useState } from "react";

/**Custom Cursor Component
 * @returns custom cursor with different animation types
 */
const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({ type: "default", width: 3, height: 3 });

  useEffect(() => {
    let animationFrameId;

    const updateMousePosition = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setCurrentPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.5,
        y: prev.y + (position.y - prev.y) * 0.5,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = e => {
      const cursorData = e.target.getAttribute("data-cursor");
      if (cursorData) {
        try {
          const parsedData = JSON.parse(cursorData); // Parse JSON string
          setCursorStyle({
            type: parsedData.type || "default",
            width: parsedData.width || 3,
            height: parsedData.height || 3,
          });
        } catch {
          console.error(
            "Invalid data-cursor format. Correct JSON Format: {type: 'cursor-type', width: number, height: number}"
          );
          console.warn("Current available cursor types: ['hover', 'onText']");
          console.warn("Pass the objects like this in the data-cursor tag: JSON.stringify()");
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorStyle({ type: "default", width: 3, height: 3 });
    };

    const hoverElements = document.querySelectorAll("[data-cursor]");
    hoverElements.forEach(element => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      hoverElements.forEach(element => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  const getCursorClass = () => {
    const baseClass = `rounded-full pointer-events-none transition-transform duration-300`;
    const sizeClass = `w-${cursorStyle.width} h-${cursorStyle.height}`;
    const colorClass = (() => {
      switch (cursorStyle.type) {
        case "hover":
          return "border-gray-300";
        case "onText":
          return "border-gray-300";
        default:
          return "bg-gray-200/10 dark:bg-gray-200/10";
      }
    })();

    return `${baseClass} ${sizeClass} ${colorClass}`;
  };

  return (
    <div
      className={`hidden lg:block fixed z-[999] backdrop-blur-[1.5px] border border-gray-500 dark:border-gray-200 ${getCursorClass()}`}
      style={{
        top: `${currentPosition.y}px`,
        left: `${currentPosition.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CursorFollower;
