import React, { useEffect, useState } from "react";

function Checkbox({ onCheckToggle, isChecked, className, isScrollable, visibleRows }) {
  return (
    <>
      {isChecked ? (
        <img
          className={className}
          style={{ width: isScrollable ? "10px" : visibleRows > 7 ? "10px" : "15px"}}
          onClick={onCheckToggle}
          src="/assets/CheckboxChecked.svg"
        />
      ) : (
        <img
          className={className}
          style={{ width: isScrollable ? "10px" : visibleRows > 7 ? "10px" : "15px"}}
          onClick={onCheckToggle}
          src="/assets/Checkbox.svg"
        />
      )}
    </>
  );
}

export default Checkbox;
