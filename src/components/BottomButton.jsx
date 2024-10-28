import React from "react";
import Button from "./Button";
import "../css/bottomButton.css";

export default function BottomButton({
  classNameA,
  classNameB,
  classNameC,
  classNameD,
}) {
  return (
    <div className="bottom_buttons">
      <div className="bottom_buttons-row">
        <Button label="COMPARE" className={`${classNameA} bottom_button`} />
        <Button label="TALK" className={`${classNameB} bottom_button`} />
      </div>
      <div className="bottom_buttons-row">
        <Button label="PDF IT" className={`${classNameC} bottom_button`} />
        <Button label="EXIT" className={`${classNameD} bottom_button`} />
      </div>
    </div>
  );
}
