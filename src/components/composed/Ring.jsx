import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRingTotal } from "../../store/elements";
import { tableGenerator } from "../standalone/tableGenerator";
import { getScreenWidth } from "../../utilities/getScreenSize";
import {
  sortChoiceListByName,
  sortChoiceListByValue,
} from "../../utilities/choiceListSorter";
import RingLever from "../standalone/RingLever";
import AnswerCueButtons from "./AnswerCueButtons";
import RingSegment from "../standalone/RingSegment";
import RingDraggable from "../standalone/RingDraggable";
import IncreAndDecrePoly from "../standalone/IncreAndDecrePoly";
import "../../css/ring.css";

const Ring = ({
  heading,
  instruction,
  choiceList,
  isRecording,
  widgetOutAnimation,
  onSetChoiceList,
  onAddToChoice,
  onAddToStory,
}) => {
  const size = getScreenWidth();
  const strokeWidth = size === 170 ? 15 : 20;
  const colors = [
    "#9747FF",
    "#00659B",
    "#B1D348",
    "#5E3660",
    "#E84560",
    "#FFE600",
  ];
  const [segmentValue, setSegmentValue] = useState(0);
  const [isDescending, setIsDescending] = useState(false);
  const [activeRow, setActiveRow] = useState({});
  const [activeRowIndex, setActiveRowIndex] = useState();
  const [currentTotal, setCurrentTotal] = useState(0); // Sum as value changes
  const { ringTotal } = useSelector((state) => state.entities.elements);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    choiceList.map((choice) => {
      total += Number(choice.value);
    });
    dispatch(setRingTotal(total));
  }, [choiceList]);

  const handleSortToggle = () => {
    setIsDescending((prevIsSorted) => !prevIsSorted);

    if (choiceList.filter((choice) => choice.value > 1).length) {
      sortChoiceListByValue(choiceList, isDescending);
    } else {
      sortChoiceListByName(choiceList, isDescending);
    }
  };

  const handleItemSelect = (choice) => {
    setActiveRow(choice);
    setSegmentValue(choice.value);
  };

  const handleUpdateSegmentVaue = (data) => {
    setSegmentValue(data);
  };

  const isValidTotal = ringTotal < 100 || ringTotal > 100;
  const canContinue = ringTotal == 100;
  const canRoundup = ringTotal > 94 && ringTotal < 100;
  const widgetInAnimationRight = `animate__animated animate__zoomInRight ${widgetOutAnimation}`;
  const widgetInAnimationLeft = `animate__animated animate__zoomInLeft ${widgetOutAnimation}`;

  return (
    <div className="ring-container">
      <div className="ring-heading">
        {
          "Select an Item then Drag the outter Ring from 12 O'clock to Add Weight"
        }
      </div>
      <div className="ring-set">
        <div>
          <div
            className={`ring-list-container ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationLeft
            }`}
          >
            <RingLever
              sorted={isDescending}
              onClick={handleSortToggle}
              widgetInAnimationLeft={widgetInAnimationLeft}
            />
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
            total={ringTotal}
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
            total={ringTotal}
          />
        </div>
      </div>
      <div className="ring-buttons">
        <AnswerCueButtons
          isRecording={isRecording}
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
    </div>
  );
};

export default Ring;
