import React from "react";
import "../css/storyQueue.css";

const StoryQueue = ({children}) => {
  return (
    <div className="story-queue">
      {children}
      {/* <p>
        Eating food is often a personal pleasure and social activity. Some
        people like all types of ....
      </p> */}
    </div>
  );
};

export default StoryQueue;
