import React, { useState, useRef, useEffect } from "react";

const DraggableRingSegment = ({
  className,
  choiceList,
  strokeWidth,
  size,
  colors,
  total,
  isDragging,
  onHandleMouseDown,
  onHandleMouseMove,
  onHandleMouseUp,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const svgRef = useRef(null);

  // Sort data by `value` in descending order
  const sortedData = [...choiceList].sort((a, b) => b.value - a.value);

  // Calculate the starting offset for each segment
  const calculateSegmentData = () => {
    let currentOffset = 0;
    return sortedData.map((segment, index) => {
      const segmentLength =
        (total <= 100 ? segment.value / 100 : segment.value / total) *
        circumference;
      const segmentData = {
        ...segment,
        color: colors[index],
        offset: currentOffset,
        length: segmentLength,
      };
      currentOffset -= segmentLength;
      return segmentData;
    });
  };

  const segmentData = calculateSegmentData();

  const handleMouseDown = (index, event) => {
    // console.log("Index:", index, "Event:", event)
    onHandleMouseDown(index, event); // Call parent's handler
  };

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      transform="rotate(-90, 0, 0)"
      className={className}
      style={{ cursor: isDragging !== null ? "grabbing" : "pointer" }}
    >
      {/* Background circle */}
      <circle
        r="50"
        cx="60"
        cy="60"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
      />
      {/* Render segments */}
      {segmentData.map((segment, index) => (
        <circle
          key={index}
          r={radius}
          cx="60"
          cy="60"
          fill="none"
          stroke={segment.color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${segment.length} ${circumference}`}
          strokeDashoffset={segment.offset}
          onMouseDown={(e) => handleMouseDown(index, e)} // Start dragging
          onMouseMove={onHandleMouseMove}
          onMouseUp={onHandleMouseUp}
          onMouseLeave={onHandleMouseUp} // Stop dragging if the mouse leaves the SVG area
          onTouchStart={onHandleMouseDown}
          onTouchMove={onHandleMouseMove}
          onTouchEnd={onHandleMouseUp}
        />
      ))}
    </svg>
  );
};

export default DraggableRingSegment;
