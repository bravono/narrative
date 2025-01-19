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
import BarWidget from "./LMBarWidget";

export default function LearnModeBarClick({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const goToPrevious = () => {
  //   alert("Routing to LearnModeBarDrag");
  //   navigate("/LearnModeBarDrag");
  // };

  // const goToNext = () => {
  //   alert("Routing to LearnModeBarScreen");
  //   navigate("/LearnModeBarScreen");
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
                  {`This is the Bar. Click to increase or decrease Bar.`}
                </h2>

                <LearnButtonState
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                {/* <TalkBubble
                  props={`This is the Bar. 
                    Click to increase/decrease Bar.`}
                /> */}
              </div>
            </Queue>
          </div>

          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <div className="bar_click_arrow ">
                <PointerArrowHorizontal />
              </div>

              <BarWidget />
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
