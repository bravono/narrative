import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { apiEndpoint, testEndpoint } from "../../config.json";
import { getSurvey } from "../../services/surveyServices";
import BottomButton from "../BottomButton";
import EdgeChair from "../EdgeChair";
import MiddleButton from "../MiddleButton";
import Queue from "../Queue";
import TalkBubble from "../TalkBubble";
import Timer from "../../utilities/Timer";
import TopButton from "../composed/TopButton";
import EdgeStanding from "../EdgeStanding";
import Logo from "../Logo";
import Button from "../Button";
import http from "../../services/httpServices";
import queryString from "query-string";
import "../../css/LearnModePage.css";
import "../../css/LearnModePage.css";

export default function WelcomePageLM({ classNameA, classNameB }) {
  const navigate = useNavigate();
  const initialDuration = 60;
  const [counterComplete, setCounterComplete] = useState(false);
  const [arrowColor, setArrowColor] = useState("gray"); // Initial SVG color
  const [timerLabel, setTimerLabel] = useState("pending");
  const [isRunning, setIsRunning] = useState(true);
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [error, setError] = useState("");
  const [story, setStory] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [widget, setWidget] = useState("");
  const [heading, setHeading] = useState("");
  const [choiceList, setChoiceList] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [duration, setDuration] = useState(initialDuration);
  const [pauseDuration, setPauseDuration] = useState(100);
  const [timeLeft, setTimeLeft] = useState(100);
  const [isRecording, setIsRecording] = useState(false);
  const [wantsToTalk, setWantsToTalk] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [blankName, setBlankName] = useState("");
  const [isDescending, setIsDescending] = useState(true);
  const [allChoicesHaveValue, setAllChoicesHaveValue] = useState(false);
  const [canContinue, setCanContinue] = useState(0); // Decide when the Continue button can be used
  const [chooseOne, setChooseOne] = useState(false);
  const [noSelectedChoices, setNoSelectedChoices] = useState(0); // Use for checkboxes
  const [oneItemInChoiceList, setOneItemInChoiceList] = useState(0); // Only bar can have one item in the choice list
  const [percentage, setPercentage] = useState(false); // Check if the only item






  const fetchSurvey = async () => {
    // try {
      const session = location.search;
      const survey = await getSurvey(session);
      const data = survey.data.reply;
  
      console.log(data)
     
      
    // } catch (error) {
    //   setError("Error with POST request");
    // }
  }

  fetchSurvey()


  const handleExit = () => {
    navigate("/welcomeactivemode");
  };
  const handleLearn = () => {
    navigate("/LearnModeTimer");
  };
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
                <div className="talkbubble-btn">
                  <Button
                    onClick={handleLearn}
                    label="LEARN"
                    className={`${classNameA} bottom_button talk-btn-learn`}
                  />
                  <Button
                    onClick={handleExit}
                    label="EXIT"
                    className={`${classNameB} bottom_button talk-btn-exit`}
                  />
                </div>

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

export function session() {
  // queryString.parse(location.search);
  const result = location.search;

  return result;
}
