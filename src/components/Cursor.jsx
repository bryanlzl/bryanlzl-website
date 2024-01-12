import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="w-6 h-6 bg-custom-cursor bg-opacity-50 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none cursor-none z-20 hidden sm:block"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="w-1 h-1 bg-white rounded-full absolute inset-[8.25px]"></div>{" "}
    </div>
  );
};

export default CustomCursor;
