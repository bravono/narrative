import React, { useState, useRef, useEffect, act } from "react";
import { updateChoiceList } from "../../utilities/choiceListUpdater";
import { tableGenerator } from "../standalone/tableGenerator";
import RingLever from "../standalone/RingLever";
import capitalizeWords from "../../utilities/capilizeWords";
import AnswerQueueButtons from "./AnswerQueueButtons";
import RingSegment from "../standalone/RingSegment";
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
  const size = 150;
  const strokeWidth = 23;
  const color = "#4caf50";
  const colors = [
    "#9747FF",
    "#00659B",
    "#B1D348",
    "#5E3660",
    "#E84560",
    "#FFE600",
  ];
  const [segmentValue, setSegmentValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);
  const [isSorted, setIsSorted] = useState(false);
  const [activeRow, setActiveRow] = useState({});
  const [activeRowIndex, setActiveRowIndex] = useState();
  const [currentTotal, setCurrentTotal] = useState(0); // Sum as value changes
  const [total, setTotal] = useState(0); // Sum only when all items have a value > 0

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (segmentValue / 100) * circumference;

  // Function to calculate SegmentValue based on angle
  const updateSegmentValue = (clientX, clientY) => {
    const { x, y, width, height } = circleRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const angle = Math.atan2(dy, dx) + Math.PI / 2;

    // Calculate SegmentValue from angle
    const angleDeg = (angle * 180) / Math.PI;
    const newSegmentValue = ((angleDeg + 360) % 360) / 3.6; // Convert to percentage

    setSegmentValue(Math.max(0, Math.min(100, newSegmentValue))); // Clamp between 0 and 100
  };

  useEffect(() => {
    let total = 0;
    choiceList.map((choice) => {
      total += Number(choice.value);
    });
    setTotal(total);
  }, [choiceList, widgetOutAnimation]);

  // Mouse/touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    updateSegmentValue(clientX, clientY);

    if (activeRow) {
      onSetChoiceList((prevChoiceList) => {
        const updatedChoiceList = updateChoiceList(
          prevChoiceList,
          activeRow,
          segmentValue
        );
        return updatedChoiceList;
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {

      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      updateSegmentValue(clientX, clientY);

      if (activeRow) {
        onSetChoiceList((prevChoiceList) => {
          const updatedChoiceList = updateChoiceList(
            prevChoiceList,
            activeRow,
            segmentValue
          );
          return updatedChoiceList;
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  

  const incrementSegmentValue = () => {
    setSegmentValue(segmentValue + 1);

    if (activeRow) {
      onSetChoiceList((prevChoiceList) => {
        const updatedChoiceList = updateChoiceList(
          prevChoiceList,
          activeRow,
          segmentValue
        );
        return updatedChoiceList;
      });
    }
  };

  const decrementSegmentValue = () => {
    if (segmentValue > 0) {
      setSegmentValue(segmentValue - 1);

      if (activeRow) {
        onSetChoiceList((prevChoiceList) => {
          const updatedChoiceList = updateChoiceList(
            prevChoiceList,
            activeRow,
            segmentValue
          );
          return updatedChoiceList;
        });
      }
    }
  };

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice) => {
    setActiveRow(choice);
  };

  const isValidTotal = total < 100 || total > 100;
  const canContinue = total == 100;
  const canRoundup = total > 94 && total < 100;
  const widgetInAnimationRight = `animate__animated animate__zoomInRight ${widgetOutAnimation}`;
  const widgetInAnimationLeft = `animate__animated animate__zoomInLeft ${widgetOutAnimation}`;

  return (
    <div className="ring-set">
      <RingLever
        sorted={isSorted}
        onClick={handleSortToggle}
        widgetInAnimationLeft={widgetInAnimationLeft}
      />
      <p className="ring-heading">{heading || "PEOPLE OR PLACES"}</p>
      <div className="ring">
        <RingSegment
          style={`ring-segment `}
          widgetOutAnimation={widgetOutAnimation}
          widgetInAnimationRight={widgetInAnimationRight}
          size={size}
          strokeWidth={strokeWidth - 3}
          colors={colors}
          choiceList={choiceList}
          total={total}
        />

        <div>
          <div
            className={`ring-list-container ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationLeft
            }`}
          >
            <table className="ring-table">
              <tbody>{tableGenerator(choiceList, activeRow, colors, setActiveRowIndex, handleItemSelect)}</tbody>
            </table>
          </div>
          <p
            className={`ring-instruction ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationLeft
            }`}
          >
            {instruction || "Select Up to Six"}
          </p>
        </div>
        <div className="polygon-container">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            className={`polygon ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationRight
            }`}
            onClick={incrementSegmentValue}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.00006 0.310303L9.25814 7.68552H0.74198L5.00006 0.310303Z" />
          </svg>

          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            className={`polygon ${
              widgetOutAnimation ? widgetOutAnimation : widgetInAnimationRight
            }`}
            onClick={decrementSegmentValue}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.00006 7.97754L9.25814 0.602325H0.74198L5.00006 7.97754Z" />
          </svg>
        </div>
        <svg
          width={size}
          height={size}
          ref={circleRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the SVG area
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className={`ring-svg ${
            widgetOutAnimation ? widgetOutAnimation : widgetInAnimationRight
          }`}
        >
          {/* Background Circle */}
          {isDragging ? (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#e6e6e6"
              strokeWidth={strokeWidth}
              style={{ pointerEvents: "none" }}
            />
          ) : (
            ""
          )}
          {/* SegmentValue Circle */}
          {isDragging ? (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={activeRowIndex != null ? colors[activeRowIndex] : color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start at 12 o'clock
              style={{ cursor: "pointer", pointerEvents: "stroke" }}
            />
          ) : (
            ""
          )}
          {/* Text Label */}

          <text
            x="50%"
            y="34%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="ring-number"
          >
            {`${Math.round(segmentValue)}`}
          </text>
          {/* Decrement Triangle (below text) */}
          <text
            x="50%"
            y="53%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="ring-label"
          >
            {"TALLY"}
          </text>
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={isValidTotal ? "highlight ring-number" : "ring-number"}
          >
            {total}
          </text>
          <text
            x="50%"
            y="75%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={isValidTotal ? "highlight ring-label" : "ring-label"}
          >
            {"TOTAL"}
          </text>
        </svg>
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

      {(total < 100 && ringPass) || total > 100 ? (
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
