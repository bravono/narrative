import React, { useState } from "react";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Lever from "../standalone/BarrelLever";
import "../../css/Barrel.css";
import StickyArrow from "../StickyArrow";

const Barrel = ({ heading, choiceList, questionType, isFollowUP }) => {
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    console.log(isSorted);
  };
  return (
    <div className="barrel-set">
      <Lever sorted={isSorted} onClick={handleSort} />
      <StickyArrow className={"single_choice"} />
      <div className="barrel">
        <table>
          <thead>
            <th>{heading}</th>
            <th></th>
          </thead>
          <tbody>
            {choiceList.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
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
