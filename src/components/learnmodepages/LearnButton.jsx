import "../../css/LearnModePage.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function LearnButton({ classNameA, classNameB, onClick }) {
  const navigate = useNavigate();

  const myClick = (label) => {
    if (label === "LEARN" && location.pathname === "/") {
      navigate("/LearnModeTimer");
    } else if (label === "EXIT" && location.pathname === "/") {
    }
  };

  return (
    <div className="talkbubble-btn">
      <Button
        onClick={onClick}
        label="LEARN"
        className={`${classNameA} bottom_button talk-btn-learn`}
      />
      <Button
        onClick={onClick}
        label="EXIT"
        className={`${classNameB} bottom_button talk-btn-exit`}
      />
    </div>
  );
}
