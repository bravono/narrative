import React from "react";
import { useSelector } from "react-redux";

import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TopButton from "../composed/TopButton";
import EdgeStanding from "../EdgeStanding";
import Timer from "../../utilities/Timer";
import Logo from "../Logo";
import NavigatorButtons from "../composed/NavigatorButtons";
import ArrowPointer from "../standalone/ArrowPointer";
import Teleprompter from "../standalone/Teleprompter";
import Barrel from "../composed/Barrel";
import Ring from "../composed/Ring";
import Bar from "../composed/Bar";
import Triangle from "../composed/Triangle";

import elements from "../../services/learnMode";
import fakeSurvey from "../../services/fakeSurvey";

import "../../css/LearnMode.css";

export default function LearnMode() {
  const currentIndex = useSelector((state) => state.entities.elements.index);
  const currentQuestionTypeIndex = useSelector((state) => state.entities.elements.questionTypeIndex);
  const left = elements[currentIndex].position.left;
  const top = elements[currentIndex].position.top;
  const rotation = elements[currentIndex].rotation;
  const title = elements[currentIndex].title;
  const description = elements[currentIndex].description;
  const widget = elements[currentIndex].widget;

  const choiceList = fakeSurvey.choiceList;
  const heading = fakeSurvey.heading;
  const questionType = fakeSurvey.questionType[currentQuestionTypeIndex];
  const instruction = fakeSurvey.instruction;

  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <EdgeChair />

          <ArrowPointer left={left} top={top} rotation={rotation} />

          <Timer duration={600} label={"PENDING"} />
          <TopButton classNameA={"learn"} classNameB={"learn"} />
        </div>
      </section>

      <section className="middle-section">
        <div className="body_content">
          <div className="story_queue-group ">
            <Queue className={"queue question"}>
              <EdgeStanding src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg" />
              <Teleprompter
                story={`Hello I'm Edge and You are currently in Learn Mode to exit press the Exit button`}
              >
                <NavigatorButtons />
              </Teleprompter>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              {widget === "ring" ? (
                <Ring choiceList={choiceList} />
              ) : widget === "bar" ? (
                <Bar choiceList={choiceList} />
              ) : widget === "triad" ? (
                <Triangle choiceList={choiceList} />
              ) : widget === "barrel" ? (
                <Barrel
                  heading={heading}
                  choiceList={choiceList}
                  questionType={questionType}
                  instruction={instruction}
                />
              ) : (
                <p>
                  {title}
                  <br />
                  {description}
                </p>
              )}
            </Queue>
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
