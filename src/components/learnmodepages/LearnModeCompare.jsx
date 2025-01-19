import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import TopButton from "../composed/TopButton";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import Timer from "../../utilities/Timer";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import PointerArrowHorizontal from "../PointerArrowHorizontal";
import LeftPointerArrow from "../LeftPointerArrow";
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModeCompare({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModePreview");
  //   navigate("/LearnModePreview");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeTalk");
  //   navigate("/LearnModeTalk");
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
                  {`Hi! I'm Edge, you're currently in Learn Mode. To Exit, Click Exit.`}
                </h2>

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

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

                {/* <TalkBubble
                  props={`It allows you to compare your
                    survey with other survey.`}
                /> */}

                {/* <h2 className="learn-text">
                  {`It allows you to compare your
                    survey with other survey.`}
                </h2> */}

                {/* <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                /> */}
              </div>
            </Queue>
          </div>

          {/* <div className="compare_horizontal_arrow">
            <PointerArrowHorizontal />
          </div> */}

          <div className="compare_left_arrow">
            <LeftPointerArrow />
          </div>
          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
                {`COMPARE`}
                <br/>
                {`When the number of responses exceeds Thirty 
                for the aggregate sample on specific Questions 
                that are pre-selected, randomly chosen, or triggered 
                by survey monitoring behavior that raises Concern over 
                respondent engagement intensity, edge will appear as a 
                small figure next to the compare button and it will be blue 
                (active). If touched, or herwise chosen the system checks to 
                make sure the respondent has completed that question and then 
                presents a side by side set on rings, Single bars or clustered 
                bars that shows their response On the left-hand side and that other 
                respondent To the right. The button remains blue, and The text is changed 
                to say Continue`}
              </h2>

              {/* <Teleprompter
                storyBuild={`It allows you to compare your
                    survey with other survey.`}
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
