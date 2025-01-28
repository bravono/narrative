import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import TopButton from "../composed/TopButton";
import Timer from "../../utilities/Timer";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import RingWidget from "./LMRingWidget";
import PointerArrowHorizontal from "../PointerArrowHorizontal";
import Teleprompter from "../standalone/Teleprompter";

export default function LearnModeRingTally({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeBarScreen");
  //   navigate("/LearnModeBarScreen");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeRingTotal");
  //   navigate("/LearnModeRingTotal");
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
              <RingWidget />
              <div className="tally_arrow">
                <PointerArrowHorizontal />
              </div>
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
