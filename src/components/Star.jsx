import React, { useState } from "react";
import StarControl from "./StarControl";

function Star() {
  const [showStarControl, setShowStarControl] = useState(false);

  const handleClick = () => {
    setShowStarControl(!showStarControl);
  };

  return (
    <div>
      <img onClick={handleClick} src={"/assets/Rating.svg"} />

      {showStarControl && <StarControl />}
    </div>
  );
}

export default Star;
