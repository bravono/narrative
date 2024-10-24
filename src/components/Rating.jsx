import React, { useState } from "react";
import RatingControl from "./RatingControl";

function Rating() {
  const [showRatingControl, setShowRatingControl] = useState(false);

  const handleClick = () => {
    setShowRatingControl(!showRatingControl);
  };

  return (
    <div>
      <img onClick={handleClick} src={"/assets/Rating.svg"} />

      {showRatingControl && <RatingControl />}
    </div>
  );
}

export default Rating;
