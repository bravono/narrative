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
import "../../css/header.css";
import PointerArrowHorizontal from "../PointerArrowHorizontal";
import Teleprompter from "../standalone/Teleprompter";
import LeftPointerArrow from "../LeftPointerArrow";

export default function LearnModeAddToStory({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModePause");
  //   navigate("/LearnModePause");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModePreview");
  //   navigate("/LearnModePreview");
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
                  props={`The add to story enables
                    you to add to the survey.`}
                /> */}

                {/* <h2 className="learn-text">
                  {`The add to story enables
                    you to add to the survey.`}
                </h2> */}

                {/* <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                /> */}
              </div>
            </Queue>
          </div>

          {/* <div className="add_story_horizontal_arrow">
            <PointerArrowHorizontal />
          </div> */}

          <div className="add_story_left_arrow">
            <LeftPointerArrow />
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
              {`ADD IT`}
                <br />
                {`When TALK is active, the respondent has recorded their 
                additional choice as seen in the text balloon this button becomes 
                blue and blinks three times, pauses for five seconds and blinks three 
                times again in a cycle of three times. When an answer is completed in 
                a widget below it is also blue to allow someone to move the answer up 
                with a touch rather than a swipe`}
              </h2>

              {/* <Teleprompter
                  storyBuild={`The add to story enables
                    you to add to the survey.`}
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
