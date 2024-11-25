import React, { useState, useRef, useEffect } from "react";
import "../css/Queue.css";

const Queue = ({ className, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);
  const draggable = className.split(" ").includes("answer");

 
  const handleMouseDown = (e) => {
    if (draggable) {
      setIsDragging(true);
    }
  };
  
  const handleMouseMove = (e) => {
    if (draggable) {
      if (!isDragging) return;
      
      e.preventDefault();
    }
  };
  
  const handleTouch = (e) => {
    if (draggable) {
      setIsDragging(true);
    }
  };
  const handleMove = (e) => {
    if (draggable) {
      if (!isDragging) return;
      
      e.preventDefault();
    }
  };
  const handleEnd = (e) => {
    if (draggable) {
      setIsDragging(false);
      console.log("Drag ended");
    }
  };
  const handleMouseUp = (e) => {
    if (draggable) {
      setIsDragging(false);
      console.log("Drag ended");
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchTouch={handleTouch}
      onTouchEnd={handleEnd}
      onTouchMove={handleMove}
      className={className}
    >
      {children}
    </div>
  );
};

export default Queue;
