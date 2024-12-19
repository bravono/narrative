import React, { useEffect, useState } from "react";
import "../../css/RadioButton.css";
function RadioButton({
  onRadioToggle,
  onScaleToggle,
  isChecked,
  type,
  className,
  isScrollable,
  visibleRows,
}) {
  useEffect(() => {}, [isChecked]);

  return (
    <>
      {isChecked ? (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioChecked.svg"
          style={{
            width: isScrollable ? "10px" : visibleRows > 7 ? "10px" : "15px",
          }}
        />
      ) : (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioUnchecked.svg"
          style={{
            width: isScrollable ? "10px" : visibleRows > 7 ? "10px" : "15px",
          }}
        />
      )}
    </>
  );
}

export default RadioButton;
