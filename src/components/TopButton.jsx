import React from "react";
import Button from "./Button";
import "../css/TopButton.css";

export default function TopButton() {
  return (
    <div className="top-button-group">
      <Button label="START" className="top-button" />
      <Button label="PAUSE" className="top-button" />
    </div>
  );
}
