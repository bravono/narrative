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
      <svg
        viewBox="0 0 7 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, fill: color }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.77002 0.309998H6.50002V15.2484L3.6355 19.31L0.77002 15.2484V0.309998Z"
        />
      </svg>

      <label className="hover" style={{ fontSize: labelSize }}>
        {label}
      </label>
    </div>
  );
};

export default StickyArrow;
