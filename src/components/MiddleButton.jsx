import React from "react";
import Button from "./Button";
import "../css/middleButton.css";

export default function MiddleButton() {
  return (
    <div className="middle_buttons-group">
      <Button label="ADD TO STORY" className="middle_button" />
      <Button label="PREVIEW" className="middle_button" />
    </div>
  );
}
