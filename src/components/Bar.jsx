import React, { useState, useRef } from "react";
import LoveScroll from "./LoveScroll";

function Bar() {
  const [value, setValue] = useState(0);
  const barRef = useRef(null);
  const backgroundRef = useRef(null);
  const valueRef = useRef(null);

  const handleButtonClick = (event) => {
    const newValue = event.target.id === "decrease" ? value - 10 : value + 10;
    setValue(Math.max(0, Math.min(100, newValue)));
    updateBackgroundColor();
  };

  const handleMouseDown = () => {
    backgroundRef.current.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    backgroundRef.current.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const barWidth = barRef.current.offsetWidth;
    const mouseX = event.clientX - barRef.current.offsetLeft;
    const newWidthPercentage = (mouseX / barWidth) * 100;
    setValue(Math.round(newWidthPercentage));
    updateBackgroundColor();
  };

  const updateBackgroundColor = () => {
    const widthPercentage = (value / 100) * barRef.current.offsetWidth;
    backgroundRef.current.style.width = widthPercentage + "px";
    valueRef.current.textContent = value + "%";
  };

  return (
    <>
      <div className="bar-container">
        <div className="bar-btn">
          <button id="decrease" onClick={handleButtonClick}>
            <LoveScroll id="decrease" />
          </button>
          {value}%
          <button id="increase" onClick={handleButtonClick}>
            <LoveScroll />
          </button>
        </div>

        <div
          ref={barRef}
          className="interactive-bar"
          onMouseDown={handleMouseDown}
        >
          <div ref={backgroundRef} className="background"></div>
        </div>
      </div>
    </>
  );
}

export default Bar;
