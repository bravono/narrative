import React from "react";
import "../../css/StickyArrow.css";

const StickyArrow = ({ type, className }) => {
  return (
    <div className="sticky-arrow">
      <svg
        className={"multipleChoice"}
        viewBox="0 0 7 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.77002 0.309998H6.50002V15.2484L3.6355 19.31L0.77002 15.2484V0.309998Z"
        />
        <text
          x="0"
          y="9"
          fontSize="2px"
          fontWeight={900}
          fill="black"
          width="1"
          transform="rotate(90, 5, 7)"
          onMouseEnter={(e) => {
            e.target.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0;
          }}
        >
          {`SINGLE
          CHOICE`}
        </text>
      </svg>
    </div>
  );
};

export default StickyArrow;
