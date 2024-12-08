import React, { useState, useRef, useEffect } from "react";
import "../css/Queue.css";

const Queue = ({className,  widget, handleAddToStory,  children }) => {
  const [count, setCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);
  const draggable = className.split(" ").includes("answer");
  const allowSwipeToAdd = count > 2 && widget !== "ring"


  // Handle swipe to add to story
  const handleTouchORMouseDown = (e) => {
    if (draggable) {
      setIsDragging(true);
    }
  };

  const handleTouchOrMouseMove = (e) => {
    if (draggable) {
      if (!isDragging) return;
      // e.preventDefault();
      setCount((prev) => {
        return prev + 1;
      });
    }
  }; // Adjust the delay as needed

  const handleTouchOrMouseUp = (e) => {
    if (draggable) {
      setIsDragging(false);

      if (allowSwipeToAdd) {
        handleAddToStory();
      }
      setCount(0);
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseDown={handleTouchORMouseDown}
      onMouseUp={handleTouchOrMouseUp}
      onMouseMove={handleTouchOrMouseMove}
      onTouchStart={handleTouchORMouseDown}
      onTouchEnd={handleTouchOrMouseUp}
      onTouchMove={handleTouchOrMouseMove}
    >
      {children}
    </div>
  );
};

export default Queue;
