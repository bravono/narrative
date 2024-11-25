import React, { useEffect, useState } from "react";

function Checkbox({ onCheckToggle, isChecked }) {


  return (
    <>
      {isChecked ? (
        <img className="checkbox" onClick={onCheckToggle} src="/assets/CheckboxChecked.svg" />
      ) : (
        <img className="checkbox" onClick={onCheckToggle} src="/assets/Checkbox.svg" />
      )}
    </>
  );
}

export default Checkbox;
