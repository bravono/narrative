import React from "react";
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
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import LearnButton from "./LearnButton";

export default function WelcomePageLM({ classNameA, classNameB }) {
  // const navigate = useNavigate();

  // const handleRoute = () => {
  //   alert("Routing to LearnModeTimer");
  //   navigate("/LearnModeTimer");
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
                    onClick={handleRoute}
                    label="LEARN"
                    className={`${classNameA} bottom_button talk-btn-learn`}
                  />
                  <Button
                    label="EXIT"
                    className={`${classNameB} bottom_button talk-btn-exit`}
                  />
                </div> */}
                <LearnButton
         
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                <TalkBubble
                  props={`Welcome to the opportunity to
                    compare taking the same survey 
                    using a traditional question/list 
                    methd and a narrative sentence 
                    with a blank/list method.`}
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
