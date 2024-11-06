import React from "react";
import Button from "./Button";
import "../css/TopButton.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function TopButton({ classNameA, classNameB }) {
  const navigate = useNavigate();
  const locattion = useLocation();

  const isStartActive = location.pathname === "/LearnModeStart";
  const isPauseActive = location.pathname === "/LearnModePause";

  const myClick = (label) => {
    if (label === "START") {
      alert("/LearnModeStart");
      navigate("/LearnModeStart");
    } else if (label === "PAUSE") {
      alert("/LearnModePause");
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
