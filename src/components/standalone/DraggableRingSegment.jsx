import React, { useState, useRef, useEffect } from "react";
import { updateChoiceList } from "../../utilities/choiceListUpdater";

const DraggableRingSegment = ({
  className,
  choiceList,
  strokeWidth,
  size,
  colors,
  total,
  activeRow,
  onSetChoiceList,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [segmentValue, setSegmentValue] = useState(0);

  const [isDragging, setIsDragging] = useState(null); // Track which segment is being dragged
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

  useEffect(() => {
    // console.log("Segment Index", isDragging);
    console.log("Segment Value", segmentValue);
  }, [isDragging]);

  // Convert mouse position to an angle relative to the center of the circle
  const calculateAngle = (clientX, clientY) => {
    const { x, y, width, height } = svgRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees

    // // Calculate SegmentValue from angle
    // const angleDeg = (angle * 180) / Math.PI;
    // const newSegmentValue = ((angleDeg + 360) % 360) / 3.6; // Convert to percentage

    // setSegmentValue(Math.max(0, Math.min(100, newSegmentValue))); // Clamp between 0 and 100

    return (angle + 360) % 360; // Normalize the angle to 0-360 degrees
  };

  // Handle drag start both cobile and PC
  const handleMouseDown = (index, e) => {
    if (index) {
      setIsDragging(index);
    }

      console.log("Event Object", e);
      
    calculateAngle(
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY
    );

    if (activeRow) {
      onSetChoiceList((prevChoiceList) => {
        const updatedChoiceList = updateChoiceList(
          prevChoiceList,
          activeRow,
          segmentValue
        );
        return updatedChoiceList;
      });
    }
  };

  // Handle drag move both mobile and PC
  const handleMouseMove = (e) => {
    if (isDragging !== null) {
      const angle = calculateAngle(
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientX
      );
      const totalValue = choiceList.reduce((sum, seg) => sum + seg.value, 0);
      const delta = (angle / 360) * total;

    //   if (isDragging) {
    //     // Update the dragged segment's value
    //     choiceList[isDragging].value = Math.max(
    //       0,
    //       Math.min(choiceList[isDragging].value + delta, total - totalValue)
    //     );
    //   }

      if (activeRow) {
        onSetChoiceList((prevChoiceList) => {
          const updatedChoiceList = updateChoiceList(
            prevChoiceList,
            activeRow,
            segmentValue
          );
          return updatedChoiceList;
        });
      }
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(null);
  };

  // Attach global event listeners for dragging
  React.useEffect(() => {
    if (isDragging !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

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
        stroke="black"
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
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the SVG area
          onTouchStart={(e) => handleMouseDown(index, e)}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        />
      ))}
    </svg>
  );
};

export default DraggableRingSegment;
