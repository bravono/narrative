import React, { useState, useRef } from "react";

const Ring = ({
  size = 120,
  initialSegmentValue = 0,
  strokeWidth = 15,
  color = "#4caf50", //Use dynamic call here
}) => {
  const [segmentValue, setSegmentValue] = useState(initialSegmentValue);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Function to calculate SegmentValue based on angle
  const updateSegmentValue = (clientX, clientY) => {
    const { x, y, width, height } = circleRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const angle = Math.atan2(dy, dx) + Math.PI / 2;

    // Calculate SegmentValue from angle
    const angleDeg = (angle * 180) / Math.PI;
    const newSegmentValue = ((angleDeg + 360) % 360) / 3.6; // Convert to percentage

    setSegmentValue(Math.max(0, Math.min(100, newSegmentValue))); // Clamp between 0 and 100
  };

  // Mouse/touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSegmentValue(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSegmentValue(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mobile support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSegmentValue(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSegmentValue(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const incrementSegmentValue = () => {
    setSegmentValue(segmentValue + 1);
  };

  const decrementSegmentValue = () => {
    setSegmentValue(segmentValue - 1);
  };

  const offset = circumference - (segmentValue / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      ref={circleRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the SVG area
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ pointerEvents: "stroke", userSelect: "none" }}
    >
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        style={{ pointerEvents: "none" }}
      />
      {/* SegmentValue Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start at 12 o'clock
        style={{ cursor: "pointer", pointerEvents: "stroke" }}
      />
      {/* Text Label */}

      <polygon
        points={`${size / 2},${size * 0.2} ${size * 0.45},${size * 0.28} ${
          size * 0.55
        },${size * 0.28}`}
        onClick={incrementSegmentValue}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      />

      {/* Text Label */}
      <text
        x="50%"
        y="34%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="10px"
        fontWeight={900}
        style={{ pointerEvents: "none" }}
      >
        {`${Math.round(segmentValue)}%`}
      </text>

      {/* Decrement Triangle (below text) */}
      <polygon
        points={`${size / 2},${size * 0.8} ${size * 0.45},${size * 0.72} ${
          size * 0.55
        },${size * 0.72}`}
        onClick={decrementSegmentValue}
        style={{
          cursor: "pointer",
          pointerEvents: "auto",
        }}
        transform={`translate(0, -40)`}
      />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="10px"
        fontWeight={900}
        style={{ pointerEvents: "none" }}
      >
        {"Tally"}
      </text>
      <text
        x="50%"
        y="65%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="10px"
        fontWeight={900}
        style={{ pointerEvents: "none" }}
      >
        {0}
      </text>
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="10px"
        fontWeight={900}
        style={{ pointerEvents: "none" }}
      >
        {"Total"}
      </text>
    </svg>
  );
};

export default Ring;
