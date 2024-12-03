import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import StickyArrow from "../standalone/StickyArrow";
import Checkbox from "../standalone/Checkbox";
import Rank from "../standalone/Rank";
import Control from "../standalone/Control";
import Rate from "../standalone/Rate";
import RadioButton from "../standalone/RadioButton";
import capitalizeWords from "../../utilities/capilizeWords";
import "../../css/barrel.css";

const Barrel = ({
  isRecording,
  heading,
  choiceList,
  onSetChoiceList,
  questionType,
  instruction,
  onSortToggle,
  onAddToChoice,
}) => {
  const isFollowUp = true;
  const [activeRow, setActiveRow] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [currentValue, setCurrentValue] = useState("?");

  useEffect(() => {
    if (activeRow != null) {
      setCurrentValue(choiceList[activeRow].value); // What to display on the control componet
      console.log(currentValue);
    }
  }, [currentValue]);

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice, index) => {
    setActiveRow(index);
  };
  const type = questionType;

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
          item.name === choice.name ? (item.value === 1 ? 0 : 1) : item.value,
      }));
    });
  };

  const handleRadioToggle = (choice) => {
    onSetChoiceList((prevChoiceList) => {
      return prevChoiceList.map((item) => ({
        ...item, // Copy all other properties
        value: item.name === choice.name ? 1 : 0, // Update 'value' conditionally
      }));
    });
  };

  const handleRate = (choice) => {
    if (choice.value < 5) {
      onSetChoiceList((prevChoiceList) => {
        return prevChoiceList.map((item) => ({
          ...item, // Copy all other properties
          value: item.name === choice.name ? item.value + 1 : item.value,
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
              value: item.name === choice.name ? newValue : item.value,
            }));
          });
        } else {
          onSetChoiceList((prevChoiceList) => {
            return prevChoiceList.map((item) => ({
              ...item, // Copy all other properties
              value: item.name === choice.name ? item.value - 1 : item.value,
            }));
          });
        }
      }
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
          value: item.name === choice.name ? newValue : item.value,
        }));
      });
    }
  };

  const tableRows = choiceList.map((choice, index) => {
    return (
      <tr
        key={index}
        onClick={() => handleItemSelect(choice.name, index)} // Pass choice.name
        className={activeRow === index ? "active-row" : ""}
      >
        <td>
          <p className="choice__list">{capitalizeWords(choice.name)}</p>
        </td>
        <td>
          {type == "multipleChoice" ? (
            <Checkbox
              onCheckToggle={() => handleCheckToggle(choice)}
              isChecked={choice.value}
            />
          ) : type == "singleChoice" ? (
            <RadioButton
              onRadioToggle={() => handleRadioToggle(choice)}
              isChecked={choice.value}
            />
          ) : type == "rate" ? (
            <span className="rate">
              {<Rate onRate={() => handleRate(choice)} rate={choice.value} />}
            </span>
          ) : type == "rank" ? (
            <span className="rank">
              {<Rank onRank={() => handleRank(choice)} rank={choice.value} />}
            </span>
          ) : (
            ""
          )}
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  });
  return (
    <div className="barrel-set">
      <Lever sorted={isSorted} onClick={handleSortToggle} />
      <StickyArrow type={type} />
      <div className="barrel">
        <table className="barrel__table">
          <tbody>
            <tr>
              <th>{heading}</th>
              <th></th>
            </tr>
            {tableRows}
          </tbody>
        </table>
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
      {type == "rank" || type == "rate" ? <Control
        type={type} //question type
        currentValue={currentValue}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      /> : ""}
      
    </div>
  );
};

export default Barrel;
