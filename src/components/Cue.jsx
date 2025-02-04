import React from "react";
import "../css/Queue.css";

const Cue = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Cue;
