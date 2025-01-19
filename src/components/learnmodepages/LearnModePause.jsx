import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import TopButton from "../composed/TopButton";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Timer from "../../utilities/Timer";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import RightPointerArrow from "../RightPointerArrow";
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModePause({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeStart");
  //   navigate("/LearnModeStart");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeAddToStory");
  //   navigate("/LearnModeAddToStory");
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
          <div className="pause_right_arrow">
            <RightPointerArrow />
          </div>
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
                  props={`The Pause button? it allows you
                    to pause your survey for the
                    time being.`}
                /> */}

                {/* <h2 className="learn-text">
                  {`The Pause button? it allows you
                    to pause your survey for the
                    time being.`}
                </h2> */}

                {/* <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                /> */}
              </div>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
                {`PAUSE`}
                <br />
                {`A one time, five minutes maximum for a bathroom break 
                    or to place that takeout order. An overlay comes onto the 
                    timer that counts down using text that goes from green to 
                    orange to red. The button area goes blue and text changes 
                    to say CONTINUE.`}
              </h2>

              {/* <Teleprompter
                storyBuild={`The Pause button? it allows you
                    to pause your survey for the
                    time being.`}
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
