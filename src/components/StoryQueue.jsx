import React from "react";
import Option from "./Option";
const Question = () => {
  return (
    <div>
      <div className="App-question">
        <div className="question-text">
          Eating food is often a personal pleasure and social activity. Some
          people like all types of ....
        </div>
      </div>
      <div className="add">
        <div className="story">ADD TO STORY</div>
        <div className="confirm-btn preview">PREVIEW</div>
      </div>

      <Option/>
    </div>
  );
};

export default Question;
