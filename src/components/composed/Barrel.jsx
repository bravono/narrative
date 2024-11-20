import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import StickyArrow from "../StickyArrow";
import "../../css/Barrel.css";
import Checkbox from "../standalone/CheckBox";
import Radio from "../standalone/Radio";
import Rank from "../standalone/Rank";
import Control from "../standalone/Control";
import Rate from "../standalone/Rate";
import RateControl from "../standalone/RateControl";
import RadioButton from "../standalone/RadioButton";

const Barrel = ({
  isFollowUP,
  isRecording,
  heading,
  choiceList,
  onSetChoiceList,
  choiceValuePair,
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
  const [rate, setRate] = useState("");

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
      return prevChoiceList.map((item) => ({
        ...item, // Copy all other properties
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

  const handleRating = (data) => {
    setRate(data); // Update the rate state first
    // Update the selected choice with the new rate
    if (type === "rating") {
      setChoiceValuePair((prevChoiceValuePair) => {
        const updateChoiceValuePair = { ...prevChoiceValuePair };
        if (Object.keys(prevChoiceValuePair).length > 0) {
          const selectedChoice = userChoice;
          updateChoiceValuePair[selectedChoice] = data;
        }
        return updateChoiceValuePair;
      });
    }
  };

  const handleRanking = (data) => {
    setRank(data); // Update the rank state first
    // Update the selected choice with the new rank
    if (type === "ranking") {
      setChoiceValuePair((prevChoiceValuePair) => {
        const updateChoiceValuePair = { ...prevChoiceValuePair };
        if (Object.keys(prevChoiceValuePair).length > 0) {
          const selectedChoice = userChoice;
          updateChoiceValuePair[selectedChoice] = data;
        }
        return updateChoiceValuePair;
      });
    }
  };

  useEffect(() => {
    onHaveChoice(userChoice);
  }, [userChoice]);

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
          {choice.name.charAt(0).toUpperCase() +
            choice.name.slice(1).toLowerCase()}
        </td>{" "}
        {/* Access the name property */}
        <td>
          {
            <Checkbox
              onCheckToggle={() => handleCheckToggle(choice)}
              isChecked={choice.value}
            />
          }
        </td>
        <td>
          {questionType === "radioButton" ? (
            <RadioButton
              onRadioToggle={() => handleRadioToggle(choice)}
              isChecked={choice.value}
            />
          ) : (
            ""
          )}
        </td>
        <td>{<Rate onRate={handleRating} />}</td>
        <td>{<Rank onRank={handleRanking} />}</td>
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
