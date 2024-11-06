import React from "react";
import BottomButton from "./BottomButton";
import EdgeChair from "./EdgeChair";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import TalkBubble from "./TalkBubble";
import Timer from "../utilities/Timer";
import TopButton from "./TopButton";
import "../css/LearnModePage.css";
import EdgeStanding from "./EdgeStanding";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function LearnModeStickyArrowMultiple({
  classNameA,
  classNameB,
}) {
  // export default function LearnModeStickyArrowMultiple({ ...props }) {
  const navigate = useNavigate();

  const goToPrevious = () => {
    alert("Routing to LearnModeToggle");
    navigate("/LearnModeToggle");
  };

  const goToNext = () => {
    alert("Routing to LearnModeStickyArrowSingle");
    navigate("/LearnModeStickyArrowSingle");
  };

  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <EdgeChair />
          <Timer duration={"4:59"} label={"PENDING"} />
          {/* <TopButton {...props} /> */}
          <TopButton classNameA={"learn"} classNameB={"learn"} />
        </div>
      </section>

      <section className="middle-section">
        <div className="body_content">
          <div className="story_queue-group learn-mode">
            <Queue className={"queue question"}>
              <div className={"contents"}>
                <div className="talkbubble-btn">
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
                </div>

                {/* <LearnButtonState {...props} /> */}
                {/* <LearnButtonState
                  onClick={handleClicks}
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                /> */}

                <TalkBubble
                  props={`This is the sticky arrow which
                    identifies the multiple choice.`}
                />
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />
              </div>
            </Queue>
          </div>

          {/* <MiddleButton {...props} /> */}
          <MiddleButton classNameA={"learn"} classNameB={"learn"} />

          <div className="story_queue-single">
            <Queue className={"queue answer"} />
          </div>
        </div>
      </section>

      <section className="bottom-section">
        {/* <BottomButton {...props} /> */}
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
