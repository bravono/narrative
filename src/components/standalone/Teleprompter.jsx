import React, { useState, useEffect } from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, storyBuild, containerRef }) => {

  // Continue From Setting Story Build
  return (
    <div className="teleprompter-container">
      <div ref={containerRef} className="teleprompter-text-container">
        {storyBuild
          ? storyBuild 
          : `Welcome.
                This is a narrative survey
                method and your story will
                appear here`}
      </div>
    </div>
  );
};

export default Teleprompter;
