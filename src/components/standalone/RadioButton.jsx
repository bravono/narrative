import React, { useEffect, useState } from "react";
import "../../css/checkbox.css";
function RadioButton({ onCheck}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    onCheck(isChecked)
  }, [isChecked]);

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
