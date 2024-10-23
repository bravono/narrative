import React from "react";
import "../css/scrollArrow.css";
const ScrollArrow = ({ onClick }) => {
  return (
    <div className="scroll_arrow-group">
      <img
        src="/assets/Arrow Up.svg"
        className="scroll_arrow-up"
        onClick={onClick}
      />
      <img
        src="/assets/Arrow Up.svg"
        className="scroll_arrow-down"
        onClick={onClick}
      />
    </div>
  );
};

export default ScrollArrow;
