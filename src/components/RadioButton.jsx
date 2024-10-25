import { useState } from "react";
import "../css/RadioButton.css";

function RadioButton() {
  const [isChecked, setiChecked] = useState(false);
  return (
    <>
      <img
        src="/assets/RadioButton.svg"
        alt="radiobutton"
        onClick={() => setIsChecked(!isChecked)}
        className={isChecked ? "checked" : "unchecked"}
      />
      <div className="radio-container">
        <input type="radio" />
      </div>
    </>
  );
}

export default RadioButton;
