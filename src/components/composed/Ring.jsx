import React, { useState, useRef, useEffect } from "react";
import RingLever from "../standalone/RingLever";
import AnswerQueueButtons from "./AnswerQueueButtons";
import "../../css/ring.css";

const Ring = ({
  heading,
  instruction,
  onGetTotal,
  choiceValuePair,
  onSortToggle,
  onUpdateChoiceValuePair,
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
  const [total, setTotal] = useState(0);
  const [allChoicesHaveValue, setAllChoicesHaveValue] = useState(false);

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
    // Calculate the total whenever choiceValuePair changes
    const newTotal = Object.values(choiceValuePair).reduce(
      (sum, value) => sum + value,
      0
    );
    setTotal(newTotal);
    onGetTotal(newTotal);

    // Check if all choices have a value
    setAllChoicesHaveValue(
      Object.keys(choiceValuePair).every(
        (choice) => choiceValuePair[choice] > 0
      )
    );
  }, [choiceValuePair]);

  // Mouse/touch event handlers

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSegmentValue(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSegmentValue(e.clientX, e.clientY);
    }
  };

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
    console.log("Current choice:", choice);
    setActiveRow(choice);

    onUpdateChoiceValuePair(choice, Math.round(segmentValue));

    setSegmentValue(0); // Reset segmentValue to 0
  };

  const handleContinueOrRoundup = (updatedChoiceValuePair) => {
    setChoiceValuePair(updatedChoiceValuePair);
  };

  

  const tableRows = Object.keys(choiceValuePair).map((choiceList, rowIndex) => {
    useEffect(() => {
      console.log(choiceValuePair);
    }, [choiceValuePair]);

    return (
      <tr
        key={rowIndex}
        onClick={() => handleItemSelect(choiceList)}
        style={{
          backgroundColor: activeRow === choiceList ? "lightblue" : "",
        }}
      >
        {[choiceList].map((cellData, colIndex) => (
          <td key={colIndex}>{cellData || ""}</td>
        ))}
        <td>
          {choiceValuePair[choiceList] !== undefined
            ? choiceValuePair[choiceList]
            : null}
        </td>
      </tr>
    );
  });

  const isValidTotal = total > 100 || (total < 100 && allChoicesHaveValue);

  return (
    <div className="ring-set">
      <RingLever sorted={isSorted} onClick={handleSortToggle} />
      <p className="ring-heading">{heading || "PEOPLE OR PLACES"}</p>
      <div className="ring">
        <div>
          <div className="ring-list-container">
            <table className="ring-table">
              <tbody>{tableRows}</tbody>
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
          classAddAChoice={
            Object.values(choiceValuePair).length < 6 ? "primary" : "disabled"
          }
          classContinue={
            (allChoicesHaveValue && total > 94 && total < 100) || total === 100
              ? "primary"
              : "disabled"
          }
          label={
            allChoicesHaveValue && total > 94 && total < 100
              ? "ROUNDUP"
              : "CONTINUE"
          }
          choiceValuePair={choiceValuePair}
          onContinueOrRoundup={handleContinueOrRoundup}
          onAddToChoice={onAddToChoice}
        />
      </div>
      {total > 100 && (
        <div className="total_above">
          Your total does not sum to the required number. Adjust your values or
          if within 5% of required sum you can press Round Up.
        </div>
      )}
      {allChoicesHaveValue && total < 100 && (
        <div className="total_below">
          Your total does not sum to the required number. Adjust your values or
          if within 5% of required sum you can press Round Up.
        </div>
      )}
    </div>
  );
};

export default Ring;
