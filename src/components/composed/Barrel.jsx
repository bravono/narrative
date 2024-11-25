import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import StickyArrow from "../standalone/StickyArrow";
import Checkbox from "../standalone/Checkbox";
import Rank from "../standalone/Rank";
import Control from "../standalone/Control";
import Rate from "../standalone/Rate";
import RateControl from "../standalone/RateControl";
import RadioButton from "../standalone/RadioButton";
import capitalizeWords from "../../utilities/capilizeWords";
import "../../css/barrel.css";

const Barrel = ({
  isFollowUP,
  isRecording,
  heading,
  choiceList,
  onSetChoiceList,
  questionType,
  instruction,
  onSortToggle,
  onHaveChoice,
  onAddToChoice,
}) => {
  const isFollowUp = true;
  const [activeRow, setActiveRow] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [userChoice, setUserChoice] = useState([]);
  const [rank, setRank] = useState("");
  const [rate, setRate] = useState(0);

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice, index) => {
    setActiveRow(index);
  };
  const type = questionType.toLowerCase();

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

  const handleRank = (choice) => {
    if (choice.value < 6) {
      onSetChoiceList((prevChoiceList) => {
        // 1. Get all existing values
        const existingValues = prevChoiceList.map(item => item.value);
  
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
        style={{
          backgroundColor: activeRow === index ? "#EBFF00" : "",
          border: activeRow === index ? "1px solid #44CEEC" : "",
        }}
      >
        <td>
          <p className="choice__list">{capitalizeWords(choice.name)}</p>
        </td>{" "}
        {/* Access the name property */}
        <td>
          {type ? (
              <Checkbox
                onCheckToggle={() => handleCheckToggle(choice)}
                isChecked={choice.value}
              />
          ) : (
            ""
          )}
        </td>
        <td>
            <RadioButton
              onRadioToggle={() => handleRadioToggle(choice)}
              isChecked={choice.value}
            />
        </td>
        <td>
          <div className="rate">
            {<Rate onRate={() => handleRate(choice)} rate={choice.value} />}
          </div>
        </td>
        <td>
          <span className="rank">
            {<Rank onRank={() => handleRank(choice)} rank={choice.value} />}
          </span>
        </td>
      </tr>
    );
  });
  return (
    <div className="barrel-set">
      <Lever sorted={isSorted} onClick={handleSortToggle} />
      <StickyArrow className={"single_choice"} />
      <div className="barrel">
        <table>
          <tbody>
            <tr>
              <th>{heading}</th>
              <th></th>
            </tr>
            {tableRows}
          </tbody>
        </table>
        {/* <img src="/assets/Column_dotted.svg" className="column_dotted" /> */}
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
      {/* <Control /> */}
    </div>
  );
};

export default Barrel;
