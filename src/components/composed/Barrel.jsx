import React, { useState, useEffect } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import "../../css/Barrel.css";
import StickyArrow from "../StickyArrow";

const Barrel = ({ heading, choiceList, questionType, isFollowUP }) => {
  const isFollowUp = true;
  const [isSorted, setIsSorted] = useState(false);
  const [activeCell, setActiveCell] = useState(null);

  const handleSort = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    console.log(isSorted);
  };

  const tableRows = choiceList.map((choice, index) => {
    return (
      <tr key={index}>
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
              <th>SINGLE CHOICE</th>
            </tr>
            {tableRows}
          </tbody>
        </table>
        {/* <img src="/assets/Column_dotted.svg" className="column_dotted" /> */}
      </div>
      <p className="instruction">Select Up to Six</p>
      <AnswerQueueButtons isFollowUp={isFollowUP} />
    </div>
  );
};

export default Barrel;
