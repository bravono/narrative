import React, { useState, useEffect } from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, storyBuild, containerRef }) => {
  // Continue From Setting Story Build
  return (
    <div className="teleprompter-container">
      <div
        ref={containerRef}
        className={
          storyBuild
            ? "teleprompter-text-container"
            : "teleprompter-text-container-welcome"
        }
      >
        {storyBuild
          ? storyBuild
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
