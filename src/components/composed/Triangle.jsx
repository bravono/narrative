import React, { useState, useEffect, useRef } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import "../../css/triangle.css";

const Triangle = ({ onHaveChoice, ...props }) => {
  const { heading, choiceList, instruction } = props;
  const svgRef = useRef(null);
  const circleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 150, y: 180 });
  const [userChoice, setUserChoice] = useState("");

  const corners = [
    { x: 150, y: 20 }, // Point 1
    { x: 20, y: 280 }, // Point 2
    { x: 280, y: 280 }, // Point 3
  ];

  // Calculate distance between two points
  const distance = (p1, p2) =>
    Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

  // Check if circle is near a corner
  const checkCornerProximity = (cx, cy) => {
    corners.forEach((corner, index) => {
      if (distance({ x: cx, y: cy }, corner) < 50) {
        const corner = index + 1;
        if (corner) {
          setUserChoice(choiceList[corner - 1]);
        }
      }
    });
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (event) => {
    if (!isDragging || !svgRef.current) return;

    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
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

    if (a >= 0 && b >= 0 && c >= 0) {
      setCirclePosition({ x, y });
      checkCornerProximity(x, y);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    onHaveChoice(userChoice);
    console.log(userChoice);
  }, [userChoice]);

  return (
    <div className="triangle-set">
      <p className="triangle-instruction">{instruction}</p>
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        onMouseMove={handleMouseMove}
        className="triangle-svg"
      >
        {/* Define SVG Filter for Glow Effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          id="triangle"
          className="triangle"
          points="150,20 20,280 280,280"
        ></polygon>
        <circle
          ref={circleRef}
          className={`draggable-circle ${isDragging ? "glow" : ""}`}
          cx={circlePosition.x}
          cy={circlePosition.y}
          r="30"
          onMouseDown={handleMouseDown}
          filter={isDragging ? "url(#glow)" : ""}
        ></circle>
        <text
          className="corner-text"
          x="150"
          y="0"
          transform="rotate(0 140,10)"
          textAnchor="middle"
        >
          {choiceList[0]}
        </text>
        <text
          className="corner-text"
          x="10"
          y="310"
          transform="rotate(0 10,290)"
          textAnchor="middle"
        >
          {choiceList[1]}
        </text>
        <text
          className="corner-text"
          x="290"
          y="310"
          transform="rotate(0 290,290)"
          textAnchor="middle"
        >
          {choiceList[2]}
        </text>
      </svg>
      <AnswerQueueButtons classAddAChoice="disabled" />
    </div>
  );
};

export default Triangle;
