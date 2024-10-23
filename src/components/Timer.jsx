import React from "react";
import TimerArrow from "./TimerArrow";
import "../css/timer.css";

function Timer({ duration, label }) {
  return (
    <>
      <div className="timer-group">
        <div className="timer">{duration || "00:00"}</div>
        <span className="label">{label || "PENDING"}</span>
      </div>
      <TimerArrow />
    </>
  );
}

export default Timer;
