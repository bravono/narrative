import "../css/LearnModePage.css";
import Button from "./Button";
export default function LearnButton({ classNameA, classNameB }) {
  return (
    <div className="talkbubble-btn">
      <Button
        label="LEARN"
        className={`${classNameA} bottom_button talk-btn-learn`}
      />
      <Button
        label="EXIT"
        className={`${classNameB} bottom_button talk-btn-exit`}
      />
    </div>
  );
}
