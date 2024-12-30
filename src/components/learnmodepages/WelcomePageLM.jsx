import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import Timer from "../../utilities/Timer";
import TopButton from "../composed/TopButton";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import Button from "../Button";
import "../../css/LearnModePage.css";

export default function WelcomePageLM({ classNameA, classNameB }) {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/activemode");
  };
  const handleLearn = () => {
    navigate("/LearnModeTimer");
  };
  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <EdgeChair />
          <Timer duration={600} label={"PENDING"} />

          <TopButton classNameA={"learn"} classNameB={"learn"} />
        </div>
      </section>

      <section className="middle-section">
        <div className="body_content">
          <div className="story_queue-group learn-mode">
            <Queue className={"queue question"}>
              <div className={"contents"}>
                <div className="talkbubble-btn">
                  <Button
                    onClick={handleLearn}
                    label="LEARN"
                    className={`${classNameA} bottom_button talk-btn-learn learnwelcome`}
                  />
                  <Button
                    onClick={handleExit}
                    label="BEGIN"
                    className={`${classNameB} bottom_button talk-btn-exit exitwelcome`}
                  />
                </div>

                <h2 className="learn-welcome-text">
                  {`Hello and welcome to Research Libs. Click the LEARN button to learn about this tool or BEGIN to begin your survey.`}
                </h2>
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />
              </div>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"} />
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <BottomButton
          classNameA={"learn"}
          classNameB={"learn"}
          classNameC={"learn"}
          classNameD={"learn"}
        />
      </section>
    </main>
  );
}

export function session() {
  // queryString.parse(location.search);
  const result = location.search;

  return result;
}
