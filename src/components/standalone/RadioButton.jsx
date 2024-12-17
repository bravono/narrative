import React, { useEffect, useState } from "react";
import "../../css/RadioButton.css";
function RadioButton({
  onRadioToggle,
  onScaleToggle,
  isChecked,
  type,
  className,
}) {
  useEffect(() => {
  }, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioChecked.svg"
        />
      ) : (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioUnchecked.svg"
        />
      )}
    </>
  );
}

export default RadioButton;
