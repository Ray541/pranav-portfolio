/**
 * CursorFollower Component:
 *
 * This component is designed to handle custom cursor styles based on the `data-cursor` attribute on HTML elements. The `data-cursor` attribute should contain a JSON object with the following structure:
 *
 * Object Structure:
 * {
 *   type: "cursor_type",      // Type of cursor ("default", "hover", "onText", "draggable", etc.)
 *   width: "px_value",
 *   height: "px_value",
 *   className: "tailwind_classes"
 * }
 *
 * Example:
 * <div data-cursor='{"type": "hover", "width": "40px", "height": "40px", "className": "bg-blue-500"}'>
 *   Hover over me
 * </div>
 *
 * The component will read this data and apply the cursor styles dynamically
 */

import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({
    type: "default",
    width: "12px",
    height: "12px",
    className: "bg-gray-200/10 border-gray-500", // Default class
  });

  useEffect(() => {
    let animationFrameId;

    const updateMousePosition = e => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check for `data-cursor` on the hovered element or its closest parent
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const cursorData = JSON.parse(target.getAttribute("data-cursor"));
        setCursorStyle({
          type: cursorData.type || "default",
          width: cursorData.width || "12px",
          height: cursorData.height || "12px",
          className: cursorData.className || "bg-gray-200/10 border-gray-500",
        });
      } else {
        // Reset to default if no `data-cursor` is found
        setCursorStyle({
          type: "default",
          width: "12px",
          height: "12px",
          className: "bg-gray-200/10 border-gray-500",
        });
      }
    };

    const animate = () => {
      setCurrentPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.5, // Smooth transition effect
        y: prev.y + (position.y - prev.y) * 0.5,
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
      className={`hidden lg:block fixed rounded-full z-[999] border border-gray-500 dark:border-gray-200 backdrop-blur-[1.5px] pointer-events-none ${cursorStyle.className}`}
      style={{
        top: `${currentPosition.y}px`,
        left: `${currentPosition.x}px`,
        transform: "translate(-50%, -50%)",
        width: cursorStyle.width,
        height: cursorStyle.height,
      }}
    ></div>
  );
};

export default CursorFollower;
