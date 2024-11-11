import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import StickyArrow from "../StickyArrow";
import "../../css/Barrel.css";
import Checkbox from "../standalone/CheckBox";
import Radio from "../standalone/Radio";
import Rank from "../standalone/Rank";
import RankControl from "../standalone/RankControl";
import Rate from "../standalone/Rate";
import RateControl from "../standalone/RateControl";
import RadioButton from "../standalone/RadioButton";

const Barrel = ({
  heading,
  choiceList,
  questionType,
  isFollowUP,
  instruction,
  onSortToggle,
  onHaveChoice,
}) => {
  const isFollowUp = true;
  const [activeRow, setActiveCell] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [userChoice, setUserChoice] = useState([]);
  const [choiceValuePair, setChoiceValuePair] = useState({});
  const [rank, setRank] = useState("");
  const [rate, setRate] = useState("");

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice, index) => {
    setActiveCell(index);

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

  const handleCheckToggle = (data) => {
    if (questionType === "checkbox") {
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

  const handleRating = (data) => {
    setRate(data); // Update the rate state first
    // Update the selected choice with the new rate
    if (questionType === "rating") {
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
    if (questionType === "ranking") {
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

  const tableRows = choiceList.map((choice, index) => {
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
        <td>{<RadioButton />}</td>
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
        classAddAChoice={"primary"}
        classContinue={"primary"}
        label={"CONTINUE"}
      />
    </div>
  );
};

export default Barrel;
