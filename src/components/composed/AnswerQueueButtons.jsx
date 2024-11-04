import Button from "../Button";
import "../../css/answerQueueButtons.css";
import "../../css/button.css";

export default function AnswerQueueButtons({
  isFollowUp,
  classAddAChoice,
  classContinue,
}) {
  if (!isFollowUp) {
    return (
      <>
        <div className="answer_queue_buttons">
          <Button
            className={`${classAddAChoice} disabled button-small`}
            label="ADD A CHOICE"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="answer_queue_buttons">
        <Button
          className={`${classAddAChoice} disabled button-small`}
          label="ADD A CHOICE"
        />
        <Button
          className={`${classContinue} accent button-small`}
          label="CONTINUE"
        />
      </div>
    </>
  );
}
