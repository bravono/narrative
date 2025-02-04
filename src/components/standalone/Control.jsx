import React from "react";
import "../../css/control.css";

function Control({ onIncrement, onDecrement }) {
  return (
    <>
      <div className="control-container">

        <div className="control-buttons">
          <button className="control-button" onClick={onIncrement}>
            +
          </button>
          <button className="control-button" onClick={onDecrement}>
            --
          </button>
        </div>
      </div>
    </>
  );
}

export default Control;
