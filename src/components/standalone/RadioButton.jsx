import React, { useEffect, useState } from "react";
import "../../css/RadioButton.css";
function RadioButton({ onRadioToggle, isChecked }) {

  useEffect(() => {
  }, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img className= "radio" onClick={onRadioToggle} src="/assets/RadioChecked.svg" />
      ) : (
        <img className= "radio" onClick={onRadioToggle} src="/assets/RadioUnchecked.svg" />
      )}
    </>
  );
}

export default RadioButton;
