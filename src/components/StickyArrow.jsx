import React from "react";
import "../css/StickyArrow.css";

const StickyArrow = ({ types, label, color }) => {
  const imageSizes = {
    small: "15px",
    large: "25px",
  };

  const size = imageSizes[types] || "100px"; // Default to small if types is invalid
  const labelSize = size === "15px" ? "6px" : "11px";

  return (
    <div className="stickyArrow-container">
      <img
        src={"/assets/StickyArrow.svg"}
        alt={label}
        style={{ width: size, fill: color }}
        className="sticky-image"
      />
      <label className="hover" style={{ fontSize: labelSize }}>
        {label}
      </label>
    </div>
  );
};

export default StickyArrow;
