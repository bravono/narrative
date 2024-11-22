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
  choiceList,
  onSetChoiceList,
  onAddToChoice,
}) {
  const handleAddChoice = () => {
    onAddToChoice();
  };
  const handleContinueOrRoundup = () => {
    if (label.toLowerCase() === "roundup") {
      const choices = choiceList.map((choice) => {
        return choice.name;
      });
      const values = choiceList.map((choice) => {
        return Number(choice.value);
      });

      // Calculate the total
      const total = values.reduce(
        (sum, value) => Number(sum) + Number(value),
        0
      );
      
      // Calculate the amount to distribute
      const amountToDistribute = Math.min(5, 100 - total); // Distribute up to 5 or the remaining amount to reach 100
      
      if (amountToDistribute > 0) {
        // Calculate proportions
        const proportions = values.map((value) => value / total);
        
        // Calculate the distribution for each choice
        const distribution = proportions.map((proportion) =>
          Math.round(proportion * amountToDistribute)
      );

      onSetChoiceList((prevChoiceList) => {
        const updatedChoiceList = prevChoiceList.map((choice, index) => ({
          ...choice,
          value: Number(choice.value) + distribution[index],
        }));
      
        const total = updatedChoiceList.reduce((sum, choice) => sum + choice.value, 0);
      
        if (total !== 100) {
          // Find the index of the choice with the highest value
          const highestValueIndex = updatedChoiceList.reduce(
            (maxIndex, choice, index, arr) =>
              choice.value > arr[maxIndex].value ? index : maxIndex,
            0
          );
      
          // Add 1 to the highest value
          updatedChoiceList[highestValueIndex].value += 1;
        }
      
        return updatedChoiceList;
      });
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
