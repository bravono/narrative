import React, { useState, useRef, useEffect, act } from "react";
import RingLever from "../standalone/RingLever";
import capitalizeWords from "../../utilities/capilizeWords";
import AnswerQueueButtons from "./AnswerQueueButtons";
import Checkbox from "../standalone/CheckBox";
import "../../css/ring.css";

const Ring = ({
  heading,
  instruction,
  choiceList,
  onSetChoiceList,
  onGetTotal,
  onSortToggle,
  onAddToChoice,
  isRecording,
}) => {
  const size = 150;
  const strokeWidth = 23;
  const color = "#4caf50";
  const isFollowUp = true;
  const [segmentValue, setSegmentValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);
  const [isSorted, setIsSorted] = useState(false);
  const [activeRow, setActiveRow] = useState(null);
  const [currentTotal, setCurrentTotal] = useState(0); // Sum as value changes
  const [total, setTotal] = useState(0); // Sum only when all items have a value > 0
  const [allChoicesHaveValue, setAllChoicesHaveValue] = useState(false);

  useEffect(() => {}, [choiceList]);

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
    // Does all item has a weight greater than 0
    setAllChoicesHaveValue(choiceList.every((choice) => choice.value > 0));

    if (setAllChoicesHaveValue) {
      let total = 0;
      choiceList.map((choice) => {
        total += Number(choice.value);
      });
      setTotal(total);
    }
  }, [choiceList]);

  useEffect(() => {
    console.log(total);
  }, [total]);
  // Mouse/touch event handlers

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSegmentValue(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSegmentValue(e.clientX, e.clientY);

      if (activeRow) {
        onSetChoiceList((prevChoiceList) => {
          return prevChoiceList.map((choice) => ({
            ...choice, // Copy all other properties
            value:
              activeRow.name === choice.name
                ? `${Math.round(segmentValue)}`
                : choice.value, // Update 'value' conditionally
          }));
        });
      }
    }
  };

  useEffect(() => {
    console.log(activeRow);
  }, [activeRow]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mobile support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSegmentValue(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSegmentValue(e.touches[0].clientX, e.touches[0].clientY);

      if (activeRow) {
        onSetChoiceList((prevChoiceList) => {
          return prevChoiceList.map((choice) => ({
            ...choice, // Copy all other properties
            value:
              activeRow.name === choice.name
                ? `${Math.round(segmentValue)}`
                : choice.value, // Update 'value' conditionally
          }));
        });
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const incrementSegmentValue = () => {
    setSegmentValue(segmentValue + 1);
  };

  const decrementSegmentValue = () => {
    if (segmentValue > 0) {
      setSegmentValue(segmentValue - 1);
    }
  };

  const handleSortToggle = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    onSortToggle(isSorted);
  };

  const handleItemSelect = (choice) => {
    setActiveRow(choice);

    const newCurrentTotal = choiceList.reduce(
      (sum, obj) => parseInt(sum) + parseInt(obj.value),
      0
    );

    setCurrentTotal(newCurrentTotal);
    onGetTotal(newCurrentTotal);
  };

  const tableRow = choiceList.map((choice, rowIndex) => {
    return (
      <tr
        key={rowIndex}
        onClick={() => handleItemSelect(choice)}
        style={{
          backgroundColor: activeRow === choice ? "lightblue" : "",
        }}
      >
        <td id="ring-checkbox"><input type="checkbox" /></td>
        <td id="ring-list">{capitalizeWords(choice.name)}</td>
        <td>{choice.value}</td>
      </tr>
    );
  });

  const isValidTotal =
    currentTotal > 100 || (currentTotal < 100 && allChoicesHaveValue);

  return (
    <div className="ring-set">
      <RingLever sorted={isSorted} onClick={handleSortToggle} />
      <p className="ring-heading">{heading || "PEOPLE OR PLACES"}</p>
      <div className="ring">
        <div>
          <div className="ring-list-container">
            <table className="ring-table">
              <tbody>{tableRow}</tbody>
            </table>
          </div>
          <p className="ring-instruction">
            {instruction || "Select Up to Six"}
          </p>
        </div>
        <div className="polygon-container">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            className="polygon"
            onClick={incrementSegmentValue}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.00006 0.310303L9.25814 7.68552H0.74198L5.00006 0.310303Z" />
          </svg>

          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            className="polygon"
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ pointerEvents: "stroke", userSelect: "none" }}
        >
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            style={{ pointerEvents: "none" }}
          />
          {/* SegmentValue Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start at 12 o'clock
            style={{ cursor: "pointer", pointerEvents: "stroke" }}
          />
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
          isFollowUp={isFollowUp}
          isRecording={isRecording}
          classAddAChoice={choiceList.length < 6 ? "accent" : "disabled"}
          classContinue={
            allChoicesHaveValue && total > 94 && total < 100 ? "accent" : "disabled"
          }
          label={
            allChoicesHaveValue && total > 94 && total < 100
              ? "ROUNDUP"
              : "CONTINUE"
          }
          choiceList={choiceList}
          onSetChoiceList={onSetChoiceList}
          onAddToChoice={onAddToChoice}
        />
      </div>
      {total > 100 ? (
        <div className="total_above">
          Your total does not sum to the required number. Adjust your values or
          if within 5% of required sum you can press Round Up.
        </div>
      ) : (
        ""
      )}
      {total < 100 && allChoicesHaveValue ? (
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
