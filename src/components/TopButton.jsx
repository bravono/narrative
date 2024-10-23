import React from "react";
import Button from "./Button";
import "../css/TopButton.css";

export default function TopButton() {
  return (
    <div className="top_button-group">
      <Button label="START" className="top_button" />
      <Button label="PAUSE" className="top_button" />
    </div>
  );
}
