import React from "react";
import TimerArrow from "../components/TimerArrow";
import "../css/timer.css";
import React, { useState, useEffect } from "react";

function Timer({ duration, label }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [duration]); // Re-run effect if duration changes

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  return (
    <>
      <div className="timer-group">
        <div className="timer">{`${minutes}:${seconds}`}</div>
        <span className="label">{label || "PENDING"}</span>
      </div>
      <TimerArrow />
    </>
  );
}

export default Timer;
