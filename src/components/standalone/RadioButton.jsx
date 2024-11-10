import React, { useState } from "react";
import "../../css/checkbox.css";
function RadioButton({ onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      {isChecked ? (
        <img onClick={handleToggle} src="/assets/RadioChecked.svg" />
      ) : (
        <img onClick={handleToggle} src="/assets/RadioUnchecked.svg" />
      )}
    </>
  );
}

export default RadioButton;
