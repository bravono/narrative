import React, { useRef, useState} from "react";

const RingDraggable = ({
  widgetOutAnimation,
  widgetInAnimationRight,
  size,
  radius,
  strokeWidth,
  segmentValue,
  isValidTotal,
  total,
  color,
  circumference,
  offset,
  activeRow,
  onSetSegmentValue
  
}) => {
  const circleRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
  
    const [activeRowIndex, setActiveRowIndex] = useState();
  

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

    onSetSegmentValue(Math.max(0, Math.min(100, newSegmentValue))); // Clamp between 0 and 100
  };

  // Mouse/touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    updateSegmentValue(clientX, clientY);

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

  const handleMouseMove = (e) => {
    if (isDragging) {
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      updateSegmentValue(clientX, clientY);

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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <svg
        width={size}
        height={size}
        ref={circleRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the SVG area
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className={`ring-svg ${
          widgetOutAnimation ? widgetOutAnimation : widgetInAnimationRight
        }`}
      >
        {/* Background Circle */}
        {true ? (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            style={{ pointerEvents: "none" }}
          />
        ) : (
          ""
        )}
        {/* SegmentValue Circle */}
        {true ? (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={activeRowIndex != null ? colors[activeRowIndex] : color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start at 12 o'clock
            style={{ cursor: "pointer", pointerEvents: "stroke" }}
          />
        ) : (
          ""
        )}
        {/* Text Label */}

        <text
          x="50%"
          y="34%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="ring-number"
        >
          {`${Math.round(segmentValue)}`}
        </text>
        {/* Decrement Triangle (below text) */}
        <text
          x="50%"
          y="53%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="ring-label"
        >
          {"TALLY"}
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={isValidTotal ? "highlight ring-number" : "ring-number"}
        >
          {total}
        </text>
        <text
          x="50%"
          y="75%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={isValidTotal ? "highlight ring-label" : "ring-label"}
        >
          {"TOTAL"}
        </text>
      </svg>
    </>
  );
};

export default RingDraggable;
