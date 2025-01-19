import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import Timer from "../../utilities/Timer";
import TopButton from "../composed/TopButton";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import PointerArrowHorizontal from "../PointerArrowHorizontal";
import LeftPointerArrow from "../LeftPointerArrow";
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModePdfIt({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeTalk");
  //   navigate("/LearnModeTalk");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeExit");
  //   navigate("/LearnModeExit");
  // };

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
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />

                <h2 className="edge-greet">
                  {`Hi! I'm Edge, you're currently in Learn Mode. To Exit, Click Exit.`}
                </h2>

                {/* <Teleprompter
                  storyBuild={`Hello I'm Edge and You are currently in Learn Mode to exit press the Exit button`}
                /> */}

                {/* <div className="talkbubble-btn">
                  <Button
                    onClick={goToPrevious}
                    label="PREVIOUS"
                    className={`${classNameA} bottom_button talk-btn-learn`}
                  />
                  <Button
                    onClick={goToNext}
                    label="NEXT"
                    className={`${classNameB} bottom_button talk-btn-exit`}
                  />
                </div> */}

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                {/* <TalkBubble
                  props={`Pdf it allows you to convert
                    your survey to pdf which can 
                    be viewed or saved for later
                    purpose.`}
                /> */}

                {/* <h2 className="learn-text">
                  {`Pdf it allows you to convert
                    your survey to pdf which can 
                    be viewed or saved for later
                    purpose.`}
                </h2> */}
                {/* 
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                /> */}
              </div>
            </Queue>
          </div>

          {/* <div className="pdf_horizontal_arrow">
            <PointerArrowHorizontal />
          </div> */}

          <div className="pdf_left_arrow">
            <LeftPointerArrow />
          </div>
          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
              {`PDF IT`}
                  <br />
                  {`Available upon successful end point of a Narrative 
                  surveys generates a .dpf of the story with blanks filled 
                  with answers up to 25 characters. Answers that exceed the 
                  maximum display character count show a partial listing on 
                  the storyline page and use a superscript number to correspond 
                  to a final page that has those numbers and the response answers 
                  to all questions as a series of footnotes. This includes choices 
                  or choices with weights, percentages, importance values, or rankings 
                  or ratings with the traditional version of the question placed to its 
                  Left replacing the Sentences with blanks`}
              </h2>
              {/* <Teleprompter
                storyBuild={`Pdf it allows you to convert
                    your survey to pdf which can 
                    be viewed or saved for later
                    purpose.`}
              >
                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />
              </Teleprompter> */}
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
