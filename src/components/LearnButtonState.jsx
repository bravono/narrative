import "../css/LearnModePage.css";
import Button from "./Button";
export default function LearnButton({ classNameA }) {
  return (
    <div className="talkbubble-btn">
      <Button
        label="PREVIOUS"
        className={`${classNameA} bottom_button talk-btn-learn`}
      />
      <Button
        label="NEXT"
        className={`${classNameA} bottom_button talk-btn-exit`}
      />
    </div>
  );
}
