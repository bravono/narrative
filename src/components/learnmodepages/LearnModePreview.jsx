import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import TopButton from "../composed/TopButton";
import "../../css/LearnModePage.css";
import Timer from "../../utilities/Timer";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import PointerArrowHorizontal from "../PointerArrowHorizontal";
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModePreview() {
  

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
              <PointerArrowHorizontal />
        <div className="body_content">
          <div className="story_queue-group learn-mode">
            <Queue className={"queue question"}>
            <EdgeStanding src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg" />
              <Teleprompter
                story={`Hello I'm Edge and You are currently in Learn Mode to exit press the Exit button`}
              >
              <LearnButtonState />
              </Teleprompter>
            </Queue>
          </div>

     
          
          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <h2 className="learn-text">
                {`PREVIEW`}
                <br />
                {`See a story as it builds or unabridged at the end. 
                    We use the Answer Queue area to display completed story content. 
                    Use Roll to Scroll arrows to move earlier or later. Simply click 
                    outside the Answer Queue to make it disappear`}
              </h2>
              {/* <Teleprompter
                  storyBuild={`The preview button allows you
                    to preview the survey you
                    worked on.`}
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
