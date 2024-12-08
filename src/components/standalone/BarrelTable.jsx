import React, { useRef, useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import Rank from "./Rank";
import Rate from "./Rate";
import "../../css/BarrelTable.css";

const BarrelTable = ({
  choiceList,
  activeRow,
  type,
  onRadioToggle,
  onCheckToggle,
  onRank,
  onRate,
}) => {
  const containerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const visibleRows = 5; // Display exactly 5 rows
  const rowHeight = 177 / visibleRows; // Calculate height for each row
  const centerIndex = Math.floor(scrollOffset / rowHeight) + 2;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollOffset(containerRef.current.scrollTop);
      }
    };
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, [choiceList, type]);

  const handleRadioToggle = (choice) => {
    onRadioToggle(choice);
  };
  const handleCheckToggle = (choice) => {
    onCheckToggle(choice);
  };
  const handleRank = (choice) => {
    onRank(choice);
  };
  const handleRate = (choice) => {
    onRate(choice);
  };

  return (
    <>
      <div className="barrel-table__heading">Heading </div>
      <div className="barrel-table-container" ref={containerRef}>
        <div className="barrel-table">
          {choiceList.map((choice, rowIndex) => {
            const prominenceFactor = Math.abs(centerIndex - rowIndex);
            return (
              <div
                key={rowIndex}
                className="table-row"
                style={{
                  transform: `scale(${1 - prominenceFactor * -0.03}) rotateX(${
                    prominenceFactor * 15
                  }deg)`,
                  opacity: `${1 - prominenceFactor * 0.05}`,
                }}
              >
                {[...Array(5)].map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className={`table-cell ${
                      colIndex === 0 ? "first-column" : ""
                    }`}
                  >
                    {colIndex === 0 ? (
                      choice.text
                    ) : colIndex === 1 ? (
                      type === "singleChoice" ? (
                        <RadioButton
                          className="radio"
                          isChecked={choice.value}
                          onRadioToggle={() => handleRadioToggle(choice)}
                        />
                      ) : type === "multipleChoice" ? (
                        <Checkbox
                          className="checkbox"
                          isChecked={choice.value}
                          onCheckToggle={() => handleCheckToggle(choice)}
                        />
                      ) : type === "rank" ? (
                        <Rank
                          className="rank"
                          onRank={() => handleRank(choice)}
                          rank={choice.value}
                        />
                      ) : type === "rate" ? (
                        <Rate
                          className={"rate"}
                          onRate={() => handleRate(choice)}
                          rate={choice.value}
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BarrelTable;
