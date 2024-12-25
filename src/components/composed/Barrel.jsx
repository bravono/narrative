import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import StickyArrow from "../standalone/StickyArrow";
import Control from "../standalone/Control";
import BarrelTable from "../standalone/BarrelTable";
import "../../css/barrel.css";

const Barrel = ({
  isRecording,
  type,
  // heading,
  // choiceList,
  onSetChoiceList,
  // questionType,
  // instruction,
  onSortToggle,
  onAddToChoice,
}) => {
  const isFollowUp = true;
  const [isSorted, setIsSorted] = useState(false);
  const [activeRow, setActiveRow] = useState();

  const handleUpdateActiveRow = (data) => {
    setActiveRow(data);
  };

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };
  const heading = "heading";
  const choiceList = [
    {
      name: "item 1",
      text: "Kano",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
    {
      name: "item 2",
      text: "Lagos",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
    {
      name: "item 3",
      text: "Port hacort",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
  ];
  const questionType = [
    "multipleChoice",
    "singleChoice",
    "rating",
    "ranking",
    "scale",
  ];
  const instruction = "Your instruction";

  // const type = questionType;

  const handleCheckToggle = (choice) => {
    onSetChoiceList((prevChoiceList) => {
      const selectedCount = prevChoiceList.filter(
        (item) => item.value === 1
      ).length;

      if (choice.value === 0 && selectedCount >= 6) {
        // Already 6 selected, prevent selecting more
        return prevChoiceList;
      }

      return prevChoiceList.map((item) => ({
        ...item,
        value:
          item.text === choice.text ? (item.value === 1 ? 0 : 1) : item.value,
      }));
    });
  };

  const handleRadioToggle = (choice) => {
    onSetChoiceList((prevChoiceList) => {
      return prevChoiceList.map((item) => ({
        ...item, // Copy all other properties
        value: item.text === choice.text ? 1 : 0, // Update 'value' conditionally
      }));
    });
  };

  const handleScaleToggle = (choice, rowIndex, colIndex) => {
    onSetChoiceList((prevChoiceList) =>
      prevChoiceList.map((item, index) => {
        if (index === rowIndex) {
          // Update the current row's scales
          return {
            ...item,
            scales: item.scales.map((scale, idx) => (idx === colIndex ? 1 : 0)), // Only the clicked column is active in the row
          };
        }
        return item; // Other rows remain unchanged
      })
    );
  };

  const handleRate = (choice) => {
    if (choice.value < 5) {
      onSetChoiceList((prevChoiceList) => {
        return prevChoiceList.map((item) => ({
          ...item, // Copy all other properties
          value: item.text === choice.text ? item.value + 1 : item.value,
        }));
      });
    }
  };

  const handleRank = (choice) => {
    if (choice.value < 6) {
      onSetChoiceList((prevChoiceList) => {
        // 1. Get all existing values
        const existingValues = prevChoiceList.map((item) => item.value);

        // 2. Find the next available value
        let newValue = choice.value + 1;
        while (existingValues.includes(newValue)) {
          newValue++;
          if (newValue > 6) {
            // Prevent infinite loop if no values are available
            return prevChoiceList;
          }
        }

        // 3. Update the choiceList
        return prevChoiceList.map((item) => ({
          ...item,
          value: item.text === choice.text ? newValue : item.value,
        }));
      });
    }
  };

  const handleIncrement = () => {
    if (activeRow != null) {
      const choice = choiceList[activeRow];
      if (type == "rank") {
        handleRank(choice);
      } else {
        handleRate(choice);
      }
    }
  };
  const handleDecrement = () => {
    if (activeRow != null) {
      const choice = choiceList[activeRow];
      if (choice.value > 0) {
        if (type == "rank") {
          onSetChoiceList((prevChoiceList) => {
            // 1. Get all existing values
            const existingValues = prevChoiceList.map((item) => item.value);

            // 2. Find the next available value
            let newValue = choice.value - 1;
            while (existingValues.includes(newValue)) {
              newValue--;
              if (newValue < 0) {
                // Prevent infinite loop if no values are available
                return prevChoiceList;
              }
            }

            // 3. Update the choiceList
            return prevChoiceList.map((item) => ({
              ...item,
              value: item.text === choice.text ? newValue : item.value,
            }));
          });
        } else {
          onSetChoiceList((prevChoiceList) => {
            return prevChoiceList.map((item) => ({
              ...item, // Copy all other properties
              value: item.text === choice.text ? item.value - 1 : item.value,
            }));
          });
        }
      }
    }
  };

  return (
    <div className="barrel-set">
      <Lever sorted={isSorted} onClick={handleSortToggle} />
      {type !== "scale" ? <StickyArrow type={type} /> : ""}
      <div className="barrel">
        <BarrelTable
          type={type}
          choiceList={choiceList}
          onRank={handleRank}
          onRate={handleRate}
          onRadioToggle={handleRadioToggle}
          onScaleToggle={handleScaleToggle}
          onCheckToggle={handleCheckToggle}
          onSetActiveRow={handleUpdateActiveRow}
        />
      </div>
      <p className="instruction">{instruction}</p>
      <AnswerQueueButtons
        isFollowUp={isFollowUp}
        isRecording={isRecording}
        classAddAChoice={"accent"}
        classContinue={"disabled"}
        label={"CONTINUE"}
        onAddToChoice={onAddToChoice}
      />
      {type == "rank" || type == "rate" ? (
        <Control
          type={type} //question type
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Barrel;
