import React, { useEffect, useState } from "react";

function Checkbox({ onCheckToggle, isChecked, className }) {


  return (
    <>
      {isChecked ? (
        <img className={className} onClick={onCheckToggle} src="/assets/CheckboxChecked.svg" />
      ) : (
        <img className={className} onClick={onCheckToggle} src="/assets/Checkbox.svg" />
      )}
    </>
  );
}

export default Checkbox;
