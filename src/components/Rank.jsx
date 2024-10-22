// const Rank = () => {
//   return (
//     <>
//       <img src={"/assets/Rank.svg"} />
//     </>
//   );
// };

// export default Rank;

import React, { useState } from "react";
import RankControl from "./RankControl";

function Rank() {
  const [showRankControl, setShowRankControl] = useState(false);

  const handleClick = () => {
    setShowRankControl(!showRankControl);
  };

  return (
    <div>
      <img onClick={handleClick} src={"/assets/Rank.svg"} />

      {showRankControl && <RankControl />}
    </div>
  );
}

export default Rank;
