import React, { useState } from "react";
import RankControl from "./RankControl";
import "../../css/rank.css";

function Rank() {
  // const [showRankControl, setShowRankControl] = useState(false);

  const handleClick = () => {
    // setShowRankControl(!showRankControl);
  };

  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 62 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10.25"
        y="0.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <rect
        x="8.25"
        y="2.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <rect
        x="6.25"
        y="4.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <rect
        x="4.25"
        y="6.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <rect
        x="2.25"
        y="8.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <rect
        x="0.25"
        y="10.25"
        width="51.5"
        height="86.5"
        rx="4.75"
        fill="#44CEEC"
        stroke="black"
        strokeWidth="0.5"
      />
      <text
        x="40%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="black"
        fontSize="70"
        fontWeight="100"
      >
        ?
      </text>
    </svg>
  );
}

export default Rank;
