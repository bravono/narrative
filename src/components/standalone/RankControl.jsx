import React, { useState } from "react";

function RankControl() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    if (number < 6) {
      setNumber(number + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div className="rank-container">
        <span className="rank-card">{number}</span>
      </div>
      <div className="rank-button-container">
        <button className="rank-button" onClick={handleDecrement}>
          -
        </button>
        <button className="rank-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </>
  );
}

export default RankControl;
