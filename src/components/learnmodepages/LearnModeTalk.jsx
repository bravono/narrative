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
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModeTalk({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeCompare");
  //   navigate("/LearnModeCompare");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModePdfIt");
  //   navigate("/LearnModePdfIt");
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

                {/* <Teleprompter
                  storyBuild={`Hello I'm Edge and You are currently in Learn Mode to exit press the Exit button`}
                /> */}

                <h2 className="edge-greet">
                  {`Hi! I'm Edge, you're currently in Learn Mode. To Exit, Click
                  Exit.`}
                </h2>

                {/* <div className="talkbubble-btn">
                  <Button
                    onClick={goToPrevious}
                    label="PREVIOUS"
                    className={`${classNameA} bottom_button talk-btn-learn button-small`}
                  />
                  <Button
                    onClick={goToNext}
                    label="NEXT"
                    className={`${classNameB} bottom_button talk-btn-exit button-small`}
                  />
                </div> */}

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                {/* <TalkBubble
                  props={`This allows you to engage
                    in conversation using preset
                    phrases or sentences.`}
                /> */}

                {/* <h2 className="learn-text">
                  {`This allows you to engage
                    in conversation using preset
                    phrases or sentences.`}
                </h2> */}

                {/* <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                /> */}
              </div>
            </Queue>
          </div>

          <div className="talk_horizontal_arrow">
            <PointerArrowHorizontal />
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
                {`TALK`}
                <br />
                {`A respondent can verbalize the additional of a 
                    choice in a ring or barrel question list. Or add a 
                    comment in their own words to add to their insight. 
                    A verbal ability to specify something else not listed 
                    much like the traditional Use of as Other (specify)`}
              </h2>

              {/* <Teleprompter storyBuild={`This allows you to engage
                    in conversation using preset
                    phrases or sentences.`}>
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
