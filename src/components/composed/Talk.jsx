import React from "react";
import Button from "./../Button";
import "../../css/Talk.css";

export default function Talk({ onClick }) {
  return (
    <div className="talk-group grid-2x2">
        <table className="talk-group__table">
          <tbody>
            <tr>
              <td>RECORD</td>
              <td>To add a choice</td>
            </tr>
            <tr>
              <td>ERASE</td>
              <td>To re-record</td>
            </tr>
            <tr>
              <td>CANCEL</td>
              <td>To add to your story</td>
            </tr>
            <tr>
              <td>DONE</td>
              <td>To go back to story</td>
            </tr>
          </tbody>
        </table>
        <img
          className="talk-edge"
          src="assets/Edge_Emotional_States_Hands_Back_Blue.svg"
          alt=""
        />
      <div className="talk-controls">
        <Button
          onClick={onClick}
          label="RECORD"
          className={"primary button-small"}
        />
        <Button
          onClick={onClick}
          label="ERASE"
          className={"primary button-small disabled"}
        />
        <Button
          onClick={onClick}
          label="CANCEL"
          className={"primary button-small"}
        />
        <Button
          onClick={onClick}
          label="DONE"
          className={"primary button-small disabled"}
        />
      </div>
    </div>
  );
}
