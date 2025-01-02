import React, { useState, useEffect } from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, storyBuild, containerRef }) => {
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
        {storyBuild
          ? <div dangerouslySetInnerHTML={{ __html: storyBuild }} />

          : `Welcome to the opportunity to
            compare taking the same survey 
            using a traditional 
            and a narrative sentence 
            with a blank/list method.`}
      </div>
    </div>
  );
};

export default Teleprompter;
