import React, { useEffect, useState } from "react";
import "../../css/checkbox.css";
function RadioButton({ onRadioToggle, isChecked }) {

  useEffect(() => {
  }, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img onClick={onRadioToggle} style={{cursor: "pointer"}} src="/assets/RadioChecked.svg" />
      ) : (
        <img onClick={onRadioToggle} style={{cursor: "pointer"}} src="/assets/RadioUnchecked.svg" />
      )}
    </>
  );
}

export default RadioButton;
