import React from "react";
import Button from "./Button";
import "../css/bottomButton.css";

export default function BottomButton() {
  return (
    <div className="bottom_buttons">
      <div className="bottom_buttons-row">
        <Button label="COMPARE" className="button" color="bottom_button" />
        <Button label="TALK" className="button" color="bottom_button" />
      </div>
      <div className="bottom_buttons-row">
        <Button label="PDF IT" className="button" color="bottom_button" />
        <Button label="EXIT" className="button" color="bottom_button" />
      </div>
    </div>
  );
}
