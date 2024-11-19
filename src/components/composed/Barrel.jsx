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
  choiceValuePair,
  questionType,
  instruction,
  onSortToggle,
  onHaveChoice,
  onAddToChoice,
}) => {
  const isFollowUp = true;
  const [isChecked, setIsChecked] = useState(false);
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

    setRank(0);

    if (!userChoice.includes(choice)) {
      setUserChoice(choice);
    }

    if (!(choice in choiceValuePair)) {
      setChoiceValuePair((prevChoiceValuePair) => ({
        ...prevChoiceValuePair,
        [choice]: "", // Or any value you want to associate with the choice
      }));
    }
    console.log(choice);
  };
  const type = questionType.toLowerCase();

  const handleCheckToggle = (data) => {
    onSortToggle((prevChoiceValuePair) => {
      const updateChoiceValuePair = { ...prevChoiceValuePair };
      if (Object.keys(prevChoiceValuePair).length > 0) {
        const selectedChoice = userChoice;
        updateChoiceValuePair[selectedChoice] = data;
      }
      return updateChoiceValuePair;
    });
  };

  const handleRadioToggle = (data) => {
    onSortToggle((prevChoiceValuePair) => {
      const updatedChoiceValuePair = {}; // Create a new object

      for (const choice in prevChoiceValuePair) {
        updatedChoiceValuePair[choice] = choice === userChoice ? data : false;
      }

      return updatedChoiceValuePair;
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

  useEffect(() => {
    console.log(choiceValuePair);
  }, [choiceValuePair]);

  const tableRows = Object.keys(choiceValuePair).map((choice, index) => {
    return (
      <tr
        key={index}
        onClick={() => handleItemSelect(choice, index)}
        style={{
          backgroundColor: activeRow === index ? "#EBFF00" : "",
          border: activeRow === index ? "1px solid #44CEEC" : "",
        }}
      >
        <td>{choice}</td>
        <td>{<Checkbox onCheck={handleCheckToggle} />}</td>
        <td>
          {<RadioButton onCheck={handleRadioToggle} isChecked={isChecked} />}
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
