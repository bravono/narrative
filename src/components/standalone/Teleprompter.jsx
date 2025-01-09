import React, { useState, useEffect } from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, storyBuild, containerRef, children }) => {
  return (
    <div className="teleprompter-container">
      <div
        ref={containerRef}
        className={
          storyBuild
            ? "teleprompter-text-container"
            : "teleprompter-text-container-welcome" // Change teleprompter styling for welcome screen
        }
      >
        { <div dangerouslySetInnerHTML={{ __html: storyBuild }} />}
      </div>
      {children}
    </div>
  );
};

export default Teleprompter;
