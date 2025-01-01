import React from "react";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import Timer from "../../utilities/Timer";
import TalkBubble from "../TalkBubble";
import TopButton from "../composed/TopButton";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";
import PointerArrowVertical from "../PointerArrowVertical";
import BarWidget from "./LMBarWidget";

export default function LearnModeBarScreen({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  // alert("Routing to LearnModeBarClick");
  // navigate("/LearnModeBarClick");
  // };

  // const goToNext = () => {
  // alert("Routing to LearnModeRingTally");
  // navigate("/LearnModeRingTally");
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

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                <TalkBubble
                  props={`This is the Bar progress
                    display screen.`}
                />
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />
              </div>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <BarWidget />
              <div className="bar_screen_arrow ">
                <PointerArrowVertical />
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
