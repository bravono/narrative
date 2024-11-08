import React, { useState } from "react";
import Button from "../Button";
import "../../css/answerQueueButtons.css";
import "../../css/button.css";

export default function AnswerQueueButtons({
  isFollowUp,
  classAddAChoice,
  classContinue,
  label,
}) {
  const handleAddChoice = () => {
    console.log("Choice Added");
  };
  const handleContinue = () => {
    console.log("Continued");
  };

  
  if (!isFollowUp) {
    return (
      <>
        <div className="answer_queue_buttons">
          <Button
            onClick={handleAddChoice}
            className={`${classAddAChoice} button-small`}
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
          onClick={handleAddChoice}
          className={`${classAddAChoice} button-small`}
          label="ADD A CHOICE"
        />
        <Button
          onClick={handleContinue}
          className={`${classContinue} button-small`}
          label={label || "CONTINUE"}
        />
      </div>
    </>
  );
}
