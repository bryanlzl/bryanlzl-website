import React, { useState, useEffect } from "react";

const BouncingSquare = ({ boundingBoxId }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ dx: 1, dy: 1 });

  useEffect(() => {
    const boundingBox = document.getElementById(boundingBoxId);

    if (!boundingBox) {
      return; // Element not found, do nothing
    }

    const updatePosition = () => {
      const newX = position.x + velocity.dx;
      const newY = position.y + velocity.dy;

      // Calculate the boundaries of the bounding box
      const maxX = boundingBox.clientWidth - 50;
      const maxY = boundingBox.clientHeight - 50;

      // Reverse direction and adjust position when hitting the boundaries
      if (newX <= 0 || newX >= maxX) {
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dx: -prevVelocity.dx,
        }));
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: newX <= 0 ? 0 : maxX,
        }));
      }
      if (newY <= 0 || newY >= maxY) {
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          dy: -prevVelocity.dy,
        }));
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: newY <= 0 ? 0 : maxY,
        }));
      } else {
        setPosition({ x: newX, y: newY });
      }
    };

    const animationId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationId);
  }, [position, velocity, boundingBoxId]);

  return (
    <div
      className="absolute z-5"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <div className="w-16 h-16 bg-blue-300 rounded-full opacity-50"></div>
    </div>
  );
};

export default BouncingSquare;
