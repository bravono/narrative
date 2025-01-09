import React from "react";
import Button from "../Button";
import "../../css/topButton.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function TopButton({ onClick, classNameA, classNameB }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isStartActive = location.pathname === "/LearnModeStart";
  const isPauseActive = location.pathname === "/LearnModePause";

  const handleClick = () => {
    navigate("/activemode");
}

  return (
    <div className="top_button-group">
      <Button
        style={{ border: isStartActive ? "2px solid #009bfc" : "none" }}
        onClick={handleClick}
        label="START"
        className={`${classNameA} top_button`}
      />
      <Button
        style={{ border: isPauseActive ? "2px solid #009bfc" : "none" }}
       
        label="PAUSE"
        className={`${classNameB} top_button`}
      />
    </div>
  );
}
