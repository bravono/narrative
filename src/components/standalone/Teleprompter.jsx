import React from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, containerRef, children }) => {
  return (
    <div className="teleprompter-container">
      <div
        ref={containerRef}
        className={
          story
            ? "teleprompter-text-container"
            : "teleprompter-text-container-welcome" // Change teleprompter styling for welcome screen
        }
      >
        { <div dangerouslySetInnerHTML={{ __html: story }} />}
      </div>
      {children}
    </div>
  );
};

export default Teleprompter;
