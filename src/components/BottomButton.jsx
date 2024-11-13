import React from "react";
import Button from "./Button";
import "../css/bottomButton.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomButton({
  classNameA,
  classNameB,
  classNameC,
  classNameD,
  onClick,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCompareActive = location.pathname === "/LearnModeCompare";
  const isTalkActive = location.pathname === "/LearnModeTalk";
  const isPdfItActive = location.pathname === "/LearnModePdfIt";
  const isExitActive = location.pathname === "/LearnModeExit";

  const myClick = (label) => {
    if (
      label === "COMPARE" &&
      (location.pathname.includes("LearnMode") || location.pathname === "/")
    ) {
      navigate("/LearnModeCompare");
    } else if (
      label === "TALK" &&
      (location.pathname.includes("LearnMode") || location.pathname === "/")
    ) {
      navigate("/LearnModeTalk");
    } else if (
      label === "PDF IT" &&
      (location.pathname.includes("LearnMode") || location.pathname === "/")
    ) {
      navigate("/LearnModePdfIt");
    } else if (
      label === "EXIT" &&
      (location.pathname.includes("LearnMode") || location.pathname === "/")
    ) {
      navigate("/LearnModeExit");
    }
  };

  return (
    <div className="bottom_buttons">
      <div className="bottom_buttons-row">
        <Button
          style={{ border: isCompareActive ? "2px solid #009bfc" : "none" }}
          label="COMPARE"
          onClick={() => myClick("COMPARE")}
          className={`${classNameA} bottom_button`}
        />
        <Button
          style={{ border: isTalkActive ? "2px solid #009bfc" : "none" }}
          onClick={() => myClick("TALK")}
          label="TALK"
          className={`${classNameB} bottom_button`}
        />
      </div>
      <div className="bottom_buttons-row">
        <Button
          style={{ border: isPdfItActive ? "2px solid #009bfc" : "none" }}
          onClick={() => myClick("PDF IT")}
          label="PDF IT"
          className={`${classNameC} bottom_button`}
        />
        <Button
          style={{ border: isExitActive ? "2px solid #009bfc" : "none" }}
          onClick={() => myClick("EXIT")}
          label="EXIT"
          className={`${classNameD} bottom_button`}
        />
      </div>
    </div>
  );
}
