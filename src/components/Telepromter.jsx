import "../css/Teleprompter.css";

import React, { useState, useEffect } from "react";

function Teleprompter({
  text,
  speed = 2,
  //   fontSize = "20px",
  //   backgroundColor = "white",
  //   textColor = "black",
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (text.length === 0) {
      return; // No text to scroll
    }

    const intervalId = setInterval(() => {
      if (!isPaused) {
        setScrollPosition((prevScrollPosition) => {
          const newScrollPosition = prevScrollPosition + speed;
          if (newScrollPosition > text.length) {
            return 0;
          }
          return newScrollPosition;
        });
      }
    }, 1000 / speed);

    return () => clearInterval(intervalId);
  }, [speed, isPaused, text]);

  return (
    <div className="teleprompter">
      <div
        className="teleprompter-text"
        style={{ transform: "translateY(-${scrollPosition}px)" }}
      >
        {text}
      </div>
      {/* <div className="scrollbar"></div> */}
    </div>
  );
}

export default Teleprompter;
