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
import TriangleWidget from "./LMTriangleWidget";
import LeftPointerArrow from "../LeftPointerArrow";

export default function LearnModeSelectAnything({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeContinue");
  //   navigate("/LearnModeContinue");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeSelectAnyTwo");
  //   navigate("/LearnModeSelectAnyTwo");
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

                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />

                <h2 className="edge-greet">
                  {`Hi! I'm Edge, you're currently in Learn Mode. To Exit, Click Exit.`}
                  <br />
                  {`Click on anything on the interface 
                    to learn about it.
                    Press next to find the object if
                    it's not here.`}
                </h2>

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                {/* <TalkBubble
                  props={`Click on anything on the interface 
                    to learn about it.
                    Press next to find the object if
                    it's not here.`}
                /> */}
              </div>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <div className="select-anything_arrow">
                <LeftPointerArrow />
              </div>
              <TriangleWidget />
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
