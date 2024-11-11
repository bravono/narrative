import React, { useEffect, useState } from "react";
import "../../css/checkbox.css";
function Checkbox({ onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckToggle = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    onCheck(isChecked);
  }, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img onClick={handleCheckToggle} src="/assets/CheckboxChecked.svg" />
      ) : (
        <img onClick={handleCheckToggle} src="/assets/Checkbox.svg" />
      )}
    </>
  );
}

export default Checkbox;
