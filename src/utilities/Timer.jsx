import React from "react";
import TimerArrow from "../components/TimerArrow";
import "../css/timer.css";

function Timer({ label, duration, arrowColor, isPaused, }) {
  // console.log("Initional duration", timeLeft);

  const minutes = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (duration % 60).toString().padStart(2, "0");
  return (
    <>
      <div className="timer-group">
        <div className="timer">{`${minutes}:${seconds}`}</div>
        <span className="label">{label}</span>
      </div>
      <TimerArrow arrowColor={arrowColor} />
    </>
  );
}

export default Timer;
