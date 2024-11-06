import "../../css/LearnModePage.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function LearnButton({ classNameA, classNameB }) {
  const navigate = useNavigate();

  const myClick = (label) => {
    if (label === "LEARN" && location.pathname === "/") {
      alert("Routing to LearnModeTimer");
      navigate("/LearnModeTimer");
    } else if (label === "EXIT" && location.pathname === "/") {
      alert("You are about to exit the Learn mode page");
    }
  };

  return (
    <div className="talkbubble-btn">
      <Button
        onClick={() => myClick("LEARN")}
        label="LEARN"
        className={`${classNameA} bottom_button talk-btn-learn`}
      />
      <Button
        onClick={() => myClick("EXIT")}
        label="EXIT"
        className={`${classNameB} bottom_button talk-btn-exit`}
      />
    </div>
  );
}
