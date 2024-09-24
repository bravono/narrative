import React, { createContext, useContext, useState, useEffect } from "react";

const TimerArrowContext = createContext();

export const useTimerArrowContext = () => useContext(TimerArrowContext);

export const TimerArrowProvider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState("/assets/Timer_Arrow.svg");
  const [altText, setAltText] = useState("Timer_Arrow");

//   useEffect(() => {}, []);

  return (
    <TimerArrowContext.Provider value={{ imageSrc, altText }}>
      {children}
    </TimerArrowContext.Provider>
  );
};
