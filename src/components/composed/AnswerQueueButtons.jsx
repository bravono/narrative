import React, { useState } from "react";
import Button from "../Button";
import "../../css/answerQueueButtons.css";
import "../../css/button.css";

export default function AnswerQueueButtons({
  isFollowUp,
  isRecording,
  classAddAChoice,
  classContinue,
  label,
  choiceValuePair,
  onContinueOrRoundup,
  onAddToChoice,
}) {
  const handleAddChoice = () => {
    onAddToChoice();
  };
  const handleContinueOrRoundup = () => {
    if (label.toLowerCase() === "roundup") {
      const choices = Object.keys(choiceValuePair);
      const values = Object.values(choiceValuePair);

      // Calculate the total
      const total = values.reduce((sum, value) => sum + value, 0);

      // Calculate the amount to distribute
      const amountToDistribute = Math.min(5, 100 - total); // Distribute up to 5 or the remaining amount to reach 100

      if (amountToDistribute > 0) {
        // Calculate proportions
        const proportions = values.map((value) => value / total);

        // Calculate the distribution for each choice
        const distribution = proportions.map((proportion) =>
          Math.round(proportion * amountToDistribute)
        );

        // Update the choice-value pairs
        const updatedChoiceValuePair = {};
        choices.forEach((choice, index) => {
          updatedChoiceValuePair[choice] =
            choiceValuePair[choice] + distribution[index];
        });
        onContinueOrRoundup(updatedChoiceValuePair);
      }
    }
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
          label={isRecording ? "Transcribing..." : "ADD A CHOICE"}
        />
        <Button
          onClick={handleContinueOrRoundup}
          className={`${classContinue} button-small`}
          label={label}
        />
      </div>
    </>
  );
}
