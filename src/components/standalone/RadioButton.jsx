import React, { useEffect, useState } from "react";
import "../../css/RadioButton.css";
function RadioButton({ onRadioToggle, isChecked, className }) {

  useEffect(() => {
  }, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img className={className} onClick={onRadioToggle} src="/assets/RadioChecked.svg" />
      ) : (
        <img className={className} onClick={onRadioToggle} src="/assets/RadioUnchecked.svg" />
      )}
    </>
  );
}

export default RadioButton;
