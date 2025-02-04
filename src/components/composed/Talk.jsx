import React, { useEffect } from "react";
import Button from "./../Button";
import "../../css/Talk.css";

export default function Talk({
  onRecord,
  onErase,
  onCancel,
  onDone,
  isRecording,
  transcript,
  onSetNewChoices,
}) {
  const isLengthy = transcript.length;
  const newChoices = transcript.split(".");
  const addedChoiceList = newChoices.map((newChoice, index) => (
    <p key={index} className="added-choice">
      <img src="/assets/Bullet.svg" alt="" />
      {newChoice}
    </p>
  ));

  useEffect(() => {
    onSetNewChoices(newChoices);
  }, [transcript]);

  return (
    <div className="talk-container grid-2x2">
      {isRecording ? (
        <div className="choice-group">
          <div className="choice-container">
            <img className="talk-wave" src="/assets/Talk.svg" alt="" />
            <div className="added-choice-container">
              {newChoices.length > 4 ? (
                <div>
                  {addedChoiceList[0]}
                  {addedChoiceList[1]}
                  {addedChoiceList[2]}
                  <p>Can't add more than 3 items. </p>
                </div>
              ) : (
                addedChoiceList
              )}
            </div>
          </div>
          {!isLengthy ? (
            <strong>
              <img src="/assets/Bullet.svg" alt="" /> = Individual list <br/>
              Pause inbetween to add multiple choices
            </strong>
          ) : (
            ""
          )}
        </div>
      ) : (
        <table className="talk-group__table">
          <tbody>
            <tr>
              <td>TYPE OR SPEAK</td>
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
      )}
      <img
        className="talk-edge"
        src="assets/Edge_Emotional_States_Hands_Back_Blue.svg"
        alt=""
      />
      <div className="talk-controls">
        <Button
          onClick={onRecord}
          label={isRecording ? "TRANSCRIBING" : "TYPE OR SPEAK"}
          className={"primary button-small"}
        />
        <Button
          onClick={onErase}
          label="ERASE"
          className={
            isLengthy ? "primary button-small" : "button-small disabled"
          }
        />
        <Button
          onClick={onCancel}
          label="CANCEL"
          className={"primary button-small"}
        />
        <Button
          onClick={onDone}
          label="DONE"
          className={
            isLengthy ? "primary button-small" : "button-small disabled"
          }
        />
      </div>
    </div>
  );
}
