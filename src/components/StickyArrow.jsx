import React from "react";

const StickyArrow = ({ types, label }) => {
  const imageSizes = {
    small: "15px",
    large: "30px",
  };

  const size = imageSizes[types] || "100px"; // Default to small if types is invalid

  return (
    <div className="stickyArrow-container">
      <img
        src={"/assets/BlueStickyArrow.png"}
        alt={label}
        style={{ width: size }}
      />
      <label className="hover">{label}</label>
    </div>
  );
};

export default StickyArrow;
