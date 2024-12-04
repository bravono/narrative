import React, { useEffect } from "react";
import "../../css/Teleprompter.css";

const Teleprompter = ({ story, storyBuild, containerRef }) => {

  useEffect(() => {
    console.log("Telepromter Story", story)
  }, [story]);

  return (
    <div className="teleprompter-container">
      <div ref={containerRef} className="teleprompter-text-container">
        {story}
      </div>
    </div>
  );
};

export default Teleprompter;
