import BottomButton from "./BottomButton";
import EdgeChair from "./EdgeChair";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import TalkBubble from "./TalkBubble";
import Timer from "./Timer";
import TopButton from "./TopButton";
import "../css/LearnModePage.css";
import EdgeStanding from "./EdgeStanding";
import LearnButton from "./LearnButton";

export default function LearnModePage() {
  return (
    <main className="main-container">
      <section className="top-section">
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
                <LearnButton
                  classNameA={"secondary"}
                  classNameB={"secondary"}
                />

                <TalkBubble
                  props={`My name is Samsudeen Yusuf. This is a prop 🧪🧪🧪
                  testing the functionality of the talk bubble svg. 
                  This has perhaps confirms the status of the function`}
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
