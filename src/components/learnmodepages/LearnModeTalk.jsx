import React from "react";
<<<<<<< HEAD:src/components/LearnModeTalk.jsx
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
=======
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import Timer from "../Timer";
import TopButton from "../TopButton";
import "../../css/LearnModePage.css";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
>>>>>>> LearnModePagesRefactoring:src/components/learnmodepages/LearnModeTalk.jsx
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButtonState from "./LearnButtonState";

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
          <Timer duration={"4:59"} label={"PENDING"} />
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

                <TalkBubble
                  props={`This allows you to engage
                    in conversation using preset
                    phrases or sentences.`}
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
            <Queue className={"queue answer"} />
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
