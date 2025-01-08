import React from "react";
import { getScreenHeight } from "../../utilities/getScreenSize";
function RadioButton({
  onRadioToggle,
  onScaleToggle,
  isChecked,
  type,
  className,
  isScrollable,
  choiceList,
}) {
  
  const height = getScreenHeight();
  let width = "15px"; // Default value
  const length = choiceList.length;

  if (length <= 6) {
    width = "30px";
  } else if (isScrollable && height === 20) {
    width = "14px";
  } else if (isScrollable && height === 15) {
    width = "15px";
  } else if (length >= 7 && height === 20) {
    width = "17px";
  } else if (length >= 7 && height === 15) {
    width = "20px";
  }

  return (
    <>
      {isChecked ? (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioChecked.svg"
          style={{width: width}}
        />
      ) : (
        <img
          className={className}
          onClick={type === "scale" ? onScaleToggle : onRadioToggle}
          src="/assets/RadioUnchecked.svg"
          style={{width: width}}
        />
      )}
    </>
  );
}

export default RadioButton;
