import React from "react";
import Button from "./Button";
import "../css/FooterButton.css";

export default function FooterButton({ classNameA, classNameB }) {
  return (
    <div className="footer_buttons">
      <div className="footer_buttons-row">
        <Button label="PDF IT" className={`${classNameA} footer_button`} />
        <Button label="EXIT" className={`${classNameB} footer_button`} />
      </div>
    </div>
  );
}
