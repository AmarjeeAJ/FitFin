import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
    className="fixed top-0 left-0 w-14 h-14 bg-black border-4 border-purple-600 
               rounded-full opacity-50 pointer-events-none 
               shadow-[0_0_20px_10px_rgba(128,0,128,0.6)] 
               transition-transform duration-75 ease-out z-[9999]"
    style={{
      transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
    }}
  />
  
  );
};

export default Cursor;