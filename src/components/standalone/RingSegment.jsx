import React, { useEffect } from "react";

const RingSegment = ({ choiceList, strokeWidth, size, colors, className }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Add the color property
    choiceList.map((choice, index) => {
      choice.color = colors[index];
    })

  // Sort data by `value` in descending order
  const sortedData = [...choiceList].sort((a, b) => b.value - a.value);

  let currentOffset = 0; // Start from 12 o'clock position

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      transform="rotate(-90, 0, 0)"
      className={className}
    >
      <circle
        r="50"
        cx="60"
        cy="60"
        fill="none"
        stroke="#e6e6e6" /* Background color */
        strokeWidth={strokeWidth}
      />
      {sortedData.map((item, index) => {
        const segmentLength = (item.value / 100) * circumference; // Segment proportional to percentage
        const circleElement = (
          <circle
            key={index}
            r={radius}
            cx="60"
            cy="60"
            fill="none"
            stroke={item.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${segmentLength} ${circumference}`}
            strokeDashoffset={currentOffset}
          />
        );
        currentOffset -= segmentLength; // Update offset for the next segment
        return circleElement;
      })}
    </svg>
  );
};

export default RingSegment;
