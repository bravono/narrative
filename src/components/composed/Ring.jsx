import React, { useState, useRef, useEffect, act } from "react";
import { tableGenerator } from "../standalone/tableGenerator";
import { getScreenWidth } from "../../utilities/getScreenSize";
import RingLever from "../standalone/RingLever";
import capitalizeWords from "../../utilities/capilizeWords";
import AnswerQueueButtons from "./AnswerQueueButtons";
import RingSegment from "../standalone/RingSegment";
import RingDraggable from "../standalone/RingDraggable";
import IncreAndDecrePoly from "../standalone/IncreAndDecrePoly";
import "../../css/ring.css";

const Ring = ({
  heading,
  instruction,
  choiceList,
  isRecording,
  ringPass,
  widgetOutAnimation,
  onSetChoiceList,
  onSortToggle,
  onAddToChoice,
  onAddToStory,
}) => {
  const size = getScreenWidth();
  const strokeWidth = size === 170 ?  15 : 20
  const colors = [
    "#9747FF",
    "#00659B",
    "#B1D348",
    "#5E3660",
    "#E84560",
    "#FFE600",
  ];
  const [segmentValue, setSegmentValue] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [activeRow, setActiveRow] = useState({});
  const [activeRowIndex, setActiveRowIndex] = useState();
  const [currentTotal, setCurrentTotal] = useState(0); // Sum as value changes
  const [total, setTotal] = useState(0); // Sum only when all items have a value > 0

  useEffect(() => {
    let total = 0;
    choiceList.map((choice) => {
      total += Number(choice.value);
    });
    setTotal(total);

    console.log("Choice List", choiceList);
  }, [choiceList]);

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice) => {
    setActiveRow(choice);
    setSegmentValue(choice.value);
  };

  const handleUpdateSegmentVaue = (data) => {
    setSegmentValue(data);
  };

  const isValidTotal = total < 100 || total > 100;
  const canContinue = total == 100;
  const canRoundup = total > 94 && total < 100;
  const widgetInAnimationRight = `animate__animated animate__zoomInRight ${widgetOutAnimation}`;
  const widgetInAnimationLeft = `animate__animated animate__zoomInLeft ${widgetOutAnimation}`;

  return (
    <div className="ring-container">
      <div className="ring-heading">
        {"Select an Item then Drag the Ring from 12 O'clock to Add Weight"}
      </div>
      <div className="ring-set">
        <RingLever
          sorted={isSorted}
          onClick={handleSortToggle}
          widgetInAnimationLeft={widgetInAnimationLeft}
        />

        <div>
          <div
            className={`ring-list-container ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationLeft
            }`}
          >
            <table className="ring-table">
              <tbody>
                {tableGenerator(
                  choiceList,
                  activeRow,
                  colors,
                  setActiveRowIndex,
                  handleItemSelect
                )}
              </tbody>
            </table>
          </div>
          <p
            className={`ring-instruction ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationLeft
            }`}
          >
            {"Select an Item"}
          </p>
        </div>

        <div className="ring-control">
          <RingDraggable
            widgetOutAnimation={widgetOutAnimation}
            widgetInAnimationRight={widgetInAnimationRight}
            size={size}
            strokeWidth={strokeWidth}
            segmentValue={segmentValue}
            isValidTotal={isValidTotal}
            total={total}
            activeRowIndex={activeRowIndex}
            choiceList={choiceList}
            onSetSegmentValue={handleUpdateSegmentVaue}
            onSetChoiceList={onSetChoiceList}
            activeRow={activeRow}
          />
          <IncreAndDecrePoly
            widgetOutAnimation={widgetOutAnimation}
            onSetChoiceList={onSetChoiceList}
            widgetInAnimationRight={widgetInAnimationRight}
            onSetSegmentValue={handleUpdateSegmentVaue}
            activeRow={activeRow}
          />
          <RingSegment
            style={`ring-segment`}
            widgetOutAnimation={widgetOutAnimation}
            widgetInAnimationRight={widgetInAnimationRight}
            size={size}
            strokeWidth={strokeWidth - 3}
            colors={colors}
            choiceList={choiceList}
            total={total}
          />
        </div>
      </div>
      <div className="ring-buttons">
        <AnswerQueueButtons
          isRecording={isRecording}
          classAddAChoice={choiceList.length < 6 ? "accent" : "disabled"}
          classContinue={canContinue ? "accent" : "disabled"}
          classRoundup={canRoundup ? "accent" : "disabled"}
          choiceList={choiceList}
          onSetChoiceList={onSetChoiceList}
          onAddToChoice={onAddToChoice}
          onAddToStory={onAddToStory}
          canContinue={canContinue}
          canRoundup={canRoundup}
        />
      </div>

      {(total < 100 && total > 94) || total > 100 ? (
        <div className="total_below">
          Your total does not sum to the required number. Adjust your values or
          if within 5% of required sum you can press Round Up.
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Ring;
