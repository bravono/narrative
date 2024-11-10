import React, { useState } from "react";

// import RatingControl from "./RatingControl";

function Rate() {
  // const [showRatingControl, setShowRatingControl] = useState(false);

  const handleClick = () => {
    // setShowRatingControl(!showRatingControl);
  };

  return (
    <div>
      <svg width="40" height="40" viewBox="0 0 100 100" onClick={handleClick}>
        <polygon
          points="50,5 68.3,33.3 95,33.3 73.3,56.6 81.6,90 50,73.3 18.4,90 26.7,56.6 5,33.3 31.7,33.3"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        <text x="50" y="70" textAnchor="middle" fill="#000" fontSize="50">
          ?
        </text>
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="transparent"
          stroke="#000"
          strokeWidth="2"
        ></circle>
      </svg>

      {/* {showRatingControl && <RatingControl />} */}
    </div>
  );
}

export default Rate;
