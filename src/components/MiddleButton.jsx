import React from "react";
import Button from "./Button";
import "../css/middleButton.css";

export default function MiddleButton({ classNameA, classNameB }) {
  return (
    <div className="middle_buttons-group">
      <Button label="ADD TO STORY" className={`${classNameA} middle_button`} />
      <Button label="PREVIEW" className={`${classNameB} middle_button`} />
    </div>
  );
}
