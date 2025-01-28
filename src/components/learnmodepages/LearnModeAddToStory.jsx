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
import Teleprompter from "../standalone/Teleprompter";
import LeftPointerArrow from "../LeftPointerArrow";

export default function LearnModeAddToStory() {
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
        <LeftPointerArrow style={"add_story_left_arrow"} />
        <div className="body_content">
          <div className="story_queue-group ">
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
                {`ADD IT`}
                <br />
                {`When TALK is active, the respondent has recorded their 
                additional choice as seen in the text balloon this button becomes 
                blue and blinks three times, pauses for five seconds and blinks three 
                times again in a cycle of three times. When an answer is completed in 
                a widget below it is also blue to allow someone to move the answer up 
                with a touch rather than a swipe`}
              </h2>
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
