import React, { useState } from "react";
import "../../css/checkbox.css";
function Checkbox({ onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      {isChecked ? (
        <img onClick={handleToggle} src="/assets/CheckboxChecked.svg" />
      ) : (
        <img onClick={handleToggle} src="/assets/Checkbox.svg" />
      )}
    </>
  );
}

export default Checkbox;
