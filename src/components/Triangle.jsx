import React from "react";
import "../css/triangle.css";

const Triangle = () => {
  return (
    <div className="triangle_container">
      <img
        className="triangle_circle"
        src="/assets/Triangle_circle.svg"
        draggable={true}
        onDragStart={(e) => console.log("onDragStart")}
        onDragEnd={(e) => console.log("onDragEnd")}
      />
      <div className="drop drop-1"></div>
      <div className="drop drop-2"></div>
      <div className="drop drop-3"></div>
    </div>
  );
};

export default Triangle;
