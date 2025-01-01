import React, { useState, useEffect, useRef } from "react";
import capitalizeWords from "../../utilities/capilizeWords";
import "../../css/triangle.css";

const Triangle = ({ onSetChoiceList, heading, choiceList, instruction }) => {
  const svgRef = useRef(null);
  const circleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 150, y: 180 });
  const [selectedCorner, setSelectedCorner] = useState(0);
  const [selectedBorder, setSelectedBorder] = useState(0);
  const [closeEnough, setCloseEnough] = useState(false);
  const [activeCorner, setActiveCorner] = useState(null); // Track the active glowing corner

  const corners = [
    { x: 150, y: 0 }, // Point 1
    { x: 0, y: 300 }, // Point 2
    { x: 300, y: 300 }, // Point 3
  ];

  const borders = [
    { x: 72, y: 157.5 }, // left 1
    { x: 150, y: 295 }, // bottom 2
    { x: 228, y: 157.5 }, // right 3
  ];

  const threshold = 90;

  // Calculate distance between two points
  const isClose = (circle, point, threshold) => {
    const distance = Math.sqrt(
      Math.pow(point.x - circle.x, 2) + Math.pow(point.y - circle.y, 2)
    );
    return distance <= threshold;
  };

  // Check if circle is near a corner
  const checkCornerProximity = (cx, cy) => {
    let isCloseToAnyCorner = false;
    let isCloseToAnyBorder = false;

    corners.forEach((corner, index) => {
      const isNearby = isClose({ x: cx, y: cy }, corner, threshold);
      if (isNearby) {
        isCloseToAnyCorner = true;
        setSelectedCorner(index + 1);
        onSetChoiceList((prevChoiceList) =>
          prevChoiceList.map((choice, idx) => ({
            ...choice,
            value: index === idx ? 1 : 0, // Set value to 1 if it's the matched corner, otherwise 0
          }))
        );
      }
    });

    borders.forEach((border, index) => {
      const isNearby = isClose({ x: cx, y: cy }, border, 70);
      if (isNearby) {
        isCloseToAnyBorder = true;
        setSelectedBorder(index + 1);
      }
    });

    if (!isCloseToAnyCorner) {
      // If not close to any corner, set all values to 0
      setSelectedCorner(0); // Reset the selected corner
      onSetChoiceList((prevChoiceList) =>
        prevChoiceList.map((choice) => ({ ...choice, value: 0 }))
      );

      if (!isCloseToAnyBorder) {
        setSelectedBorder(0);
      }
    }

    setCloseEnough(isCloseToAnyCorner); // Update closeEnough based on proximity
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (event) => {
    if (!isDragging || !svgRef.current) return;

    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = event.clientX || event.touches[0].clientX;
    point.y = event.clientY || event.touches[0].clientY;
    const svgCoords = point.matrixTransform(svg.getScreenCTM().inverse());

    // Calculate constrained position within the triangle
    let { x, y } = svgCoords;
    const [p1, p2, p3] = corners;
    const denominator =
      (p2.y - p3.y) * (p1.x - p3.x) + (p3.x - p2.x) * (p1.y - p3.y);
    const a =
      ((p2.y - p3.y) * (x - p3.x) + (p3.x - p2.x) * (y - p3.y)) / denominator;
    const b =
      ((p3.y - p1.y) * (x - p3.x) + (p1.x - p3.x) * (y - p3.y)) / denominator;
    const c = 1 - a - b;

    if (a >= 0.13 && b >= 0.13 && c >= 0.13) {
      setCirclePosition({ x, y });
      checkCornerProximity(x, y);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    document.addEventListener("touchend", handleMouseUp);
    return () => document.removeEventListener("touchend", handleMouseUp);
  }, []);

  const polylineAttributes = {
    stroke: "url(#goldGradient)",
    strokeWidth: "15",
    fill: "none",
    filter: "url(#lineGlow)",
  };

  return (
    <div className="triangle-set">
      <p className="triangle-instruction">{heading}</p>
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        className="triangle-svg"
      >
        {/* Define SVG Filter for Glow Effect */}

        <defs>
          <filter id="circleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Define gradient for border effects */}
        <defs>
          <linearGradient id="goldGradient">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="0.3" stopColor="gold" />
            <stop offset="0.7" stopColor="gold" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <polygon
          id="triangle"
          className="triangle"
          points="150,10 0,300 300,300"
        />

        {/* Top corner */}
        <polyline
          points="153,5 95,120"
          {...polylineAttributes}
          display={selectedCorner === 1 ? "block" : "none"}
        />
        <polyline
          points="147,5 205,120"
          {...polylineAttributes}
          display={selectedCorner === 1 ? "block" : "none"}
        />

        {/* Left corner */}
        <polyline
          points="0,300 50,200"
          {...polylineAttributes}
          display={selectedCorner === 2 ? "block" : "none"}
        />
        <polyline
          points="0,295 100,300"
          {...polylineAttributes}
          display={selectedCorner === 2 ? "block" : "none"}
        />

        {/* Right corner */}
        <polyline
          points="300,300 250,200"
          {...polylineAttributes}
          display={selectedCorner === 3 ? "block" : "none"}
        />
        <polyline
          points="300,300 200,295"
          {...polylineAttributes}
          display={selectedCorner === 3 ? "block" : "none"}
        />

        {/* Left border */}
        <polyline
          points="140,30 10,280"
          {...polylineAttributes}
          display={selectedBorder === 1 ? "block" : "none"}
        />
        {/* Bottom border */}
        <polyline
          points="30,290 270,295"
          {...polylineAttributes}
          display={selectedBorder === 2 ? "block" : "none"}
        />
        {/* Right border */}
        <polyline
          points="160,30 290,280"
          {...polylineAttributes}
          display={selectedBorder === 3 ? "block" : "none"}
        />
        <circle
          ref={circleRef}
          className={`draggable-circle ${
            isDragging || closeEnough ? "glow" : ""
          }`}
          cx={circlePosition.x}
          cy={circlePosition.y}
          r="30"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          filter={isDragging ? "url(#circleGlow)" : ""}
        ></circle>
        <text
          className={
            choiceList[0].value > 0
              ? "corner-text animate__animated animate__flash"
              : "corner-text"
          }
          x="150"
          y="-20"
          transform="rotate(0 140,10)"
          textAnchor="middle"
          fill={choiceList[0].value > 0 ? "gold" : ""}
        >
          {capitalizeWords(choiceList[0].text)}
        </text>
        <text
          className={
            choiceList[1].value > 0
              ? "corner-text animate__animated animate__flash"
              : "corner-text"
          }
          x="10"
          y="340"
          transform="rotate(0 10,290)"
          textAnchor="middle"
          fill={choiceList[1].value > 0 ? "gold" : ""}
        >
          {capitalizeWords(choiceList[1].text)}
        </text>
        <text
          className={
            choiceList[2].value > 0
              ? "corner-text animate__animated animate__flash"
              : "corner-text"
          }
          x="290"
          y="340"
          transform="rotate(0 290,290)"
          textAnchor="middle"
          fill={choiceList[2].value > 0 ? "gold" : ""}
        >
          {capitalizeWords(choiceList[2].text)}
        </text>
      </svg>
    </div>
  );
};

export default Triangle;
