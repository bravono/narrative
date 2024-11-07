import React from "react";
import Button from "../Button";
import "../../css/topButton.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function TopButton({ classNameA, classNameB }) {
  const navigate = useNavigate();
  const locattion = useLocation();

  const isStartActive = location.pathname === "/LearnModeStart";
  const isPauseActive = location.pathname === "/LearnModePause";

  const myClick = (label) => {
    if (label === "START") {
      navigate("/LearnModeStart");
    } else if (label === "PAUSE") {
      navigate("/LearnModePause");
    }
  };

  return (
    <div className="top_button-group">
      <Button
        style={{ border: isStartActive ? "2px solid #009bfc" : "none" }}
        onClick={() => myClick("START")}
        label="START"
        className={`${classNameA} top_button`}
      />
      <Button
        style={{ border: isPauseActive ? "2px solid #009bfc" : "none" }}
        onClick={() => myClick("PAUSE")}
        label="PAUSE"
        className={`${classNameB} top_button`}
      />
    </div>
  );
}
