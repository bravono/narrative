import React from "react";
import capitalizeWords from "../../utilities/capilizeWords";

export function tableGenerator(choiceList, activeRow, setActiveRowIndex, handleItemSelect) {
    return choiceList.map((choice, rowIndex) => {
        return (
          <tr
            key={rowIndex}
            onClick={() => {
              setActiveRowIndex(rowIndex); // Store the clicked row index
              handleItemSelect(choice);
            }}
            className={activeRow.text === choice.text ? "active-row" : ""}
          >
            <td>
              <div
                className="ring-checker"
                style={{
                  background: choice.value > 0 ? colors[rowIndex] : "white",
                }}
              ></div>
            </td>
            <td id="ring-list">{capitalizeWords(choice.text)}</td>
            <td>{choice.value}</td>
          </tr>
        );
      });
}