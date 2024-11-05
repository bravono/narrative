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
import "../css/Rank.css";

function Rank() {
  // const [showRankControl, setShowRankControl] = useState(false);

  const handleClick = () => {
    // setShowRankControl(!showRankControl);
  };

  return (
    <div>
      {/* <img src={"/assets/Rank.svg"} /> */}
      <div className="rank-stack" onClick={handleClick}>
        <div className="rank">?</div>
        <div className="rank">?</div>
        <div className="rank">?</div>
        <div className="rank">?</div>
        <div className="rank">?</div>
      </div>

      {/* {showRankControl && <RankControl />} */}
    </div>
  );
}

export default Rank;
