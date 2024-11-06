import React from "react";
import "../../css/teleprompter.css";

const Teleprompter = ({ textLines, containerRef }) => {
  return (
    <div className="teleprompter-container">
      <div ref={containerRef} className="teleprompter-text-container">
        {textLines}
      </div>
    </div>
  );
};

export default Teleprompter;
