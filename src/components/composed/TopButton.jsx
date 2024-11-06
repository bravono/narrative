import React from "react";
import Button from "../Button";
import "../css/TopButton.css";

export default function TopButton({ classNameA, classNameB }) {
  return (
    <div className="top_button-group">
      <Button label="START" className={`${classNameA} top_button`} />
      <Button label="PAUSE" className={`${classNameB} top_button`} />
    </div>
  );
}
