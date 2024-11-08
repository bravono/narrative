import React, { useState, useRef, useEffect } from "react";
import RingLever from "../standalone/RingLever";
import AnswerQueueButtons from "./AnswerQueueButtons";
import "../../css/ring.css";

const Ring = (props) => {
  const size = 150;
  const strokeWidth = 23;
  const color = "#4caf50";
  const { heading, choiceList, instruction } = props;
  const isFollowUp = true;
  const [segmentValue, setSegmentValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);
  const [isSorted, setIsSorted] = useState(false);
  const [activeCell, setActiveCell] = useState(null);
  const [choiceValuePair, setChoiceValuePair] = useState({});
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
    if (activeCell != null) {
      console.log("Value : Pair", choiceValuePair);
    }
  }, [activeCell, choiceValuePair]);

  useEffect(() => {
    // Calculate the total whenever choiceValuePair changes
    const newTotal = Object.values(choiceValuePair).reduce(
      (sum, value) => sum + value,
      0
    );
    setTotal(newTotal);

    // Check if all choices have a value
    setAllChoicesHaveValue(
      choiceList.every((choice) => choice in choiceValuePair)
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
    setSegmentValue(segmentValue - 1);
  };

  const handleSort = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    console.log("sorted");
  };

  const handleItemSelect = (choice, rowIndex, colIndex) => {
    setActiveCell(`${rowIndex}-${colIndex}`);

    setChoiceValuePair((prevChoiceValuePair) => ({
      ...prevChoiceValuePair,
      [choice]: Math.round(segmentValue), // Update or add the choice-value pair
    }));

    setSegmentValue(0); // Reset segmentValue to 0
  };

  const handleContinueOrRoundup = (updatedChoiceValuePair) => {
    setChoiceValuePair(updatedChoiceValuePair);
  };

  const tableRows = choiceList.map((choice, rowIndex) => {
    useEffect(() => {
      if (choice === activeCell) {
        // Only update the selected choice
        setChoiceValuePair((prevChoiceValuePair) => ({
          ...prevChoiceValuePair,
          [choice]: Math.round(segmentValue),
        }));
      }
    }, [segmentValue, choice, activeCell, choiceValuePair]); // Include activeCell as a dependency

    return (
      <tr key={rowIndex}>
        {[choice].map((cellData, colIndex) => (
          <td
            key={colIndex}
            onClick={() => handleItemSelect(choice, rowIndex, colIndex)}
            style={{
              backgroundColor:
                activeCell === `${rowIndex}-${colIndex}` ? "lightblue" : "",
            }}
          >
            {cellData || ""}
          </td>
        ))}
        <td>
          {choiceValuePair[choice] !== undefined
            ? choiceValuePair[choice]
            : null}
        </td>
      </tr>
    );
  });

  return (
    <div className="ring-set">
      <RingLever sorted={isSorted} onClick={handleSort} />
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
            className={total > 100 ? "highlight ring-number" : "ring-number"}
          >
            {total}
          </text>
          <text
            x="50%"
            y="75%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={"ring-label"}
          >
            {"TOTAL"}
          </text>
        </svg>
      </div>
      <div className="ring-buttons">
        <AnswerQueueButtons
          isFollowUp={isFollowUp}
          classAddAChoice={"disabled"}
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
