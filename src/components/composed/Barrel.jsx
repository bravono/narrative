import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import "../../css/Barrel.css";
import StickyArrow from "../StickyArrow";

const Barrel = ({
  heading,
  choiceList,
  questionType,
  isFollowUP,
  instruction,
}) => {
  const isFollowUp = true;
  const [isSorted, setIsSorted] = useState(false);
  const [activeRow, setActiveCell] = useState(null);

  const handleSort = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    setChoiceList(choiceList.sort((a, b) => a.localeCompare(b)));

    console.log(isSorted);
  };

  const handleItemSelect = (choice, index) => {
    setActiveCell(index);
    console.log(choice, index);
  };

  const tableRows = choiceList.map((choice, index) => {
    return (
      <tr
        key={index}
        onClick={() => handleItemSelect(choice, index)}
        style={{
          backgroundColor: activeRow === index ? "lightblue" : "",
        }}
      >
        <td>{choice}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
  return (
    <div className="barrel-set">
      <Lever sorted={isSorted} onClick={handleSort} />
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
