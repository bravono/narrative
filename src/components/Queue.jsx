import React, { useState, useRef, useEffect } from "react";
import "../css/Queue.css";

const Queue = ({ handleAddToStory, className, children }) => {
  const [count, setCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);
  const draggable = className.split(" ").includes("answer");

  // Handle drag on desktop
  const handleMouseDown = (e) => {
    if (draggable) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (draggable) {
      if (!isDragging) return;
      e.preventDefault();
      setCount((prev) => {
        return prev + 1;
      });
    }
  };

  const handleMouseUp = (e) => {
    if (draggable) {
      setIsDragging(false);
      
      if (count > 2) {
        handleAddToStory();
      }
      setCount(0);
    }
  };

  // Handle drag on mobile
  const handleTouchStart = (e) => {
    if (draggable) {
      setIsDragging(true);
    }
  };
  const handleTouchMove = (e) => {
    if (draggable) {
      if (!isDragging) return;
      setCount((prev) => {
        return prev + 1;
      });
    }
  };
  const handleTouchEnd = (e) => {
    if (draggable) {
      setIsDragging(false);
      
      if (count > 2) {
        handleAddToStory();
      }
      setCount(0);
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      className={className}
    >
      {children}
    </div>
  );
};

export default Queue;
