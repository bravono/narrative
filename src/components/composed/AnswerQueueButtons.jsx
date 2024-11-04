import Button from "../Button";
import "../../css/answerQueueButtons.css";
import "../../css/button.css";

export default function AnswerQueueButtons(isFollowUp) {
  if (isFollowUp) {
    return (
      <>
        <div className="answer_queue_buttons">
          <Button className={"accent button-small"} label="ADD A CHOICE" />
          <Button className={"accent button-small"} label="CONTINUE" />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="answer_queue_buttons">
        <Button className={"accent button-small"} label="ADD A CHOICE" />
      </div>
    </>
  );
}
