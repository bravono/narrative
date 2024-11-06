import React from "react";
import "../../css/teleprompter.css";

const Teleprompter = ({ textLines, containerRef }) => {
  return (
    <div className="teleprompter-container">
      <div ref={containerRef} className="teleprompter-text-container">
        {textLines.map((text, index) => (
          <div key={index} className="text-line">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teleprompter;
