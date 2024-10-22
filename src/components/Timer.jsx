import React from "react";
import "../css/timer.css";
import TimerArrow from "./TimerArrow";

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
