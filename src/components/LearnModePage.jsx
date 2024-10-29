import BottomButton from "./BottomButton";
import EdgeChair from "./EdgeChair";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import TalkBubble from "./TalkBubble";
import Timer from "./Timer";
import TopButton from "./TopButton";
import "../css/header.css";
import "../css/mainContent.css";
import EdgeStanding from "./EdgeStanding";
import Button from "./Button";

export default function LearnModePage() {
  return (
    <main className="main-container">
      <section className="top-section">

        <div className="header">
          <EdgeChair />
          <Timer duration={"4:59"} label={"PENDING"} />
          <TopButton />
        </div>
        
      </section>

      <section className="middle-section">
        <div className="body_main">
          <div className="story_queue-group learn-mode">
            <Queue className={"story-queue question"}>
              <div className={"contents"}>
                <TalkBubble />
                <EdgeStanding
                  src="/assets/Edge_Emotional_States_Hands_Back_Blue.svg"
                  className="hands-back"
                />
              </div>
              <div className="talkbubble-btn">
                <Button label="LEARN" className="bottom_button talk-btn" />
                <Button label="EXIT" className="bottom_button talk-btn" />
              </div>
            </Queue>
          </div>

          <MiddleButton />

          <div className="story_queue-single">
            <Queue className={"story-queue answer"} />
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <BottomButton />
      </section>
    </main>
  );
}
