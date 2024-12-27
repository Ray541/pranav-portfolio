import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const updateMousePosition = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setCurrentPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2, // Adjustable Shooth Effect
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePosition);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div
      className={`hidden lg:block fixed w-[12px] h-[12px] rounded-full bg-gray-200/10 dark:bg-gray-200/10 border border-gray-500 dark:border-gray-200 backdrop-blur-[1.5px] pointer-events-none z-[999]`}
      style={{
        top: `${currentPosition.y}px`,
        left: `${currentPosition.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CursorFollower;
