import React, { useRef, useEffect, useState } from "react";
import "../../css/BarrelTable.css";



const BarrelTable = ({  }) => {
  const choiceList = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6", // Additional items make the table scrollable
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];
  const containerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

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

  const visibleRows = 5; // Display exactly 5 rows
  const rowHeight = 177 / visibleRows; // Calculate height for each row
  const centerIndex = Math.floor(scrollOffset / rowHeight) + 2;

  return (
    <div className="barrel-table-container" ref={containerRef}>
      <div className="barrel-table">
        {choiceList.map((item, rowIndex) => {
          const prominenceFactor = Math.abs(centerIndex - rowIndex);

          return (
            <div
              key={rowIndex}
              className="table-row"
              style={{
                transform: `scale(${1 - prominenceFactor * 0.01}) rotateX(${
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
                  {colIndex === 0 ? item : "⬜"} {/* Placeholder for icons */}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarrelTable;

