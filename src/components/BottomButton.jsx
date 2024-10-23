import React from "react";
import Button from "./Button";
import "../css/bottomButton.css";

export default function BottomButton() {
  return (
    <div className="bottom_buttons">
      <div className="bottom_buttons-row">
        <Button label="COMPARE" className="bottom_button" />
        <Button label="TALK" className="bottom_button" />
      </div>
      <div className="bottom_buttons-row">
        <Button label="PDF IT" className="bottom_button" />
        <Button label="EXIT" className="bottom_button" />
      </div>
    </div>
  );
}
