import React, { useEffect, useState } from "react";
import "../../css/checkbox.css";
function Checkbox({ onCheckToggle, isChecked }) {


  return (
    <>
      {isChecked ? (
        <img onClick={onCheckToggle} src="/assets/CheckboxChecked.svg" />
      ) : (
        <img onClick={onCheckToggle} src="/assets/Checkbox.svg" />
      )}
    </>
  );
}

export default Checkbox;
