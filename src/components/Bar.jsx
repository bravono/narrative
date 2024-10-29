import React, { useState, useRef } from "react";
import "../css/bar.css";

const Bar = () => {
  const [progress, setProgress] = useState(0); // Initial progress (in %)
  const progressBarRef = useRef(null);
  const isDragging = useRef(false);

  // Handle mouse down on the handle
  const handleMouseDown = (event) => {
    isDragging.current = true;
    updateProgress(event);
  };

  // Handle mouse move when dragging
  const handleMouseMove = (event) => {
    if (isDragging.current) {
      updateProgress(event);
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Calculate and set progress based on mouse position
  const updateProgress = (event) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const newProgress = ((event.clientX - rect.left) / rect.width) * 100;
      setProgress(Math.max(0, Math.min(newProgress, 100))); // Keep progress between 0 and 100
    }
  };

  return (
    <div
      className="progress-bar-container"
      ref={progressBarRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Ensures drag stops if mouse leaves the bar
    >
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <div
          className="progress-handle"
          style={{ left: `${progress}%` }}
          onMouseDown={handleMouseDown}
        />
      </div>
      <div className="progress-label">{Math.round(progress)}%</div>
    </div>
  );
};

export default Bar;
